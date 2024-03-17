"use client";
import Loader from "@/components/Loader";
import Input from "@/components/ui/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Page() {
  const [image, setImage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const router = useRouter();

  const handleClick = async (e: any) => {
    setLoader(true);
    e.preventDefault();

    if (!image || !title || !info) {
      setError(true);
      setLoader(false);
      return;
    }
    setError(false);

    const animeData = {
      image,
      title,
      info,
    };

    await axios.post("/api/crud", animeData);
    router.push("/");
    setImage("");
    setTitle("");
    setInfo("");
    setLoader(false);
  };
  return (
    <div className="py-14 flex flex-col items-center">
      <h1 className="font-bold text-3xl mb-4">Add Anime:</h1>
      <form onSubmit={handleClick} className="w-1/2">
        <span className="text-red-700">
          {error && "Pleace all complate sections!!!"}
        </span>
        <Input
          state={image}
          setState={setImage}
          placeholder="Image Url"
          error={error}
        />
        <Input
          state={title}
          setState={setTitle}
          placeholder="Enter Anime Name"
          error={error}
        />
        <Input
          state={info}
          setState={setInfo}
          placeholder="Enter Anime Info"
          error={error}
        />

        <button
          className={`py-2 px-6 gap-2 bg-blue-700 text-white rounded-md flex ${
            loader && "bg-blue-500"
          }`}
        >
          Send {loader && <Loader />}
        </button>
      </form>
    </div>
  );
}

export default Page;
