import React from "react";

import { Text } from "components";

const ECommerceHomePageFlashselltimer = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-9 md:h-[27px] mb-0.5 relative w-8">
          <Text
            className="absolute inset-x-[0] mx-auto text-base text-black-900 top-[0] w-max"
            size="txtPoppinsSemiBold16Black900"
          >
            {props?.userimage}
          </Text>
          <Text
            className="absolute bottom-[0] inset-x-[0] mx-auto text-[11px] text-black-900 w-max"
            size="txtPoppinsRegular11"
          >
            {props?.hours}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageFlashselltimer.defaultProps = {
  userimage: "23",
  hours: "Hours",
};

export default ECommerceHomePageFlashselltimer;
