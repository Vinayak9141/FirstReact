import React from "react";

import { Img, List, Text } from "components";

const ECommerceHomePageListicondelivery = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-col gap-6 items-center justify-start w-auto">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
            style={{ backgroundImage: "url('images/img_services.svg')" }}
          >
            <Img
              className="h-10 w-10"
              src="images/img_icondelivery.svg"
              alt="icondelivery"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <Text
              className="text-black-900 text-xl w-auto"
              size="txtPoppinsSemiBold20"
            >
              {props?.deliverytext}
            </Text>
            <Text
              className="text-black-900 text-center text-sm w-auto"
              size="txtPoppinsRegular14Black900"
            >
              {props?.deliverytext1}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-start w-[262px]">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
            style={{ backgroundImage: "url('images/img_services.svg')" }}
          >
            <Img
              className="h-10 w-10"
              src="images/img_iconcustomerservice.svg"
              alt="iconcustomerser"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <Text
              className="text-black-900 text-xl w-auto"
              size="txtPoppinsSemiBold20"
            >
              {props?.customerservicetext}
            </Text>
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtPoppinsRegular14Black900"
            >
              {props?.customerservicetext1}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-start w-auto">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
            style={{ backgroundImage: "url('images/img_services.svg')" }}
          >
            <Img
              className="h-10 w-10"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <Text
              className="text-black-900 text-xl w-auto"
              size="txtPoppinsSemiBold20"
            >
              {props?.moneybacktext}
            </Text>
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtPoppinsRegular14Black900"
            >
              {props?.moneybacktext1}
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

ECommerceHomePageListicondelivery.defaultProps = {
  deliverytext: "FREE AND FAST DELIVERY",
  deliverytext1: "Free delivery for all orders over $140",
  customerservicetext: "24/7 CUSTOMER SERVICE",
  customerservicetext1: "Friendly 24/7 customer support",
  moneybacktext: "MONEY BACK GUARANTEE",
  moneybacktext1: "We reurn money within 30 days",
};

export default ECommerceHomePageListicondelivery;
