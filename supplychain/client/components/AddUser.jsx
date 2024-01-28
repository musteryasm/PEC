import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import WalletConnect from './../utils/WalletConnect';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './../utils/contractDetails';
import './AddUser.css';


const AppUser = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [newUser, setNewUser] = useState('');
  const [newUserRole, setNewUserRole] = useState('');
  const [userToUpdate, setUserToUpdate] = useState('');
  const [newUserRoleUpdate, setNewUserRoleUpdate] = useState('');
  const [connectedWallet, setConnectedWallet] = useState('');
  const [userRole, setUserRole] = useState(null);
  const [userMedicineCount, setUserMedicineCount] = useState(null);
  const [newOwnerAddress, setNewOwnerAddress] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [updateUserRoleSuccessMessage, setUpdateUserRoleSuccessMessage] = useState(null);
  const [getUserRoleSuccessMessage, setGetUserRoleSuccessMessage] = useState(null);
  const [getMedicineCountSuccessMessage, setGetMedicineCountSuccessMessage] = useState(null);
  const [transferOwnershipSuccessMessage, setTransferOwnershipSuccessMessage] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        if (window.ethereum) {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          // Request account access using eth_requestAccounts
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
          });

          setAccounts(accounts);

          const contract = new web3Instance.eth.Contract(
            CONTRACT_ABI,
            CONTRACT_ADDRESS
          );
          setContract(contract);
        } else {
          console.error('Web3 provider not found. Please install MetaMask.');
        }
      } catch (error) {
        console.error('Error initializing Web3:', error);
      }
    };

    initWeb3();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (contract && accounts.length > 0) {
        try {
          const fetchedUserRole = await contract.methods.getUserRole(accounts[0]).call();
          setUserRole(fetchedUserRole);
          setGetUserRoleSuccessMessage('User role fetched successfully');

          const fetchedMedicineCount = await contract.methods.getUserMedicineCount(accounts[0]).call();
          setUserMedicineCount(fetchedMedicineCount);
          setGetMedicineCountSuccessMessage('Product count fetched successfully');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
    };

    fetchData();
  }, [contract, accounts]);

  const handleAddUser = async () => {
    try {
      await contract.methods.addUser(newUser, newUserRole).send({ from: accounts[0] });
      setSuccessMessage('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
    }
    window.alert('Added'); 
  };

  const handleUpdateUserRole = async () => {
    try {
      await contract.methods.updateUserRole(userToUpdate, newUserRoleUpdate).send({ from: accounts[0] });
      setUpdateUserRoleSuccessMessage('User role updated successfully');
    } catch (error) {
      console.error('Error updating user role:', error);
    }
    window.alert('Connection successful');                         /*Delivery status pop up*/
  };
  
  const handleGetUserRole = async () => {
    try {
      const fetchedUserRole = await contract.methods.getUserRole(accounts[0]).call();
      setUserRole(fetchedUserRole);
  
      console.log("Fetched User Role:", fetchedUserRole);
  
      if (Number(fetchedUserRole) === 0) {
        console.log("User Role: Manufacturer");
      } else if (Number(fetchedUserRole) === 1) {
        console.log("User Role: Distributor");
      } else if (Number(fetchedUserRole) === 2) {
        console.log("User Role: Retailer");
      } else if (Number(fetchedUserRole) === 3) {
        console.log("User Role: Admin");
      }
  
      setGetUserRoleSuccessMessage('Please press F12 Key [Open Console]');
    } catch (error) {
      console.error('Error fetching user role:', error);
    }
    window.alert('Connection successful');           /*Backorder count pop up*/ 
  };

  const handleGetMedicineCount = async () => {
    try {
      const fetchedMedicineCount = await contract.methods.getUserMedicineCount(accounts[0]).call();
      setUserMedicineCount(fetchedMedicineCount);
      console.log("Product Count: ",Number(userMedicineCount));
      setGetMedicineCountSuccessMessage("Please press F12 Key [Open Console]")
    } catch (error) {
      console.error('Error fetching Product count:', error);
    }
    window.alert('Connection successful');
  };

  const handleWalletConnect = (walletAddress) => {
    // Perform any additional actions when the wallet is connected
    console.log(`Wallet connected: ${walletAddress}`);
    setConnectedWallet(walletAddress);

    window.alert('Connection successful');                        /*Product count */
    console.log(`Wallet connected: ${accounts[0]}`);
  };
  

  const handleTransferOwnership = async () => {
    try {
      await contract.methods.transferOwnership(newOwnerAddress).send({ from: accounts[0] });
      setTransferOwnershipSuccessMessage('Ownership transferred successfully');
    } catch (error) {
      console.error('Error transferring ownership:', error);
    }
  };

  return (
    <div>
      <h1>Only Owner Functions</h1>
      <WalletConnect onWalletConnect={handleWalletConnect} />
      {connectedWallet && (
        <div>
          <p>Connected Wallet: {connectedWallet}</p>
          {userRole !== null && (
            <p>User Role: {userRole}</p>
          )}
          {userMedicineCount !== null && (
            <p>Stock Lev: {userMedicineCount}</p>
          )}
        </div>
      )}
      <br />
      <br />
      <div className='cards-container'>
        <div className='card'>
          <h2>Change User</h2>
          <input
            type="text"
            placeholder="New User Address"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <input
            type="text"
            placeholder="New User"
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
          />
          <button onClick={handleAddUser}>Add User</button>
          {successMessage && (
            <div>
              <p>{successMessage}</p>
            </div>
          )}
        </div>
        <div className='card'>
          <h2>Backorder Product</h2>
          <button onClick={handleGetUserRole}>Get Status</button>
          {getUserRoleSuccessMessage && (
            <div>
              <p>{getUserRoleSuccessMessage}</p>
            </div>
          )}
        </div>
        <div className='card'>
          <h2>Delivery Status</h2>
          <input
            type="text"
            placeholder="Order Hash"
            value={userToUpdate}
            onChange={(e) => setUserToUpdate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Order Number"
            value={newUserRoleUpdate}
            onChange={(e) => setNewUserRoleUpdate(e.target.value)}
          />
          <button onClick={handleUpdateUserRole}>Get Status</button>
          {updateUserRoleSuccessMessage && (
            <div>
              <p>{updateUserRoleSuccessMessage}</p>
            </div>
          )}
        </div>

        <div className='card'>
          <h2>Product Count</h2>
          <button onClick={handleGetMedicineCount}>Get Stock</button>
          {getMedicineCountSuccessMessage && (
            <div>
              <p>{getMedicineCountSuccessMessage}</p>
            </div>
          )}
        </div>
        <div className='card'>
          <h2>Transfer Ownership</h2>
          <input
            type="text"
            placeholder="New Owner Address"
            value={newOwnerAddress}
            onChange={(e) => setNewOwnerAddress(e.target.value)}
          />
          <button onClick={handleTransferOwnership}>Transfer Ownership</button>
          {transferOwnershipSuccessMessage && (
            <div>
              <p>{transferOwnershipSuccessMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppUser;
