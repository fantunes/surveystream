# 🚀 Smart Contract Registration Guide

Complete step-by-step guide to deploy the `SurveyRecord` smart contract and wire it into the SurveyStream application.

---

## Overview

When a user completes a survey, the server calls the `SurveyRecord` smart contract on the **Polygon Amoy testnet** to permanently store the result on-chain. This proves completion, enables transparent reward tracking, and produces a verifiable blockchain transaction the user can view on PolygonScan.

```
User completes survey
        │
        ▼
/api/survey/record (Next.js server)
        │  hashes email with EMAIL_HASH_KEY
        ▼
SurveyRecord.recordCompletion() ← on Polygon Amoy
        │
        ▼
txHash returned → shown in UI with PolygonScan link
```

---

## Step 1 — Install & Set Up MetaMask

1. Install the [MetaMask browser extension](https://metamask.io/download/) if you don't have it.
2. Create or import a wallet and follow the setup wizard.
3. **Get your private key:**
   - Open MetaMask → click the ⋮ menu (top right of the account)
   - Click **Account Details** → **Show Private Key**
   - Enter your password and copy the key
   - > ⚠️ **Keep this secret.** Never commit it to git. Store it only in `.env.local`.

---

## Step 2 — Add Polygon Amoy Testnet to MetaMask

1. Go to [chainlist.org/chain/80002](https://chainlist.org/chain/80002)
2. Click **Connect Wallet**
3. Click **Add to MetaMask** next to "Polygon Amoy Testnet"
4. Approve the network addition in the MetaMask popup

You should now see **Polygon Amoy** in your network selector.

---

## Step 3 — Get Free Test MATIC (Gas)

Transactions cost gas even on testnet — you need test MATIC.

1. Copy your wallet address from MetaMask (starts with `0x…`)
2. Go to the [Polygon Amoy Faucet](https://faucet.polygon.technology/)
3. Select **Polygon Amoy** from the network dropdown
4. Paste your wallet address and click **Submit**
5. Wait ~1–2 minutes — 0.2 MATIC will appear in MetaMask

---

## Step 4 — Deploy the Contract via Remix IDE

> **Remix is the easiest option — no local tooling needed.**

1. Open [remix.ethereum.org](https://remix.ethereum.org)

2. **Create the contract file:**
   - In the left sidebar (File Explorer), click the **new file** icon
   - Name it `SurveyRecord.sol`

3. **Paste the contract code:**
   - Open `contracts/SurveyRecord.sol` from this project
   - Copy the entire contents and paste into Remix

4. **Compile:**
   - Click the **Solidity Compiler** icon (third icon in the left sidebar)
   - Set compiler version to **0.8.20** (or any `^0.8.20` compatible)
   - Click **Compile SurveyRecord.sol**
   - ✅ You should see a green tick — no errors

5. **Deploy:**
   - Click the **Deploy & Run Transactions** icon (fourth icon in the left sidebar)
   - Under **Environment**, select **Injected Provider - MetaMask**
   - MetaMask will pop up asking to connect — **Approve**
   - Make sure **Account** shows your wallet with test MATIC
   - Make sure **Contract** shows `SurveyRecord`
   - Click the orange **Deploy** button
   - Confirm the transaction in MetaMask (gas fee in test MATIC)

6. **Copy the contract address:**
   - After the transaction confirms, look at the **Deployed Contracts** section (bottom left in Remix)
   - You'll see `SURVEYRECORD at 0x…`
   - Click the **copy** icon next to the address
   - > 🔴 **Save this address** — you'll need it in the next step

---

## Step 5 — Configure Environment Variables

Open `.env.local` in the root of `surveystream-website` and fill in:

```env
# RPC endpoint for Polygon Amoy
AMOY_RPC_URL=https://rpc-amoy.polygon.technology

# The deployed contract address (from Step 4)
NEXT_PUBLIC_SURVEY_CONTRACT_ADDRESS=0xYourDeployedContractAddressHere

# The private key of the wallet that pays gas fees for users (from Step 1)
# ⚠️  Server-only. Never expose this to the client. Never commit to git.
COMPANY_PRIVATE_KEY=0xYourPrivateKeyHere

# Secret key used for hashing emails on the server
EMAIL_HASH_KEY=default_email_hash_key_98765
```

> **Security note:** `COMPANY_PRIVATE_KEY` and `EMAIL_HASH_KEY` are only used in the Next.js server (`/api/survey/record`). They are never sent to the browser. The `NEXT_PUBLIC_` prefix on the contract address is only because some client-side read calls may need it — it contains no secret.

---

## Step 6 — Run & Test

```bash
# In surveystream-website/
npm run dev
```

1. Open [http://localhost:44321/dashboard/surveys](http://localhost:44321/dashboard/surveys)
2. Click **Start** on any survey
3. Answer all 5 questions
4. On the success screen you should see:
   - ✅ "Transaction confirmed on Polygon"
   - The transaction hash
   - A **"View on PolygonScan"** link → confirm it's live on [amoy.polygonscan.com](https://amoy.polygonscan.com)

---

## Step 7 — Verify on PolygonScan (Optional)

1. Go to [amoy.polygonscan.com](https://amoy.polygonscan.com)
2. Paste your contract address in the search bar
3. Click the **Events** tab to see all `SurveyCompleted` events
4. Each event corresponds to one completed survey

You can also verify individual transactions by pasting the `txHash` from the success screen directly.

---

## Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| `Blockchain not configured` in response | Missing env vars | Double-check `.env.local` and restart `npm run dev` |
| `insufficient funds` error | No test MATIC | Go back to Step 3 and top up the wallet |
| MetaMask shows wrong network | Not on Amoy | Switch to Polygon Amoy in MetaMask |
| Transaction hangs / times out | RPC issue | Try an alternate RPC: `https://polygon-amoy.infura.io/v3/<your-key>` |
| `execution reverted` | Contract bug or wrong address | Redeploy the contract and update `NEXT_PUBLIC_SURVEY_CONTRACT_ADDRESS` |

---

## Contract ABI Reference

The deployed `SurveyRecord` contract exposes:

```solidity
// Write — called by the server on survey completion
function recordCompletion(
    string  userId,     // app user ID
    bytes32 emailHash,  // keyed HMAC-SHA256 of email (privacy-preserving)
    string  surveyId    // internal survey / client identifier
) public

// Read — get total stored records
function getRecordCount() external view returns (uint256)

// Read — get a single record by index
function getRecord(uint256 index)
    external view
    returns (
        string  userId,
        bytes32 emailHash,
        string  surveyId,
        uint256 timestamp
    )

// Event — emitted on every completion (indexed for cheap filtering)
event SurveyCompleted(
    string indexed userId,
    bytes32 indexed emailHash,
    string surveyId,
    uint256 timestamp
)
```
