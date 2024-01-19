import React from "react";

const sizeClasses = {
  txtPoppinsRegular16Gray50: "font-normal font-poppins",
  txtInterSemiBold48: "font-inter font-semibold",
  txtPoppinsMedium16Black90087: "font-medium font-poppins",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterBold24: "font-bold font-inter",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular11: "font-normal font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium16Black900: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold16Black900: "font-poppins font-semibold",
  txtPoppinsSemiBold16GreenA400: "font-poppins font-semibold",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsMedium12Black900: "font-medium font-poppins",
  txtPoppinsSemiBold14Gray50: "font-poppins font-semibold",
  txtPoppinsRegular14Black900: "font-normal font-poppins",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterBold24Gray50: "font-bold font-inter",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtInterBold32: "font-bold font-inter",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium16Red600: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
