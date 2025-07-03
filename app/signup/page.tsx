"use client"
import axios from "axios";
import { signIn } from "next-auth/react";
import { useState } from "react"

export default function SignUpPage() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
 
    const signup = async() =>{
        const user = {
            email, password, name
        }
    try{
      await axios.post("/api/auth/register", user, {
        headers: {
            "Content-Type": "application/json"
        }
      })
        await signIn("credentials",{
            name,
            email,
            password,
            callbackUrl: "/"
        })
      } catch (err){
        console.error("signup error:", err)
      }
    }
    
  return (
    <div >
      <input 
      type="email" 
      value={email} 
      onChange={(e)=> setEmail(e.target.value)} 
      placeholder="Enter a email" />

      <input 
      type="text" 
      value={name} 
      onChange={(e)=> setName(e.target.value)} 
      placeholder="Enter a name"/>

      <input 
      type="password" 
      value={password} 
      onChange={(e)=> setPassword(e.target.value)} 
      placeholder="Enter a password"/>

      <button onClick={signup}>Signup</button>
    </div>
  )
}
