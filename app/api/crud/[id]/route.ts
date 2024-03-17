import { connectToDatabase } from "@/lib/mongoose";
import Animes from "@/models/Animes";
import { NextResponse } from "next/server";

// get single anime

export async function GET(req: Request, route: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const { id } = route.params;
    const anime = await Animes.findById(id);

    if (!anime) {
      return NextResponse.json({ message: "Anime Not Found" });
    }

    return NextResponse.json({ message: "success", anime });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}

// edit anime
export async function PUT(req: Request, route: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const { id } = route.params;
    const { image, title, info } = await req.json();

    const isExist = await Animes.findById(id);

    if (!isExist) {
      return NextResponse.json({ message: "Anime Not Found" });
    }

    const updatedAnime = await Animes.findByIdAndUpdate(
      id,
      {
        image,
        title,
        info,
      },
      { new: true }
    );

    return NextResponse.json({ message: "success", anime: updatedAnime });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}

// delete anime

export async function DELETE(req: Request, route: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const { id } = route.params;

    const isExist = await Animes.findById(id);

    if (!isExist) {
      return NextResponse.json({ message: "Anime Not Found" });
    }

    const deletedAnime = await Animes.findByIdAndDelete(id);
    return NextResponse.json({ message: "success" });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
