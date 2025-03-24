"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-6 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Shopping List App</h1>

      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Sign In with GitHub
        </button>
      ) : (
        <>
          <p className="mb-4">
            Welcome, <strong>{user.displayName}</strong> ({user.email})
          </p>
          <div className="space-x-4">
            <Link href="/week-9/shopping-list">
              <button className="px-4 py-2 bg-blue-500 rounded text-white">
                Go to Shopping List
              </button>
            </Link>
            <button
              onClick={firebaseSignOut}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </main>
  );
}
