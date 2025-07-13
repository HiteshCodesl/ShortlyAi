"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await axios.post("/api/auth/register", {
        email,
        name,
        password,
      });

      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
        <div className="flex justify-center h-screen my-auto items-center">
          <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-2xl">Signup</CardTitle>
            <CardDescription className="font-semibold">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  className="font-semibold"
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                  className="font-semibold"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input onChange={(e)=>{
                    setPassword(e.target.value)
                  }} className="font-semibold" id="password" type="password" placeholder="Enter a password" required />
                </div>
                <Button onClick={signup} type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="secondary" className="w-full">
                  Login with Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm font-semibold">
                Don&apos;t have an account?{" "}
                <a href="/login" className="underline underline-offset-4">
                  Sign In
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
  );
}
