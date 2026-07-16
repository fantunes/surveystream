import {
  getContractAddress,
  getPublicClient,
  getWalletClient,
  isConfigured,
  surveyRecordABI
} from '@/lib/chain/client';
import { createCipheriv, randomBytes, createHash } from 'crypto';

/**
 * Encrypts a string using AES-256-CBC with a key derived from the secret key.
 * Prepends the IV to the output hex string for later decryption.
 */
function encryptString(text: string, secretKey: string): string {
  const key = createHash('sha256').update(String(secretKey)).digest();
  const iv = randomBytes(16);
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, email, surveyId } = body as {
      userId: string;
      email: string;
      surveyId: string;
    };

    if (!userId || !email || !surveyId) {
      return Response.json(
        { error: 'Missing required fields: userId, email, surveyId' },
        { status: 400 }
      );
    }

    // 1. Encrypt the email address using the EMAIL_HASH_KEY env var
    const key = process.env.EMAIL_HASH_KEY || 'default_email_hash_key_98765';
    const encryptedEmail = encryptString(email.toLowerCase().trim(), key);

    const activeWalletClient = getWalletClient();

    // --- Mock path: return a fake tx hash if blockchain is not configured ---
    if (!isConfigured() || !activeWalletClient) {
      console.warn(
        'Blockchain not configured: Missing COMPANY_PRIVATE_KEY or NEXT_PUBLIC_SURVEY_CONTRACT_ADDRESS'
      );
      const mockHash = `0xmock_${Date.now().toString(16).padStart(40, '0')}` as `0x${string}`;
      return Response.json({
        success: true,
        mock: true,
        message: 'Blockchain recording mocked (configuration missing)',
        txHash: mockHash,
        blockExplorerUrl: `https://amoy.polygonscan.com/tx/${mockHash}`
      });
    }

    const contractAddress = getContractAddress();
    const activePublicClient = getPublicClient();

    // Simulate first to catch revert errors before sending
    const { request: contractRequest } = await activePublicClient.simulateContract({
      account: activeWalletClient.account,
      address: contractAddress,
      abi: surveyRecordABI,
      functionName: 'recordCompletion',
      args: [userId, encryptedEmail, surveyId]
    });

    const hash = await activeWalletClient.writeContract(contractRequest);

    return Response.json({
      success: true,
      txHash: hash,
      blockExplorerUrl: `https://amoy.polygonscan.com/tx/${hash}`
    });
  } catch (error) {
    console.error('Error recording survey on-chain:', error);
    return Response.json(
      {
        error: 'Failed to record on blockchain',
        details: (error as Error).message
      },
      { status: 500 }
    );
  }
}
