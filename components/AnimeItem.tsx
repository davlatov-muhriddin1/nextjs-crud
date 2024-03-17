"use client";
import { Anime } from "@/types/anime";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";

function AnimeItem({ _id, title, info, image, createdAt, deleteAnime }: Anime) {
  const router = useRouter();

  return (
    <div className="border-2 border-gray-400 w-[350px] rounded-md overflow-hidden">
      <div className="relative w-[350px] h-[220px]">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-2">
        <div className="h-[160px]">
          <h3 className="font-bold text-2xl">{title}</h3>
          <p className="py-3">{info.slice(0, 100)}...</p>
          <p>{moment(createdAt).format("DD-MM-YYYY HH:mm")}</p>
        </div>
        <div className="flex items-center">
          <button
            className="py-2 px-4 bg-green-600 text-white font-bold"
            onClick={() => router.push(`/detail/${_id}`)}
          >
            Detail
          </button>
          <button
            onClick={() => router.push(`/edit/${_id}`)}
            className="py-2 px-4 bg-blue-600 text-white font-bold"
          >
            Edit
          </button>
          <button
            onClick={() => deleteAnime && deleteAnime(_id)}
            className="py-2 px-4 bg-red-600 text-white font-bold flex gap-2 items-center"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimeItem;
