"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function AuthButton() {
	const { data: session, status } = useSession();
	const [displayName, setDisplayName] = useState<string>("");

	useEffect(() => {
		if (session?.user?.email) {
			fetch(`/api/user/${session.user.email}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.character?.name) {
						setDisplayName(data.character.name);
					} else {
						setDisplayName(data.name || session.user?.name || "Utilisateur");
					}
				})
				.catch(() => {
					setDisplayName(session.user?.name || "Utilisateur");
				});
		}
	}, [session]);

	if (status === "loading") {
		return <div>Chargement...</div>;
	}

	if (session) {
		return (
			<div className="flex items-center gap-4">
				<p>Connecté en tant que {displayName || session.user?.name}</p>
				<button
					onClick={() => signOut()}
					className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
				>
					Déconnexion
				</button>
			</div>
		);
	}

	return (
		<div
			onClick={() => signIn("google")}
			className="rounded-sm bg-slate-100 p-2 text-black"
		>
			Connexion
		</div>
	);
}
