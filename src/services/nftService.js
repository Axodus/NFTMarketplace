// NFT service
import { ethers } from 'ethers';

const nftContractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';
// Replace 'YOUR_CONTRACT_ABI' with the actual ABI of your NFT contract
const nftContractABI = YOUR_CONTRACT_ABI;

// Function to initialize a provider and the NFT contract
const initContract = () => {
  const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_INFURA_URL);
  const contract = new ethers.Contract(nftContractAddress, nftContractABI, provider);
  return contract;
};

// Fetch all NFTs
const fetchNFTs = async () => {
  try {
    const contract = initContract();
    // Assuming your contract has a function to return all NFTs
    const nfts = await contract.getAllNFTs();
    return nfts.map(nft => ({
      // Transform the data as necessary
      id: nft.id.toString(),
      title: nft.title,
      image: nft.image,
      creator: nft.creator,
      price: ethers.utils.formatEther(nft.price)
    }));
  } catch (error) {
    console.error('Failed to fetch NFTs:', error);
    throw error;
  }
};

// Fetch a single NFT by id
const fetchNFTById = async (id) => {
  try {
    const contract = initContract();
    const nft = await contract.getNFTById(id);
    return {
      id: nft.id.toString(),
      title: nft.title,
      image: nft.image,
      creator: nft.creator,
      price: ethers.utils.formatEther(nft.price)
    };
  } catch (error) {
    console.error(`Failed to fetch NFT with id ${id}:`, error);
    throw error;
  }
};

export const NFTService = {
  fetchNFTs,
  fetchNFTById
};
