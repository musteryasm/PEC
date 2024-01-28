# ChainRx
![ChainRx](https://github.com/SanatKulkarni/ChainRx/assets/87092449/1b50278f-5c7c-4aa5-a5c8-c31ec6c393e7)

ChainRx - Web3 Based Pharmaceutical Supply Chain Management System using Blockchain Technology. 

# Problem Statement:
Developing an innovative Pharma Supply Chain Management system, ChainRx-Web3, utilizing blockchain technology and Web3 principles to address challenges in transparency, traceability, and trust within the pharmaceutical supply chain. The system should provide secure and decentralized data management, ensuring compliance with industry regulations while overcoming interoperability issues and promoting seamless collaboration among diverse stakeholders. The goal is to enhance efficiency, reduce fraud, and elevate the overall integrity of the pharmaceutical supply chain through cutting-edge blockchain solutions.

# Technologies Used:
- Polygon MUMBAI: It’s a testnet of the Polygon network designed for running smart contracts compatible with the Ethereum Virtual Machine1.
- React: A JavaScript library for building interactive user interfaces2.
- ThirdWeb: A platform providing tools for creators to easily build, launch, and manage Web3 projects4.
- Solidity: A statically typed programming language designed for developing smart contracts that run on the Ethereum Virtual Machine5.
- HTML/CSS/JS: Used for developing frontends for the smart contract and HomePage as well.
- Web3JS: A library based on JavaScript which helps integrate the smart contract with the frontend to create a complete Dapp.

# Features Added:
- Add User: The contract allows the owner to add a new user to the system with a specified role (Manufacturer, Distributor, Retailer).
- Update User Role: The owner can update the role of an existing user in the system.
- Transfer Ownership: The owner can transfer ownership of the contract to a new address.
- Manufacture Medicine: Manufacturers can register a new batch of medicine in the system, providing details such as name, batch number, manufacturing date, expiry date, price, and quantity.
- Sell Medicine: Distributors or retailers can sell a quantity of medicine to another address, updating the quantity available for the batch.

# Challenges Faced: 
- Blockchain Integration Complexity: Integrating Web3 and blockchain technology can be intricate, requiring a deep understanding of decentralized systems, smart contracts, and consensus algorithms.
- Absence of Decentralized nature to some degree: Although the entire project is built on the blockchain network of MUMBAI + ETHEREUM, it is not completely decentralized in nature as a manufacturer can only be created after thorough checks of all the processes and certificates which can only be checked and issued by a Regulatory Body.
- User Adoption and Training: Introducing a new technology to stakeholders in the pharmaceutical supply chain may face resistance or require substantial training. Ensuring user-friendly interfaces and providing comprehensive training materials will be essential for successful adoption.
- Smart Contract Security: Writing secure smart contracts is crucial to prevent vulnerabilities and potential exploits. Rigorous testing and auditing of smart contract code are necessary to mitigate security risks.
- Cost Management: Implementing and maintaining a blockchain-based system can have associated costs, including transaction fees and infrastructure expenses. Balancing the benefits of the technology with its associated costs is a challenge.
- The Setup to Run the Project: Currently, the project needs to be set up by a professional developer or a tech savvy person and would prove to be difficult for a normal person because of all the transactions happening each time. This can be fixed using zK-Login and other technologies that improve the user experience of web3 Dapps.

# Future Prospects:
- Interoperability with Other Blockchain Solutions: Explore interoperability with other blockchain solutions to create a standardized and interconnected network for pharmaceutical supply chain management. This could involve collaborations with industry-wide blockchain initiatives.
- Integration of IoT Devices: Integrate Internet of Things (IoT) devices to enhance real-time tracking and monitoring of pharmaceutical products. This could include sensors to monitor temperature, humidity, and other relevant conditions during transportation and storage.
- Integration with Regulatory Authorities: Collaborate with regulatory authorities to ensure seamless compliance with evolving pharmaceutical regulations. Implement features that allow regulatory bodies to access and verify data on the blockchain, fostering transparency and regulatory adherence.
- Enhanced Data Analytics: Implement advanced data analytics tools to derive insights from the accumulated data. This could provide valuable information for supply chain optimization, demand forecasting, and identifying potential areas for efficiency improvements.
- Supply Chain Financing and Smart Contracts: Explore the implementation of supply chain financing mechanisms using smart contracts. This could enable automated and transparent financial transactions, improving cash flow for participants in the supply chain.
