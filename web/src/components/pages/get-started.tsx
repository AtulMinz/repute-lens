import { Login } from "@/components/login";
import { getLensClient } from "@/lib/lens/client";
import { fetchAccount } from "@lens-protocol/client/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, Key, Lock, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function getAuthenticatedAccount() {
  const client = await getLensClient();

  if (!client.isSessionClient()) {
    return null;
  }

  const authenticatedUser = client.getAuthenticatedUser().unwrapOr(null);
  if (!authenticatedUser) {
    return null;
  }

  return fetchAccount(client, { address: authenticatedUser.address }).unwrapOr(
    null
  );
}

export default async function GetStarted() {
  const account = await getAuthenticatedAccount();

  if (!account) {
    return (
      <main className="min-h-screen bg-white">
        {/* Navbar */}
        <nav className="w-full max-w-7xl mx-auto py-6 px-6 flex items-center justify-between">
          <Link
            className="flex items-center space-x-1 text-xl font-black text-gray-900"
            href={"/"}
          >
            <BadgeCheck />
            <span>Repute</span>
          </Link>
        </nav>

        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center mb-8 space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Key className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-center text-gray-900">
                Welcome Back
              </h1>
              <p className="text-gray-600 text-center">
                Connect your wallet to access your Lens profile
              </p>
            </div>

            <Card className="w-full border-2">
              <CardHeader className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl font-bold">
                    Sign in with Lens
                  </CardTitle>
                </div>
                <CardDescription className="text-base pl-7">
                  Start building your decentralized identity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Login />
                <div className="mt-6 pt-6 border-t flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <UserCircle2 className="h-4 w-4" />
                  <span>Your credentials are secured by Lens Protocol</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="w-full max-w-7xl mx-auto py-6 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-1 text-xl font-bold text-gray-900">
          <BadgeCheck />
          <span>Repute</span>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <Card className="w-full max-w-lg border-2">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={account.metadata?.picture} />
              <AvatarFallback>
                {account.address.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">
                {account.metadata?.name}
              </CardTitle>
              <CardDescription className="mt-1">
                {account.address}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-sm text-emerald-600 mb-4">
                <BadgeCheck className="h-5 w-5" />
                <span>Successfully authenticated with Lens Protocol</span>
              </div>
              <div className="flex gap-4">
                <Link href="/dashboard" className="flex-1">
                  <Button className="w-full px-6 py-3 text-lg hover:cursor-pointer group flex items-center justify-center transition">
                    Dashboard
                    <span className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Button>
                </Link>
                <Link href="/explore" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full px-6 py-3 text-lg hover:cursor-pointer"
                  >
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
