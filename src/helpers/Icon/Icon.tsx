import * as Icons from "assets/Icons";
import { ISvgSize } from "assets/Icons/interface";
import classNames from "classnames";
import React from "react";

import { EColor, EIcons } from "../enumeration";
import styles from "./icon.module.scss";

interface IIconProps {
  name: EIcons;
  size?: ISvgSize;
  color?: EColor;
  className?: string;
}

export function Icon({ name, size, color, className }: IIconProps) {
  const Icon = Icons[name];

  return (
    <span
      className={classNames(styles[`${color}`], className)}
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon width={size?.width} height={size?.height} />
    </span>
  );
}
