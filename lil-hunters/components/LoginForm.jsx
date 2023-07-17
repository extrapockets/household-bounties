"use client";

import Link from "next/link";

const LoginForm = () => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="text-2xl font-bold text-fuchsia-600 text-center">Login</h1>
      <h2 className="text-md font-semibold text-fuchsia-200 text-center p-2">
        Use your Nostr profile credentials to login below.
      </h2>
      <p className="text-sm font-medium text-fuchsia-50 p-2">
        If you don't have a Nostr profile, you can make one on these clients:
      </p>
      <div className="grid gap-y-4 py-4">
        <Link
          href="https://snort.social/login"
          className="font-semibold text-fuchsia-500 border-spacing-2"
        >
          🖥️ Snort.Social
        </Link>
        <Link
          href="https://damus.io/"
          className="font-semibold text-fuchsia-500 border-spacing-2"
        >
          📱 Damus (iOS)
        </Link>
        <Link
          href="https://iris.to/"
          className="font-semibold text-fuchsia-500 border-spacing-2"
        >
          🤖 iris (android)
        </Link>
      </div>

      <div className="text-md font-semibold text-fuchsia-200 text-center p-8">
        Enter your npub, or NIP-05 identifier:
        <div class="join">
          <input class="input input-bordered join-item" placeholder="npub..." />
          <button class="btn join-item rounded-r-full">Login</button>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
