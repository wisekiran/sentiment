import { useState } from "react";
import { getSentiment } from "./sentiment";
import { TextAreaComponent } from "./textarea";


export default async function Home() {  

  return (
    <>
   
   <main className="relative flex min-h-screen flex-col items-center justify-center p-24">
  <div className="flex flex-col items-center justify-center p-24">
    <div className="flex z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Analyze sentiments below!&nbsp;
        <code className="font-mono font-bold">Positive or Negative 🤔</code>
      </p>
    </div>
  </div>

  <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
  </div>

      <TextAreaComponent />

    </main>
    </>
  );
}
