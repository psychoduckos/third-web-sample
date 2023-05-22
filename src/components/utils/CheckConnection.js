import React, {useEffect} from 'react';
import {useAddress, useConnectionStatus} from "@thirdweb-dev/react";

const CheckConnection = ({setAddress, ...props}) => {

    const connectionStatus = useConnectionStatus();

    const address = useAddress()

    useEffect(() => {
        if(address) setAddress(address)
    }, [address])

    if (connectionStatus === "unknown") return <p> Loading... </p>;
    if (connectionStatus === "connecting") return <p> Connecting... </p>;
    if (connectionStatus === "connected") return address ? <div>My wallet address is {address}</div> : <div>No wallet connected</div>
    if (connectionStatus === "disconnected") return <p> You are not connected to a wallet </p>;
};

export default CheckConnection;