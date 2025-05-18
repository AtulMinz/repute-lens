import { getLensClient } from "@/lib/lens/client";

import { getAuthenticatedAccount } from "../page";

export default async function Dashboard() {
  const account = await getAuthenticatedAccount();
  if (account) {
    return (
      <div>
        <p>{JSON.stringify(account?.metadata?.name)}</p>
      </div>
    );
  }
}
