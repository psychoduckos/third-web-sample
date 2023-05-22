import React from 'react';
import {useCoinbaseWallet, useDisconnect, useMetamask, useWalletConnect, useWalletConnectV1} from "@thirdweb-dev/react";
import { BinanceTestnet } from "@thirdweb-dev/chains";

const ConnectWallet = () => {

    const connectWithWalletConnect = useWalletConnectV1();
    const connectWithCoinbase = useCoinbaseWallet();
    const connectWithMetamask = useMetamask();

    const disconnect = useDisconnect();

    const supportedChain = {
        chainId: BinanceTestnet.chainId,
    }

    return (
        <div>
            <button onClick={() => connectWithWalletConnect(supportedChain)}>Wallet Connect v1</button>
            <button onClick={() => connectWithCoinbase(supportedChain)}>Coinbase</button>
            <button onClick={() => connectWithMetamask(supportedChain)}>Metamask</button>

            <button onClick={disconnect}>Disconnect</button>;
        </div>
    );
};

export default ConnectWallet;