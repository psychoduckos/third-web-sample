import {useContract, useContractWrite, Web3Button} from "@thirdweb-dev/react";
import {blockchain_config} from "../config";
import {USDT_approve} from "./Sale.set";
import {getNFTWPrice} from "../get/NFTW_380.get";

export function Mint_NFTW (user_address, _X_Coor, _Y_Coor, Map_ID) {

    console.log(user_address)
    console.log(_X_Coor)
    console.log(_Y_Coor)
    console.log(Map_ID)

    let { contract, isLoading, error } = useContract(blockchain_config.NFTW_380.address)
    if (error) throw new Error(error)

    const { mutateAsync, isLoading2, error2 } = useContractWrite(
        contract,
        "Mint_NFTW",
    );
    if (error2) throw new Error(error2)

    return mutateAsync({
        args: [
            user_address,
            _X_Coor,
            _Y_Coor,
            Map_ID
    ]})
}

