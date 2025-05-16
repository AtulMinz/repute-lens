"use client";

import { Button } from "@/components/ui/button";
import { ConnectKitButton } from "connectkit";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({
          isConnected,
          isConnecting,
          show,
          address,
          ensName,
          hide,
          truncatedAddress,
        }) => {
          return (
            <Button onClick={show}>
              {isConnected ? truncatedAddress : "Connect"}
            </Button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
}
