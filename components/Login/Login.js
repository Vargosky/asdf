import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export const Login = () => {
  const address = useAddress();
  return (
    <div>
      <ConnectWallet />
    </div>
  );
};