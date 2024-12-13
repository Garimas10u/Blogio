import React from 'react'
import Banner from "./Banner";
import Discover from './Discover';
import Trending from './Trending';
import Posts from '../Common/Posts/Posts';

const Demo = () => {
  return (
    <>
    <Banner />
    <Trending />
    <div className="size  py-7 flex flex-col-reverse md:flex-row gap-[7rem]">
        <div className="flex-[1.5]">
          {/* <Posts /> */}
        </div>
        <div className="flex-[1] border-l border-violet-950 pl-2 relative">
          <Discover />
        </div>
      </div>
    </>
  )
}

export default Demo