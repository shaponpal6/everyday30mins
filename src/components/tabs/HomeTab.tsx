import React, {useState} from "react";
import { HomeIcon } from "@components/icons";
import { GoodDay, Quote, TopStories, TodayActivities } from "@components/services";

interface Props {
  className?: string
}
const HomeTab: React.FC<Props> = ({...props}) => {
  const [tab, setTab] = useState('GoodDay');
  return (
    <div className={props.className} data-testid="container">
        <div className="flex w-auto gap-2">
          <div className="cursor-pointer" onClick={()=> setTab('GoodDay')}><HomeIcon/></div>
          <div className="cursor-pointer" onClick={()=> setTab('TopStories')}>Today's Stories</div>
          <div className="cursor-pointer" onClick={()=> setTab('TodayActivities')}>My Activities</div>
        </div>
        <div className="block w-auto">
          {tab === 'GoodDay' && <GoodDay/>}
          {tab === 'GoodDay' && <Quote/>}
          {tab === 'TopStories' && <TopStories/>}
          {tab === 'TodayActivities' && <TodayActivities/>}
        </div>
    </div>
  );
};
export default HomeTab;
