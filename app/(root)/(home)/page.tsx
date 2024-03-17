"use client";

import AnimeItem from "@/components/AnimeItem";
import Loader from "@/components/Loader";
import { Anime } from "@/types/anime";
import axios from "axios";
import { useEffect, useState } from "react";

function Page() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  const getAnimes = async () => {
    const { data } = await axios.get("/api/crud");
    setAnimes(data.animes);
  };

  const deleteAnime = async (id: string): Promise<void> => {
    setLoader(true);
    const { data } = await axios.delete(`/api/crud/${id}`);
    setLoader(false);
  };

  useEffect(() => {
    getAnimes();
  }, [animes]);

  return (
    <div className="py-5">
      <div className="flex justify-center flex-wrap gap-4">
        {animes.length ? (
          animes.map((anime) => (
            <AnimeItem key={anime._id} {...anime} deleteAnime={deleteAnime} />
          ))
        ) : (
          <div className="w-full flex justify-center py-16">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
