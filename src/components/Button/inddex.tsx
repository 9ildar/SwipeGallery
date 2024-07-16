import cl from "classnames";

import { IconName, ComponentProps } from "../types";

import { Icon } from "../Icon";

import "./index.scss";

interface ButtonProps extends ComponentProps {
  onclick: () => void;
  iconName?: IconName;
  disabled?: boolean;
}

export const Button = ({
  iconName,
  children,
  onclick,
  disabled = false,
  className,
}: ButtonProps) => (
  <button
    onClick={onclick}
    className={cl("button", className)}
    disabled={disabled}>
    {iconName && <Icon name={iconName} />}
    {children}
  </button>
);
