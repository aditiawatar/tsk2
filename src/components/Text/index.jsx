import React from "react";

const sizes = {
  "5xl": "text-2xl font-normal md:text-[22px]",
  xs: "text-[11px] font-normal",
  lg: "text-base font-normal",
  "6xl": "text-[38px] font-medium md:text-4xl sm:text-[34px]",
  "7xl": "text-[40px] font-medium md:text-[38px] sm:text-4xl",
  s: "text-[13px] font-medium",
  "2xl": "text-xl font-medium",
  "3xl": "text-[22px] font-normal",
  "4xl": "text-[23px] font-medium md:text-[21px]",
  xl: "text-lg font-normal",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
