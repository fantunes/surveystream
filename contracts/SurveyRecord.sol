// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SurveyRecord
 * @dev Records survey completions on-chain for privacy-preserving verification.
 *      Stores encrypted user email, user identifier, and survey identifier.
 */
contract SurveyRecord {
    struct Record {
        string userId;
        string encryptedEmail;
        string surveyId;
        uint256 timestamp;
    }

    // Array of all records (append-only)
    Record[] public records;

    // Quick lookup by userId
    mapping(string => Record) public recordByUserId;

    address public owner;

    // Emitted on every successful survey completion
    event SurveyCompleted(
        string indexed userId,
        string encryptedEmail,
        string surveyId,
        uint256 timestamp
    );

    constructor() {
        owner = msg.sender;
    }

    /**
     * @notice Records a survey completion.
     * @param userId          Unique identifier for the user (from the app DB)
     * @param encryptedEmail  AES-encrypted email of the user for privacy
     * @param surveyId        Internal ID of the survey (which maps to the client company)
     */
    function recordCompletion(
        string memory userId,
        string memory encryptedEmail,
        string memory surveyId
    ) public {
        Record memory newRecord = Record({
            userId: userId,
            encryptedEmail: encryptedEmail,
            surveyId: surveyId,
            timestamp: block.timestamp
        });

        records.push(newRecord);
        recordByUserId[userId] = newRecord;

        emit SurveyCompleted(userId, encryptedEmail, surveyId, block.timestamp);
    }

    /**
     * @notice Returns the total number of survey records stored.
     */
    function getRecordCount() external view returns (uint256) {
        return records.length;
    }

    /**
     * @notice Returns a single record by index.
     */
    function getRecord(uint256 index)
        external
        view
        returns (
            string memory userId,
            string memory encryptedEmail,
            string memory surveyId,
            uint256 timestamp
        )
    {
        Record storage r = records[index];
        return (r.userId, r.encryptedEmail, r.surveyId, r.timestamp);
    }
}
