import { createPublicClient, createWalletClient, http, parseAbi } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { polygonAmoy } from 'viem/chains';

// ABI for the upgraded SurveyRecord contract.
// Updated to accept userId, encryptedEmail, and surveyId, matching the on-chain storage.
export const surveyRecordABI = parseAbi([
  'function recordCompletion(string userId, string encryptedEmail, string surveyId) public',
  'function getRecordCount() external view returns (uint256)',
  'function getRecord(uint256 index) external view returns (string userId, string encryptedEmail, string surveyId, uint256 timestamp)',
  'event SurveyCompleted(string indexed userId, string encryptedEmail, string surveyId, uint256 timestamp)'
]);

export const getContractAddress = () => {
  return (process.env.NEXT_PUBLIC_SURVEY_CONTRACT_ADDRESS as `0x${string}`) ||
    '0x0000000000000000000000000000000000000000';
};

export const getPublicClient = () => {
  return createPublicClient({
    chain: polygonAmoy,
    transport: http(process.env.AMOY_RPC_URL || 'https://rpc-amoy.polygon.technology')
  });
};

export const getWalletClient = () => {
  const privateKey = process.env.COMPANY_PRIVATE_KEY;
  const isValidHex = privateKey && /^(?:0x)?[0-9a-fA-F]{64}$/.test(privateKey);
  if (!isValidHex) return null;

  try {
    const formattedKey = privateKey.startsWith('0x') ? privateKey : `0x${privateKey}`;
    const account = privateKeyToAccount(formattedKey as `0x${string}`);

    return createWalletClient({
      account,
      chain: polygonAmoy,
      transport: http(process.env.AMOY_RPC_URL || 'https://rpc-amoy.polygon.technology')
    });
  } catch (error) {
    console.error('Failed to create wallet client from private key:', error);
    return null;
  }
};

export const isConfigured = () => {
  const client = getWalletClient();
  const address = getContractAddress();
  // Ensure the address is a valid 40-hex-character Ethereum address (total length 42)
  const isValidAddress = address && /^0x[0-9a-fA-F]{40}$/.test(address);
  
  if (address && !isValidAddress) {
    console.warn(`WARNING: NEXT_PUBLIC_SURVEY_CONTRACT_ADDRESS "${address}" is not a valid Ethereum address. Valid Ethereum addresses are 42 characters long.`);
  }

  return !!client && !!isValidAddress;
};
