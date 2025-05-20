"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { LensProvider } from "@lens-protocol/react";
import { chains } from "@lens-chain/sdk/viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import React from "react";
import { getPublicClient } from "@/lib/lens/client";

const config = createConfig(
  getDefaultConfig({
    chains: [chains.mainnet],
    transports: {
      [chains.mainnet.id]: http(
        `https://lens-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_ID}`
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
const publicClient = getPublicClient();

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <LensProvider client={publicClient}>{children}</LensProvider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
