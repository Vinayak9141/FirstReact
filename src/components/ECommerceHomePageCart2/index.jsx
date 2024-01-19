import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 md:h-[180px] h-[250px] p-3 relative rounded w-full">
          <div className="absolute flex flex-col gap-2 items-center justify-start right-[5%] top-[5%] w-auto">
            <Button
              className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
              shape="circle"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_wishlist.svg"
                alt="heartsmall"
              />
            </Button>
            <Button
              className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
              shape="circle"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_quickview.svg"
                alt="quickview"
              />
            </Button>
          </div>
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto py-[38px] w-[71%]">
            <Img
              className="h-[95px] md:h-auto mt-[9px] object-cover w-full"
              src="images/img_gammaxxl240argb1500x500.png"
              alt="gammaxxl240argb"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtPoppinsMedium16Black900"
          >
            {props?.productname}
          </Text>
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
            <Text
              className="text-base text-red-600 w-auto"
              size="txtPoppinsMedium16Red600"
            >
              {props?.pricetext}
            </Text>
            <Text
              className="line-through text-base text-black-900_87 w-auto"
              size="txtPoppinsMedium16Black90087"
            >
              {props?.discountedpricetext}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            <div className="flex flex-row items-start justify-start w-auto">
              <Img
                className="h-5 rounded-[1px] w-5"
                src="images/img_signal_orange_a200.svg"
                alt="signal"
              />
              <Img
                className="h-5 rounded-[1px] w-5"
                src="images/img_signal_orange_a200.svg"
                alt="signal_One"
              />
              <Img
                className="h-5 rounded-[1px] w-5"
                src="images/img_signal_orange_a200.svg"
                alt="signal_Two"
              />
              <Img
                className="h-5 rounded-[1px] w-5"
                src="images/img_signal_orange_a200.svg"
                alt="signal_Three"
              />
              <Img
                className="h-5 w-5"
                src="images/img_starhalffilled.svg"
                alt="starhalffilled"
              />
            </div>
            <Text
              className="text-black-900_87 text-sm w-[30px]"
              size="txtPoppinsSemiBold14"
            >
              {props?.ratingtext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart2.defaultProps = {
  productname: "RGB liquid CPU Cooler",
  pricetext: "$160",
  discountedpricetext: "$170",
  ratingtext: "(65)",
};

export default ECommerceHomePageCart2;
