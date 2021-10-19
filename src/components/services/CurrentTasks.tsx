import React, {useState} from "react";
import { HomeIcon } from "@components/icons";

interface Props {
  className?: string
}
const CurrentTasks: React.FC<Props> = ({...props}) => {
  const [tab, setTab] = useState('home');
  return (
    <div className={props.className} data-testid="container">
        <div className="block w-full py-2 bg-transparent ">
        CurrentTasks
        </div>
    </div>
  );
};
export default CurrentTasks;
