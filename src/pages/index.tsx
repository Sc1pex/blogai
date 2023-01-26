import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../Components/card";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { api } from "../utils/api";
import { useState } from "react";
import { BlogEntry } from "@prisma/client";
import Tag from "../Components/tags/tag";
import { BiHelpCircle } from "react-icons/bi";

const Home: NextPage = () => {
  const [filter, setFilter] = useState([""]);
  const entries = api.post.getPosts.useQuery;

  const set_tag = (tag: string) => {
    if (filter.includes(tag)) {
      const index = filter.indexOf(tag);
      filter.splice(index, 1);
      setFilter(filter);
    } else {
      filter.push(tag);
      setFilter(filter);
    }
  };

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex rounded-bl-lg rounded-br-lg bg-blue-200 py-0.5">
        <Link href="/">
          <img className="float-left h-[5vh] max-w-lg" src="logo.png"></img>
          <h1 className="float-left text-4xl text-indigo-900">Blog A.I.</h1>
        </Link>
        <>
          <div className="mt-[1vh] flex">
            <button
              className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold  text-gray-800 shadow hover:bg-gray-300"
              onClick={() => set_tag("Business")}
            >
              #Business
            </button>
            <button
              className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
              onClick={() => set_tag("Business")}
            >
              #Marketing
            </button>
            <button
              className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
              onClick={() => set_tag("Business")}
            >
              #Copywriting
            </button>
            <button
              className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
              onClick={() => set_tag("Business")}
            >
              #Text
            </button>
            <button
              className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
              onClick={() => set_tag("Business")}
            >
              #Video
            </button>
            <button
              className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
              onClick={() => set_tag("Business")}
            >
              #Image
            </button>
            <button
              className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
              onClick={() => set_tag("Business")}
            >
              #Game
            </button>
            <button
              className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
              onClick={() => set_tag("Business")}
            >
              #Research
            </button>
            <button
              className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
              onClick={() => set_tag("Business")}
            >
              #Voice
            </button>
          </div>
        </>
      </div>
      <div className="grid grid-cols-2 items-center">
        {entries({}).data?.map((e) => (
          <div className="p-10" key={e.name}>
            <Card name={e.name} short_desciption={e.description}></Card>
          </div>
        ))}
      </div>
      <Link href="/info">
        <button className="btn-outline btn-circle btn fixed bottom-5 right-5 text-center text-3xl">
          <AiOutlineInfoCircle className="h-8 w-8" />
        </button>
      </Link>
      <Link href="/BenefitsAndDisadvantages">
        <button className="btn-outline btn-circle btn fixed bottom-5 left-5 text-center text-3xl">
          <BiHelpCircle className="h-8 w-8" />
        </button>
      </Link>
    </div>
  );
};

export default Home;
