import {useContract, useContractWrite, Web3Button} from "@thirdweb-dev/react";
import {blockchain_config} from "../config";
import {getNFTWPrice} from "../get/NFTW_380.get";


export function USDT_approve(props) {

    let { contract, isLoading, error } = useContract(blockchain_config.USDT.address)
    if (error) throw new Error(error)

    const { mutateAsync, isLoading2, error2 } = useContractWrite(
        contract,
        "approve",
    );
    if (error2) throw new Error(error2)



    return (<Web3Button
        contractAddress={blockchain_config.USDT.address}
        action={async () => {
            await mutateAsync({args: [
                props.approve_to,
                props.approve_amount
            ]})
    }}>Approve</Web3Button>)
}
export default USDT_approve