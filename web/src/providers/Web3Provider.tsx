"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { lensTestnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import React from "react";

const config = createConfig(
  getDefaultConfig({
    chains: [lensTestnet],
    transports: {
      [lensTestnet.id]: http(
        `https://lens-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_ID}`
      ),
    },

    walletConnectProjectId: process.env.WALLET_CONNECT!,
    appName: "Repute",
    appDescription: "Reputation on Lens Chain",
    appUrl: "",
    appIcon: "",
  })
);

const queryClient = new QueryClient();

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
