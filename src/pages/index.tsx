import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../Components/card";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-500 to-blue-500">
      <div className="flex rounded-bl-lg rounded-br-lg bg-blue-200 py-0.5">
        <Link href="/">
          <img
            className="float-left h-[5vh] w-[vw] max-w-lg"
            src="logo.png"
          ></img>
          <h1 className="float-left text-4xl text-indigo-900">Blog A.I.</h1>
        </Link>
      </div>
      <Link href="/info">
        <button className="btn btn-circle btn-outline text-3xl text-center fixed bottom-5 right-5">
          <h1 className="text-4xl ">🛈</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </button>
      </Link>
    </>
  );
};

export default Home;
