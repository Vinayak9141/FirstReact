import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded", circle: "rounded-[50%]" };
const variants = {
  fill: {
    green_A400: "bg-green-A400 text-gray-50",
    red_600: "bg-red-600 text-gray-50",
    gray_100: "bg-gray-100",
    white_A700: "bg-white-A700",
  },
};
const sizes = { xs: "p-1", sm: "p-[11px]", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["green_A400", "red_600", "gray_100", "white_A700"]),
};

export { Button };
