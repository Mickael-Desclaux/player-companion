"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Chargement...</div>
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p>Connecté en tant que {session.user?.name}</p>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Se déconnecter
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Se connecter avec Google
    </button>
  )
}