import TaskCard from "@/components/TaskCard";

import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="mt-5 py-10">
        <div className="flex flex-col w-full mt-5 py-10">
          <h1 className="text-md font-bold m-5">Open Bounties</h1>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <TaskCard />
          </div>
          <div className="divider"></div>
          <h1 className="text-md font-bold m-5">Completed Bounties</h1>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <TaskCard />
          </div>
        </div>
      </div>
    </main>
  );
}
