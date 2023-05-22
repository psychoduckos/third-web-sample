import React, {useState} from 'react';
import {useSwitchChain} from "@thirdweb-dev/react";

const SwitchNetwork = (props) => {

    const [chainId, setChainId] = useState(0)

    const switchChain = useSwitchChain()

    return (
        <div>
            <button onClick={() => {
                switchChain(props.chain.chainId).then(r => setChainId(props.chain.chainId))
            }}>{`Switch to ${props.chainName}`}</button>
            <p>{`Chain ID is: ${chainId}`}</p>
        </div>
    );

};

export default SwitchNetwork;