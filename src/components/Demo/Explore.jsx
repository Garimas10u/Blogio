import React from "react";
import { explore, exploreActions } from "../../data";


const Explore = () => {
 
  return (
    <div className="sticky top-[6rem]">
      <div className="border-b border-purple-100 pb-7">
        <h2 className="font-semibold pb-1">Explore and Evolve</h2>
        <div className="my-2 flex items-center gap-3 flex-wrap">
          {explore.map((item, i) => (
            <button
              key={i}
              className="bg-purple-200 py-2 px-3 text-sm rounded-full">
              {item}
            </button>
          ))}
        </div>
        <button className="text-violet-950 text-sm py-3 hover:text-purple-500 ">
          See more topics
        </button>
      </div>
      <div className="flex items-center flex-wrap gap-3 leading-3 pt-8">
        {exploreActions.map((item, i) => (
          <button key={i} className="text-md text-gray-950">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Explore;