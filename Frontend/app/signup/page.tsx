"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {

  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      alert(response.data.message || "Signup Successful");
      
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      router.push("/");

    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="authContainer">

      <h1>Signup</h1>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setName(e.target.value)
        }
      />

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

      <button onClick={handleSignup}>
        Signup
      </button>

      <p>
        Already have an account?

        <Link href="/login">
          Login
        </Link>
      </p>

    </div>
  );
}