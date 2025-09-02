"use client";

import { useSession } from "next-auth/react";
import AuthButton from "../components/auth-button";
import { redirect } from "next/navigation";
import Image from "next/image";
import diceImg from "../../public/dice.svg";

export default function Page() {
	const { data: session } = useSession();

	if (!session) {
		return (
			<div className="flex flex-col gap-4 p-4 justify-center items-center h-screen">
				<Image src={diceImg} alt={"Dice"} width={96} height={96} />
				<h2 className="p-2 text-2xl text-center text-balance">
					Bienvenue sur Player Companion !<br /> Veuillez vous connecter pour
					accéder à l'application.
				</h2>
				<AuthButton />
			</div>
		);
	} else redirect("/");
}
