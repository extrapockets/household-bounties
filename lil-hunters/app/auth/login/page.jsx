import React from "react";
import LoginForm from "@/components/LoginForm";

const page = () => {
  return (
    <div className="grid grid-cols-1 gap-4 content-evenly">
      <div className="flex py-10 mt-10 alert alert-info ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          This page can render a conditional component based on whether a user
          has a nostr profile or not. <br />
          For "Sign Up", We could redirect to a nostr client with some UI
          explaining what to do (make an account).
        </span>
      </div>
      <div className="p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
