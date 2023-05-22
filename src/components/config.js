import {NFTW_ABI} from "./abi/NFTW_ABI";
import {PRICE_ABI} from "./abi/PRICE_ABI";
import {USDT_ABI} from "./abi/USDT_ABI";
import {SALE_MITI_ABI} from "./abi/SALE_MITI_ABI";

export const blockchain_config = {
    rpc: "https://data-seed-prebsc-1-s1.binance.org:8545",
    NFTW_380: {
        address: "0x585b884C64f3852b80d42D31893BD35147338b14",
        abi: NFTW_ABI
    },
    Price: {
        address: "0xb7F9996c1819f3eeDf4c59110c628554dF3c60E2",
        abi: PRICE_ABI
    },
    USDT: {
        address: "0x5E10a91adb891831378A6A035f9B05382B45Aa15",
        abi: USDT_ABI
    },
    SaleMiti: {
        address: "0x1B362A4E1Ea01D5511C2E7c02578D46b9CcaA158",
        abi: SALE_MITI_ABI
    },
}