import React from "react";

import data from "@public/meta.json";
import {AddGoals} from "@components/forms";

const MyRegularRoutine: React.FC = () => {
  return (
    <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 rounded-md border border-gray-300 p-5" data-testid="container">
          <h2 className="text-xl font-semibold mb-2">I wake up at 4am everyday</h2>
          <p className="m-0"></p>
        </div>
        <div className="col-span-1 rounded-md border border-gray-300 p-5" data-testid="container">
          <h2 className="text-xl font-semibold mb-2">My Day</h2>
          <p className="m-0">19 hours my day</p>
        </div>
        <div className="col-span-1 rounded-md border border-gray-300 p-5" data-testid="container">
          <h2 className="text-xl font-semibold mb-2">I used to go to sleep at 11</h2>
          <p className="m-0"></p>
        </div>
      </div>
      <h2>My habit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* <AddGoals/> */}
        <div className="col-span-1 rounded-md border border-gray-300 p-5" data-testid="container">
          <h2 className="text-xl font-semibold mb-2">My Good Habits</h2>
          <p className="m-0">list...</p>
        </div>
        <div className="col-span-1 rounded-md border border-gray-300 p-5" data-testid="container">
          <h2 className="text-xl font-semibold mb-2">My Bad Habits</h2>
          <p className="m-0">list...</p>
        </div>
        
        {/* {(data?.plugins ?? []).map((plugin) => (
          <div
            key={plugin.name}
            className="col-span-1 rounded-md border border-gray-300 p-5"
            data-testid="container"
          >
            <h2 className="text-xl font-semibold mb-2">{plugin.name}</h2>
            <p className="m-0">{plugin.description}</p>
          </div>
        ))} */}
      </div>
      <h2>My Everyday Tasks</h2>
      <div className="grid grid-cols-1 gap-2">
        <div className="col-span-1 rounded-md border border-gray-300 p-5" data-testid="container">
          <h2 className="text-xl font-semibold mb-2">My Task 1</h2>
          <p className="m-0"></p>
        </div>
        <div className="col-span-1 rounded-md border border-gray-300 p-5" data-testid="container">
          <h2 className="text-xl font-semibold mb-2">My Task 2</h2>
          <p className="m-0">19 hours my day</p>
        </div>
        <div className="col-span-1 rounded-md border border-gray-300 p-5" data-testid="container">
          <h2 className="text-xl font-semibold mb-2">My Task 3</h2>
          <p className="m-0"></p>
        </div>
      </div>

    </div>
  );
};

export default MyRegularRoutine;
