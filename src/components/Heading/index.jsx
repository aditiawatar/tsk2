import React from "react";

const sizes = {
  "3xl": "text-[35px] font-semibold md:text-[33px] sm:text-[31px]",
  "2xl": "text-[26px] font-bold md:text-2xl sm:text-[22px]",
  "5xl": "text-[42px] font-semibold md:text-[38px] sm:text-[32px]",
  "4xl": "text-[38px] font-semibold md:text-4xl sm:text-[34px]",
  "7xl": "text-[54px] font-bold md:text-[46px] sm:text-[40px]",
  "6xl": "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
  "9xl": "text-[90px] font-bold md:text-5xl",
  "8xl": "text-6xl font-bold md:text-[52px] sm:text-[46px]",
  xl: "text-2xl font-bold md:text-[22px]",
  s: "text-base font-semibold",
  md: "text-lg font-bold",
  xs: "text-sm font-bold",
  lg: "text-[22px] font-semibold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-deep_purple-600 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
