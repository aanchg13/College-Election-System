# College Election System using Blockchain

This project develops a secure and transparent college election system utilizing blockchain technology to emulate a secure voter authentication mechanism similar to India's Aadhar system, without directly using Aadhar. The system employs Ethereum blockchain and smart contracts to ensure that votes are cast securely and are immutable once recorded.

## Features
* Emulated Aadhar-Based Voter Verification: Simulates a secure authentication process without directly using Aadhar, ensuring voter legitimacy.  
* Smart Contract Voting: Utilizes Ethereum smart contracts to facilitate secure and tamper-proof voting.  
* Single Vote Assurance: Ensures each authenticated voter can only cast one vote.  
* React.js Frontend: Offers a user-friendly interface for both voters and administrators.  
* Firebase Integration: Implements mobile number verification through OTP, enhancing security.  


## Technology Stack
* Ethereum Blockchain: Creates a decentralized and tamper-proof record of votes.
* Solidity: For writing smart contracts that run the voting logic.
* React.js: For building the frontend.
* Web3.js: To connect the frontend to the Ethereum blockchain.
* Ganache: For a personal blockchain for Ethereum development.
* Truffle: As a development environment for blockchain.
* MetaMask: For wallet functionality and managing Ethereum transactions.


## System Workflow
* Voter Registration: Voters are verified through a simulated Aadhar-based mobile verification system.
* Election Initialization: Administrators can set up the elections, including candidate registration.
* Voting Process: Authenticated voters cast their votes securely.
* Result Declaration: The system automatically tallies the votes and declares the results.
