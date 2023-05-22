import Web3 from "web3";
import {NFTW_ABI} from "../abi/NFTW_ABI";
import {blockchain_config} from "../config";


const web3 = new Web3(blockchain_config.rpc)

const NFTW_contract = new web3.eth.Contract(blockchain_config.NFTW_380.abi, blockchain_config.NFTW_380.address)

// внутренний map ID
export const getMapID = async (map_id) => {
    return new Promise(async (resolve, reject) => {
        let data = await NFTW_contract.methods.MAPID(map_id).call();
        if(!data) throw new Error("Error in get map ID contract method!")

        resolve(data)
    })
}

// внутренний map ID
export const getCoordinates = async (map_id) => {
    return new Promise(async (resolve, reject) => {
        let x = await NFTW_contract.methods.X_Coor.call();
        let y = await NFTW_contract.methods.Y_Coor.call();

        if(!x || !y) throw new Error("Error in get coordinates data method!")

        resolve({
            x: x,
            y: y
        })
    })
}

// user address
export const getUserBalance = async (user_address) => {
    return new Promise((resolve, reject) => {
        let data = NFTW_contract.methods.balanceOf(user_address).call();
        if(!data) throw new Error("Error in get user balance method!")

        resolve(data)
    })
}

export const getMax_NFTW = async () => {
    return new Promise((resolve, reject) => {
        let data = NFTW_contract.methods.Max_NFTW().call();
        if(!data) throw new Error("Error in get getMax_NFTW method!")

        resolve(data)
    })
}

export const getContractName = async () => {
    return new Promise((resolve, reject) => {
        let data = NFTW_contract.methods.name().call();
        if(!data) throw new Error("Error in get contract name method!")

        resolve(data)
    })
}

export const getNFTWPrice = async () => {
    const price_contract = await new web3.eth.Contract(blockchain_config.Price.abi, blockchain_config.Price.address)
    return new Promise((resolve, reject) => {
        let data = price_contract.methods.get_Price_USDT_NFTW().call();
        if(!data) throw new Error("Error in get contract name method!")

        resolve(data)
    })
}
