"use client";

import Loader from "@/components/Loader";
import { Anime } from "@/types/anime";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";

function Page({ params }: { params: { id: string } }) {
  const [detail, setDetail] = useState<Anime | null>(null);

  const getDetail = async (): Promise<void> => {
    const { data } = await axios.get(`/api/crud/${params.id}`);
    setDetail(data.anime);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {detail ? (
        <div className="flex">
          <div className="relative w-1/2 h-[500px] rounded-md overflow-hidden">
            <Image
              src={detail?.image || ""}
              alt={detail?.title || ""}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-10 w-1/2">
            <h1 className="text-3xl font-bold">{detail?.title}</h1>
            <p className="text-gray-500 py-3">{detail?.info}</p>
            <p className="font-bold">
              {moment(detail?.createdAt).format("DD-MM-YYYY")}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center py-20">
          <Loader />
        </div>
      )}
    </>
  );
}

export default Page;
