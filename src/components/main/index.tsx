import React from "react";
import Link from "next/link";

import { Button } from "@components";

import { HomeTab } from "@components/tabs";
import { CurrentTasks, TasksMeasurementTable } from "@components/services";

export const Main: React.FC = () => {
  return (
    <div className="block w-full h-48 flex flex-col overflow-hidden h-full rounded-2xl shadow-2xl border-2 border-gray-300">  
      <div className="grid grid-cols-8 gap-4 px-8 py-4 text-white">
        {/* Left Side */}
        <div className="flex col-start-1 col-end-4">
          <HomeTab/>
        </div>
        {/* Right Side */}
        <div className="col-end-9 col-span-3">
          <CurrentTasks/>
          <TasksMeasurementTable/>
        </div>
        <div className="col-start-1 col-end-9">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 text-white flex items-center">
            <div className="text-center">
              <h2 className="text-xl">left</h2>
            </div>
            <div className="text-center">
              <Link href="/">
                <Button type="button">
                  <a>Make your self improvement plan</a>
                </Button>
              </Link>
              
            </div>
            <div className="text-center">
              <h2 className="text-xl">04 : 10 : 12</h2>
            </div>
          </div>
        </div>
      </div>
  
      
      {/* <div className="text-center w-auto">
        <div className="text-center min-w-full ">
          <img className="min-w-full " src="https://picsum.photos/800/300/?random" alt="1" />
        </div>
      </div> */}
      {/* <div className="text-center font-light px-10 py-10 ">
        <div className="container mx-auto">
          <h1 data-test="main-heading" className="text-white text-8xl mb-2">
            Self Improvement
          </h1>
          <p className="text-lg text-white mb-3">
            Everyday 30 minutes to create a good habit.
          </p>
          <Button type="button">
            <Link href="/mygoals" data-test="docs-btn-anchor">
              <a>Make my Goals</a>
            </Link>
          </Button>
        </div>
      </div> */}
    </div>
  );
};
