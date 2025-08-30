import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET(
	request: NextRequest,
	{ params }: { params: { email: string } }
) {
	try {
		const email = decodeURIComponent(params.email);
		
		const user = await prisma.user.findUnique({
			where: { email },
			include: {
				character: true
			}
		});

		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		return NextResponse.json(user);
	} catch (error) {
		console.error("Error fetching user:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}