"use client";
import React, { useEffect, useState } from "react";
import { signIn } from "../../../auth-client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { BotIcon } from "lucide-react";

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setError("");
    setSuccess("");
    setLoading(false);
  }, []);
  console.log(error, success);
  const googleSignIn = async () => {
    try {
      await signIn.social(
        {
          provider: "google",
        },
        {
          onResponse: () => {
            setLoading(false);
          },
          onRequest: () => {
            setSuccess("");
            setError("");
            setLoading(true);
          },
          onSuccess: () => {
            setSuccess("Your are loggedIn successfully");
            router.replace("/");
          },
          onError: (ctx) => {
            setError(ctx.error.message);
          },
        }
      );
    } catch (error: unknown) {
      console.error(error);
      setError("Something went wrong");
    }
  };

  return (
    <div className=" flex flex-col items-center h-screen justify-center gap-4 w-full">
      <Button variant={"outline"} onClick={googleSignIn} disabled={loading}>
        <BotIcon />
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignIn;
