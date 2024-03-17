import { connectToDatabase } from "@/lib/mongoose";
import Animes from "@/models/Animes";
import { NextResponse } from "next/server";

// get all anime
export async function GET(req: Request) {
  try {
    await connectToDatabase();

    const animes = await Animes.find({});
    if (animes.length) {
      return NextResponse.json({ message: "success", animes });
    } else {
      return NextResponse.json({ message: "animes is not available" });
    }
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}

// create anime
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { image, title, info } = await req.json();

    if (!image || !title || !info) {
      return NextResponse.json({ message: "please complete all sections" });
    }

    const anime = await Animes.create({ image, title, info });

    return NextResponse.json({ message: "success", anime });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
