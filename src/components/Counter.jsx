import { Text } from "./Text";
import { IconMinus } from "./icons/IconMinus.jsx";
import { IconAdd } from "./icons/IconAdd.jsx";

import styles from "./Counter.module.css";
import { useState } from "react";

export const Counter = (props) => {
  return (
    <div className={styles.wrapper}>
      <Text>
        {props.count} {props.text}
      </Text>
      <nav>
        <IconMinus onClick={props.onDecrement} />
        <IconAdd onClick={props.onIncrement} />
      </nav>
    </div>
  );
};
