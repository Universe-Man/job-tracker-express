import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/database";

export const POST = async (req: NextRequest) => {

  try {
    const { email, password, firstName, lastName } = await req.json();
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: "Insufficient Data for Account Creation" },
        { status: 400 },
      );
    };
    const res = await db.query(
      "INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *", [email, password, firstName, lastName]
    );
    return NextResponse.json(res.rows[0], { status: 201 });
  } catch (error) {
    console.error("Error Creating User:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  };
};