import {
  getContractAddress,
  getPublicClient,
  isConfigured,
  surveyRecordABI
} from '@/lib/chain/client';
import { createCipheriv, createDecipheriv, randomBytes, createHash } from 'crypto';

function encryptString(text: string, secretKey: string): string {
  const key = createHash('sha256').update(String(secretKey)).digest();
  const iv = randomBytes(16);
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}

function decryptString(encryptedText: string, secretKey: string): string {
  try {
    const parts = encryptedText.split(':');
    if (parts.length !== 2) return '[Decryption Error: Invalid Format]';
    const iv = Buffer.from(parts[0], 'hex');
    const encrypted = parts[1];
    const key = createHash('sha256').update(String(secretKey)).digest();
    const decipher = createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    console.error('Decryption failed:', error);
    return '[Decryption Failed]';
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body as { password?: string };

    if (!password || password !== 'SS0987') {
      return Response.json(
        { error: 'Unauthorized: Invalid password' },
        { status: 401 }
      );
    }

    const key = process.env.EMAIL_HASH_KEY || 'default_email_hash_key_98765';

    const getMockFallbackData = () => {
      return [
        {
          userId: 'user-123',
          decryptedEmail: 'user@example.com',
          surveyId: '1',
          timestamp: Date.now() - 1000 * 60 * 15, // 15 mins ago
          isMock: true
        },
        {
          userId: 'sarah-123',
          decryptedEmail: 'sarah.j@example.com',
          surveyId: '3',
          timestamp: Date.now() - 1000 * 60 * 60 * 3, // 3 hours ago
          isMock: true
        },
        {
          userId: 'user-789',
          decryptedEmail: 'demo-tester@surveystream.io',
          surveyId: '2',
          timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
          isMock: true
        }
      ];
    };

    // Fallback if blockchain is not configured
    if (!isConfigured()) {
      return Response.json({
        success: true,
        records: getMockFallbackData(),
        mock: true
      });
    }

    try {
      const publicClient = getPublicClient();
      const contractAddress = getContractAddress();

      // Read the total record count from the blockchain
      const countBigInt = (await publicClient.readContract({
        address: contractAddress,
        abi: surveyRecordABI,
        functionName: 'getRecordCount'
      })) as bigint;

      const count = Number(countBigInt);
      const records = [];

      // Fetch each record sequentially from the blockchain
      for (let i = 0; i < count; i++) {
        const result = (await publicClient.readContract({
          address: contractAddress,
          abi: surveyRecordABI,
          functionName: 'getRecord',
          args: [BigInt(i)]
        })) as [string, string, string, bigint]; // userId, encryptedEmail, surveyId, timestamp

        const [userId, encryptedEmail, surveyId, timestamp] = result;
        const decryptedEmail = decryptString(encryptedEmail, key);

        records.push({
          userId,
          encryptedEmail, // Keep raw if needed
          decryptedEmail,
          surveyId,
          timestamp: Number(timestamp) * 1000 // Convert Solidity seconds to JavaScript milliseconds
        });
      }

      // Sort records newest first
      records.sort((a, b) => b.timestamp - a.timestamp);

      return Response.json({
        success: true,
        records
      });
    } catch (blockchainError) {
      console.warn(
        'On-chain call failed (contract might not be deployed at address). Falling back to mock records.',
        blockchainError
      );
      return Response.json({
        success: true,
        records: getMockFallbackData(),
        mock: true,
        warn: 'Blockchain read failed, using simulated data'
      });
    }
  } catch (error) {
    console.error('Error fetching admin records:', error);
    return Response.json(
      {
        error: 'Failed to fetch transaction logs',
        details: (error as Error).message
      },
      { status: 500 }
    );
  }
}
