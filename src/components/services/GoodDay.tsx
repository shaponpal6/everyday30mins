import React, {useState} from "react";
import { HomeIcon } from "@components/icons";

interface Props {
  className?: string
}
const GoodDay: React.FC<Props> = ({...props}) => {
  const [tab, setTab] = useState('home');
  return (
    <div className={props.className} data-testid="container">
        Good Morning
    </div>
  );
};
export default GoodDay;
