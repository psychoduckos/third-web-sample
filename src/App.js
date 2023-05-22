import {
    coinbaseWallet,
    metamaskWallet,
    ThirdwebProvider, useAddress, useConnectionStatus, useContract,
    walletConnectV1
} from "@thirdweb-dev/react";
import ConnectWallet from "./components/utils/ConnectWallet";
import CheckConnection from "./components/utils/CheckConnection";
import SwitchNetwork from "./components/utils/SwitchNetwork";
import {BinanceTestnet, Ethereum, Goerli} from "@thirdweb-dev/chains";
import {Mint_NFTW} from "./components/set/NFTW_380.set";
import USDT_approve from "./components/set/Sale.set";
import {getNFTWPrice} from "./components/get/NFTW_380.get";
import {blockchain_config} from "./components/config";
import React, {useEffect, useState} from "react";

function App() {
    //
    // let approve_amount = getNFTWPrice().then(r => approve_amount = r)
    //
    // // const [address, setAddress] = useState(null)
    // let address = "0x02C21426EBbCf6908cDbB09519eef58c39D41059"
    //
    // useEffect(async () => {
    //     await Mint_NFTW(address, "1112", "1113", "2")
    // }, [])

  return (

    <div className="App">
      <ThirdwebProvider
          activeChain="binance-testnet"
          supportedWallets={[
              metamaskWallet(),
            coinbaseWallet(),
            walletConnectV1()
          ]}
          dAppMeta={{
            name: "third-web-sample-1",
            description: "Sample react app with third-web-library",
            isDarkMode: true,
          }}
      >

          <ConnectWallet/>

          {/*<CheckConnection setAddress={setAddress}/>*/}

          {/*<SwitchNetwork chain={Goerli} chainName={"Goerli"}/>*/}
          {/*<SwitchNetwork chain={BinanceTestnet} chainName={"BinanceTestnet"}/>*/}
          {/*<SwitchNetwork chain={Ethereum} chainName={"Ethereum"}/>*/}

          {/*<USDT_approve approve_to={blockchain_config.SaleMiti.address} approve_amount={approve_amount}/>*/}
          {
              // address && <Mint_NFTW user_address={address} _X_Coor={'1111'} _Y_Coor={'1111'} Map_ID={'1'}/>
          }
      </ThirdwebProvider>
    </div>
  );
}

export default App;
