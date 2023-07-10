import { useState } from "react";
import LightOff from "/images/light-off.svg";
import LightBlue from "/images/light-blue.svg";

export const SingleLight = () => {
  const [isOn, setOn] = useState(true);

  const imageSrc = isOn ? LightBlue : LightOff;

  const handleToggle = () => {
    setOn(!isOn);
  };

  return <img onClick={handleToggle} src={imageSrc} alt="single light" />;
};
