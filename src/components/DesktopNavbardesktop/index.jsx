import React from "react";
import { Button, Text, Img } from "./..";

export default function DesktopNavbardesktop({
  madeby = "made by",
  about = "About",
  features = "Features",
  customers = "Customers",
  updates = "Updates",
  help = "Help",
  getForFree = "Get for free",
  ...props
}) {
  return (
    <div {...props}>
      <div className="mx-auto my-1 flex w-full max-w-[1169px] items-center justify-between gap-5 md:flex-col">
        <div className="flex items-center gap-2">
          <Img src="images/img_logo_default.png" alt="logodefault_one" className="h-[41px] w-[40px] object-cover" />
          <Text size="md" as="p" className="mb-2.5 self-end">
            {madeby}
          </Text>
          <div className="flex items-center gap-2">
            <Img src="images/img_user.svg" alt="user_one" className="h-[21px]" />
            <Img src="images/img_settings.svg" alt="settings_one" className="h-[9px]" />
          </div>
        </div>
        <div className="flex items-center gap-6 sm:flex-col">
          <Text as="p" className="tracking-[-0.16px] !text-black-900_99">
            {about}
          </Text>
          <Text as="p" className="tracking-[-0.16px] !text-black-900_99">
            {features}
          </Text>
          <Text as="p" className="tracking-[-0.16px] !text-black-900_99">
            {customers}
          </Text>
          <Text as="p" className="mb-2 self-end tracking-[-0.16px] !text-black-900_99">
            {updates}
          </Text>
          <Text as="p" className="mb-2 self-end tracking-[-0.16px] !text-black-900_99">
            {help}
          </Text>
          <Button color="black_900" shape="round" className="min-w-[115px] font-medium tracking-[-0.32px]">
            {getForFree}
          </Button>
        </div>
      </div>
    </div>
  );
}
