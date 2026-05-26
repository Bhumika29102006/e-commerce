"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      alert(response.data.message || "Login Successful");

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      router.push("/");

    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed. Please verify your email and password.");
    }
  };

  return (
    <div className="authContainer">

      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={handleLogin}>
        Login
      </button>

      <p>
        Don't have an account?

        <Link href="/signup">
          Signup
        </Link>
      </p>

    </div>
  );
}