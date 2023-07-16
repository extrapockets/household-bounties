import React from "react";
import LoginForm from "@/components/LoginForm";

// This page can render a conditional component based on whether a user has a nostr profile or not.
// For "Sign Up" --> We could redirect to a nostr client with some UI explaining what to do (make an account).

const page = () => {
  return <LoginForm />;
};

export default page;
