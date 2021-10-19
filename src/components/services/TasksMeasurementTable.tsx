import React, {useState} from "react";
import { HomeIcon } from "@components/icons";

interface Props {
  className?: string
}
const TasksMeasurementTable: React.FC<Props> = ({...props}) => {
  const [tab, setTab] = useState('home');
  return (
    <div className={props.className} data-testid="container">
        <div className="block w-full py-2 bg-transparent ">
        TasksMeasurementTable
        </div>
    </div>
  );
};
export default TasksMeasurementTable;
