import React, {useState} from "react";
import { HomeIcon } from "@components/icons";

interface Props {
  className?: string
}
const Quote: React.FC<Props> = ({...props}) => {
  const [tab, setTab] = useState('home');
  return (
    <div className={props.className} data-testid="container">
        <div className="block w-full py-2 bg-transparent ">
        “We cannot solve problems with the kind of thinking we employed when we came up with them.”
        </div>
        <div className="block w-full py-2 text-right">
        Albert Einstein
        </div>
    </div>
  );
};
export default Quote;
