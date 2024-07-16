import cl from "classnames";

import { IconName, ComponentProps } from "../types";

import "./index.scss";
import classNames from "classnames";

interface IconProps extends ComponentProps {
  name: IconName;
}

export const Icon = ({ name, className }: IconProps) => {
  return <span className={cl("icon", `icon--${name}`, className)} />;
};
