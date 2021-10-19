import React from "react";

import Link from "next/link";
import { Logo } from "@components";
import { ActivitiesIcon, BadgeIcon, BooksIcon, ExerciseIcon, LevelIcon, MeditationIcon, MenuAlt2Icon, NewsIcon, PointsIcon } from "@components/icons";

interface Props {
  className?: string
}
const Navbar: React.FC<Props> = ({...props}) => {
  return (
    <div className={props.className} data-testid="container">
      <div className="flex justify-between py-2 px-10">
        <div className="flex items-center">
          {/* <Logo/> */}
          <h2 className="e30-logo">Everyday30mins</h2>
        </div>
        <div className="flex flex-center items-center gap-6 text-center text-white">
          <Link href="/">
            <div className="text-center text-white ">
              <div className="inline-block"><MeditationIcon/></div>
              <div className="e30-text">Meditation</div> 
            </div>
          </Link>
          <Link href="/">
            <div className="text-center text-white ">
              <div className="inline-block"><ExerciseIcon/></div>
              <div className="e30-text">Exercise</div>
            </div>
          </Link>
          <Link href="/">
            <div className="text-center text-white ">
              <div className="inline-block"><NewsIcon/></div>
              <div className="e30-text">Top News</div>
            </div>
          </Link>
          <Link href="/">
            <div className="text-center text-white ">
              <div className="inline-block"><BooksIcon/></div>
              <div className="e30-text">Books</div>
            </div>
          </Link>
          <Link href="/">
            <div className="text-center text-white">
              <div className="inline-block"><ActivitiesIcon/></div>
              <div className="e30-text">Today's Activities</div>
            </div>
          </Link>

        </div>
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 float-right flex justify-end text-white items-center justify-items-end">
          <Link href="/">
            <div className="text-center text-white ">
              <div className="inline-block"><BadgeIcon/></div>
              <div className="e30-text">Badge</div>
            </div>
          </Link>
          <Link href="/">
            <div className="text-center text-white ">
              <div className="inline-block"><LevelIcon/></div>
              <div className="e30-text">Level</div>
            </div>
          </Link>
          <Link href="/">
            <div className="text-center text-white ">
              <div className="inline-block"><PointsIcon/></div>
              <div className="e30-text">Point</div>
            </div>
          </Link>
          <Link href="/">
            <div className="text-center text-white ">
              <div className="inline-block">ic</div>
              <div className="e30-text">User</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
