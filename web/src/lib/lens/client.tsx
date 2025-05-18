import { mainnet, PublicClient, testnet } from "@lens-protocol/client";

export const client = PublicClient.create({
  environment: mainnet,
  apiKey: process.env.LENS_API,
});

export const getPublicClient = () => {
  return client;
};
