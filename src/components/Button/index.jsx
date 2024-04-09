import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};
const variants = {
  outline: {
    white_A700_33: "border-white-A700_33 border border-solid",
    gray_900_19: "border-gray-900_19 border border-solid text-black-900",
  },
  fill: {
    white_A700_01: "bg-white-A700_01 text-black-900",
    deep_purple_600: "bg-deep_purple-600 shadow-2xl text-gray-50",
    deep_purple_50: "bg-deep_purple-50",
    orange_300: "bg-orange-300 text-gray-900_06",
    gray_100: "bg-gray-100 shadow-xl text-deep_purple-600",
    black_900: "bg-black-900 text-white-A700_01",
  },
};
const sizes = {
  lg: "h-[41px]",
  "3xl": "h-[64px] px-[17px]",
  sm: "h-[36px] px-[18px] text-sm",
  xl: "h-[44px] px-[35px] text-lg",
  "4xl": "h-[70px] px-[35px] text-2xl",
  xs: "h-[29px] px-[13px] text-[13px]",
  "2xl": "h-[59px] px-[30px] text-lg",
  md: "h-[39px] px-[15px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "deep_purple_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["lg", "3xl", "sm", "xl", "4xl", "xs", "2xl", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "white_A700_33",
    "gray_900_19",
    "white_A700_01",
    "deep_purple_600",
    "deep_purple_50",
    "orange_300",
    "gray_100",
    "black_900",
  ]),
};

export { Button };
