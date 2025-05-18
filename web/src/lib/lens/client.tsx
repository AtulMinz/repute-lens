import { mainnet, PublicClient, testnet } from "@lens-protocol/client";
import { clientCookieStorage, cookieStorage } from "./storage";

const isServer = typeof window === "undefined";

export const client = PublicClient.create({
  environment: mainnet,
  apiKey: process.env.LENS_API,
  storage: isServer ? cookieStorage : clientCookieStorage,
});

export const getPublicClient = () => {
  return client;
};

export const getBuilderClient = async (
  address: string,
  signMessage: (message: string) => Promise<string>
) => {
  if (!address) {
    return null;
  }

  const authenticated = await client.login({
    builder: {
      address: address,
    },
    signMessage,
  });

  if (authenticated.isErr()) {
    throw authenticated.error;
  }

  return authenticated.value;
};

export const getLensClient = async () => {
  const resumed = await client.resumeSession();
  if (resumed.isErr()) {
    return client;
  }
  return resumed.value;
};
