import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import DesktopFooterl from "../../components/DesktopFooterl";
import DesktopNavbardesktop from "../../components/DesktopNavbardesktop";
import DesktopTestimonial from "../../components/DesktopTestimonial";

export default function DesktopPage() {
  return (
    <>
      <Helmet>
        <title>Aditi's Application7</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700_01">
        <div className="flex flex-col items-center">
          <header className="flex items-center justify-center self-stretch bg-black-900 p-[11px]">
            <div className="flex gap-[11px] self-end sm:flex-col">
              <Text size="md" as="p" className="self-end !font-dmsans !text-white-A700_99">
                This page is included in a free SaaS Website Kit.
              </Text>
              <div className="flex items-center gap-1 self-start">
                <Text size="md" as="p" className="!font-dmsans !text-white-A700_01">
                  View the complete Kit
                </Text>
                <Img src="images/img_icons.svg" alt="icons_one" className="h-[16px] w-[16px] self-start" />
              </div>
            </div>
          </header>
          <DesktopNavbardesktop className="flex items-center self-stretch bg-blue-50 p-[15px]" />
          <div className="relative h-[842px] self-stretch">
            <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full flex-col items-center bg-gradient p-[5px]">
              <Img
                src="images/img_cylinder_1.png"
                alt="cylinderone_one"
                className="relative z-[1] mt-1 h-[197px] w-[18%] object-cover"
              />
              <div className="relative mb-[37px] mt-[-186px] flex w-full max-w-6xl items-start md:flex-col">
                <div className="mt-[85px] flex w-[44%] flex-col items-start gap-[29px] md:w-full">
                  <Button
                    color="gray_900_19"
                    size="xs"
                    variant="outline"
                    shape="round"
                    className="min-w-[137px] font-medium tracking-[-0.33px]"
                  >
                    Version 2.0 is here
                  </Button>
                  <Heading
                    size="9xl"
                    as="h1"
                    className="bg-gradient3 bg-clip-text leading-[90px] tracking-[-5.85px] !text-transparent"
                  >
                    Pathway to productivity
                  </Heading>
                  <Text
                    size="3xl"
                    as="p"
                    className="w-[89%] leading-[31px] tracking-[-0.79px] !text-gray-900_01 md:w-full"
                  >
                    Celebrate the joy of accomplishment with an app designed to track your progress, motivate your
                    efforts, and celebrate your successes.
                  </Text>
                  <div className="flex items-center gap-[17px]">
                    <Button color="black_900" shape="round" className="min-w-[115px] font-medium tracking-[-0.32px]">
                      Get for free
                    </Button>
                    <div className="flex gap-1 rounded-[10px] py-[9px]">
                      <a href="#">
                        <Text as="p" className="!font-medium tracking-[-0.32px]">
                          Learn more
                        </Text>
                      </a>
                      <Img src="images/img_icons_black_900.svg" alt="icons_three" className="h-[20px] w-[20px]" />
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_visual.png"
                  alt="visual_one"
                  className="relative ml-[-7px] h-[648px] w-[648px] object-cover md:ml-0 md:w-full"
                />
              </div>
            </div>
            <div className="absolute bottom-[0.00px] left-0 right-0 m-auto w-full">
              <div className="relative h-[132px] md:h-auto">
                <div className="flex w-full max-w-5xl items-center justify-between gap-5 md:flex-col md:p-5">
                  <Img
                    src="images/img_acme_1.png"
                    alt="acmeone_one"
                    className="h-[32px] w-[14%] object-cover md:w-full"
                  />
                  <Img
                    src="images/img_quantum_1.png"
                    alt="quantumone_one"
                    className="h-[32px] w-[12%] object-cover md:w-full"
                  />
                  <Img
                    src="images/img_echo_1.png"
                    alt="echoone_one"
                    className="h-[28px] w-[16%] object-cover md:w-full"
                  />
                  <Img
                    src="images/img_celestia_1.png"
                    alt="celestiaone_one"
                    className="h-[28px] w-[11%] object-cover md:w-full"
                  />
                  <Img
                    src="images/img_pulse_1.png"
                    alt="pulseone_one"
                    className="h-[22px] w-[10%] object-cover md:w-full"
                  />
                  <Img
                    src="images/img_apex_1.png"
                    alt="apexone_one"
                    className="h-[27px] w-[8%] object-cover md:w-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[132px] w-full bg-gradient2" />
              </div>
            </div>
            <Img
              src="images/img_half_torus_1.png"
              alt="halftorusone"
              className="absolute bottom-[22.37px] right-[0.31px] m-auto h-[318px] w-[21%] object-cover"
            />
          </div>
          <div className="relative h-[1495px] self-stretch md:h-auto">
            <div className="flex w-full flex-col items-center justify-end bg-gradient1 p-[49px] md:p-5">
              <div className="mx-auto mb-[57px] mt-[63px] flex w-full max-w-[1101px] flex-col items-center gap-10 self-stretch">
                <div className="flex w-[49%] flex-col items-center gap-5 md:w-full">
                  <Button
                    color="gray_900_19"
                    size="xs"
                    variant="outline"
                    shape="round"
                    className="min-w-[165px] font-medium tracking-[-0.33px]"
                  >
                    Boost your productivity
                  </Button>
                  <div className="flex flex-col gap-5 self-stretch">
                    <Heading
                      size="7xl"
                      as="h2"
                      className="bg-gradient3 bg-clip-text text-center leading-[60px] tracking-[-3.24px] !text-transparent"
                    >
                      A more effective way to track progress
                    </Heading>
                    <Text size="3xl" as="p" className="text-center leading-[31px] tracking-[-0.79px] !text-gray-900_01">
                      Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just
                      minutes with the set of free components for Framer.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-10 self-stretch">
                  <Img src="images/img_product_image.png" alt="productimage" className="h-[683px] object-cover" />
                  <div className="flex gap-[19px] md:flex-col">
                    <div className="relative h-[225px] flex-1 md:w-full md:flex-none md:self-stretch">
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex w-full gap-[299px] md:flex-row sm:relative sm:flex-col">
                        <div className="flex w-full flex-col items-start sm:w-full">
                          <Img src="images/img_icons_black_900_24x24.svg" alt="image" className="h-[24px] w-[24px]" />
                          <Heading as="h3" className="mt-[11px] tracking-[-0.56px] !text-black-900">
                            Integration ecosystem
                          </Heading>
                          <div className="mt-[7px] flex flex-col items-start gap-2.5 self-stretch">
                            <Text as="p" className="leading-[23px] tracking-[-0.16px]">
                              <>
                                Track your progress and motivate
                                <br />
                                your efforts everyday.
                              </>
                            </Text>
                            <div className="flex gap-1 rounded-[10px]">
                              <a href="#">
                                <Text as="p" className="tracking-[-0.16px]">
                                  Learn more
                                </Text>
                              </a>
                              <Img
                                src="images/img_icons_black_900.svg"
                                alt="learn_more_one"
                                className="h-[20px] w-[20px]"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-[9px] sm:w-full">
                          <Img src="images/img_icons_24x24.svg" alt="icons_one" className="h-[24px] w-[24px]" />
                          <Heading as="h4" className="tracking-[-0.56px] !text-black-900">
                            Secure data encryption
                          </Heading>
                          <div className="flex flex-col items-start gap-2.5 self-stretch">
                            <Text as="p" className="leading-[23px] tracking-[-0.16px]">
                              <>
                                Ensure your data’s safety with top-
                                <br />
                                tier encryption.
                              </>
                            </Text>
                            <div className="flex gap-1 rounded-[10px]">
                              <a href="#">
                                <Text as="p" className="tracking-[-0.16px]">
                                  Learn more
                                </Text>
                              </a>
                              <Img
                                src="images/img_icons_black_900.svg"
                                alt="icons_three"
                                className="h-[20px] w-[20px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[32%] flex-col items-start justify-center py-10 sm:py-5">
                        <Img src="images/img_icons_1.svg" alt="icons_five" className="h-[24px] w-[24px]" />
                        <Heading as="h5" className="mt-[11px] tracking-[-0.56px] !text-black-900">
                          Goal setting and tracking
                        </Heading>
                        <div className="mt-[7px] flex flex-col items-start gap-2.5 self-stretch">
                          <Text as="p" className="leading-[23px] tracking-[-0.16px]">
                            <>
                              Set and track goals with
                              <br />
                              manageable task breakdowns.
                            </>
                          </Text>
                          <div className="flex gap-1 rounded-[10px]">
                            <a href="#">
                              <Text as="p" className="tracking-[-0.16px]">
                                Learn more
                              </Text>
                            </a>
                            <Img src="images/img_icons_black_900.svg" alt="icons_seven" className="h-[20px] w-[20px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[24%] flex-col items-start justify-center gap-[9px] py-10 md:w-full sm:py-5">
                      <Img src="images/img_icons_2.svg" alt="icons_nine" className="h-[24px] w-[24px]" />
                      <Heading as="h6" className="tracking-[-0.56px] !text-black-900">
                        Customizable notifications
                      </Heading>
                      <div className="flex flex-col items-start gap-2.5 self-stretch">
                        <Text as="p" className="leading-[23px] tracking-[-0.16px]">
                          <>
                            Get alerts on tasks and deadlines
                            <br />
                            that matter most.
                          </>
                        </Text>
                        <div className="flex gap-1 rounded-[10px]">
                          <a href="#">
                            <Text as="p" className="tracking-[-0.16px]">
                              Learn more
                            </Text>
                          </a>
                          <Img src="images/img_icons_black_900.svg" alt="icons_eleven" className="h-[20px] w-[20px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_torus_1.png"
              alt="torusone_one"
              className="absolute bottom-[29%] left-[0.00px] m-auto h-[248px] w-[14%] object-cover"
            />
            <Img
              src="images/img_pyramid_1.png"
              alt="pyramidone_one"
              className="absolute right-[0.00px] top-[35%] m-auto h-[262px] w-[15%] object-cover"
            />
          </div>
          <div className="flex justify-center self-stretch px-14 py-[92px] md:p-5">
            <div className="mx-auto mb-1 flex w-full max-w-[992px] flex-col items-center gap-[60px] sm:gap-[30px]">
              <div className="flex w-[54%] flex-col items-center gap-5 md:w-full">
                <Text
                  size="s"
                  as="p"
                  className="rounded-[10px] border border-solid border-gray-900_19 py-[5px] pl-[13px] pr-[30px] tracking-[-0.33px] sm:pr-5"
                >
                  Everything you need
                </Text>
                <div className="flex flex-col gap-5 self-stretch">
                  <Heading
                    size="7xl"
                    as="h2"
                    className="bg-gradient3 bg-clip-text text-center leading-[60px] tracking-[-3.24px] !text-transparent"
                  >
                    Streamlined for easy management
                  </Heading>
                  <Text size="3xl" as="p" className="text-center leading-[31px] tracking-[-0.79px] !text-gray-900_01">
                    Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get
                    reminders, and see your progress simply and quickly.
                  </Text>
                </div>
              </div>
              <div className="flex gap-5 self-stretch md:flex-col">
                <div className="flex w-full flex-col items-center rounded-[20px] border border-solid border-gray-900_14 p-10 shadow-md sm:p-5">
                  <Img src="images/img_cube_helix_1.png" alt="image" className="h-[329px] w-[329px] object-cover" />
                  <div className="flex flex-col items-center gap-2.5 self-stretch px-[15px] pt-[15px]">
                    <Heading
                      size="2xl"
                      as="h3"
                      className="bg-gradient3 bg-clip-text text-center tracking-[-1.04px] !text-transparent"
                    >
                      Integration ecosystem
                    </Heading>
                    <Text
                      as="p"
                      className="w-[98%] text-center leading-[23px] tracking-[-0.16px] !text-gray-900_01 md:w-full"
                    >
                      <>
                        Enhance your productivity by connecting <br />
                        with your favorite tools, keeping all your
                        <br /> essentials in one place.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center rounded-[20px] border border-solid border-gray-900_14 p-10 shadow-md sm:p-5">
                  <Img
                    src="images/img_cube_helix_1_329x329.png"
                    alt="cubehelixone"
                    className="h-[329px] w-[329px] object-cover"
                  />
                  <div className="flex flex-col items-center gap-2.5 self-stretch px-[15px] pt-[15px]">
                    <Heading
                      size="2xl"
                      as="h4"
                      className="bg-gradient3 bg-clip-text text-center tracking-[-1.04px] !text-transparent"
                    >
                      Goal setting and tracking
                    </Heading>
                    <Text
                      as="p"
                      className="w-[98%] text-center leading-[23px] tracking-[-0.16px] !text-gray-900_01 md:w-full"
                    >
                      Define and track your goals, breaking down objectives into achievable tasks to keep your targets
                      in sight.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[75px] flex w-full max-w-[1103px] flex-col items-center gap-10 md:p-5">
            <div className="flex w-[49%] flex-col items-center gap-5 md:w-full">
              <Button
                color="gray_900_19"
                size="xs"
                variant="outline"
                shape="round"
                className="min-w-[165px] font-medium tracking-[-0.33px]"
              >
                Boost your productivity
              </Button>
              <div className="flex flex-col gap-5 self-stretch">
                <Heading
                  size="7xl"
                  as="h2"
                  className="bg-gradient3 bg-clip-text text-center leading-[60px] tracking-[-3.24px] !text-transparent"
                >
                  A more effective way to track progress
                </Heading>
                <Text size="3xl" as="p" className="text-center leading-[31px] tracking-[-0.79px] !text-gray-900_01">
                  Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes
                  with the set of free components for Framer.
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-[25px] self-stretch md:flex-col">
              <div className="flex flex-1 gap-[25px] self-end md:flex-col md:self-stretch">
                <div className="mb-2.5 flex w-full flex-col items-start justify-center gap-[30px] rounded-[24px] border border-solid border-blue_gray-50 bg-white-A700_01 p-[39px] shadow-sm md:mb-0 sm:p-5">
                  <Heading as="h3" className="tracking-[-0.56px] !text-blue_gray-500">
                    Free
                  </Heading>
                  <div className="flex flex-wrap items-center gap-1">
                    <Heading size="7xl" as="h4" className="tracking-[-3.24px] !text-black-900">
                      $0
                    </Heading>
                    <Heading as="h5" className="mb-[11px] self-end tracking-[-0.56px] !text-blue_gray-500">
                      /monthly
                    </Heading>
                  </div>
                  <Button color="black_900" shape="round" className="w-full font-medium tracking-[-0.32px] sm:px-5">
                    Get started for free
                  </Button>
                  <div className="mb-1 flex flex-col items-start gap-5">
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="image" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end">
                        Up to 5 project members
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="image_one" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end">
                        Unlimited tasks and projects
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="2gb_storage_one" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end">
                        2GB storage
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="integrations" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end">
                        Integrations
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_3.svg" alt="basic_support" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end">
                        Basic support
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-[30px] rounded-[24px] bg-black-900 p-10 shadow-sm sm:p-5">
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    <Heading as="h6" className="tracking-[-0.56px] !text-white-A700_99">
                      Pro
                    </Heading>
                    <Button
                      color="white_A700_33"
                      size="xs"
                      variant="outline"
                      shape="round"
                      className="min-w-[106px] bg-gradient5 bg-clip-text font-medium tracking-[-0.33px] text-transparent"
                    >
                      Most Popular
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-1">
                    <Heading size="7xl" as="h1" className="tracking-[-3.24px] !text-white-A700_01">
                      $9
                    </Heading>
                    <Heading as="h6" className="mb-[11px] self-end tracking-[-0.56px] !text-gray-500">
                      /monthly
                    </Heading>
                  </div>
                  <Button color="white_A700_01" shape="round" className="w-full font-medium tracking-[-0.32px] sm:px-5">
                    Sign up now
                  </Button>
                  <div className="mb-[3px] flex flex-col items-start gap-5">
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_white_a700_01.svg" alt="icons_one" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end !text-white-A700_01">
                        Up to 50 project members
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_white_a700_01.svg" alt="icons_three" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end !text-white-A700_01">
                        Unlimited tasks and projects
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_white_a700_01.svg" alt="icons_five" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end !text-white-A700_01">
                        50GB storage
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_white_a700_01.svg" alt="icons_seven" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end !text-white-A700_01">
                        Integrations
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_white_a700_01.svg" alt="icons_nine" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end !text-white-A700_01">
                        Priority support
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img src="images/img_icons_white_a700_01.svg" alt="icons_eleven" className="h-[24px] w-[24px]" />
                      <Text size="md" as="p" className="self-end !text-white-A700_01">
                        Advanced support
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Img
                        src="images/img_icons_white_a700_01.svg"
                        alt="icons_thirteen"
                        className="h-[24px] w-[24px]"
                      />
                      <Text size="md" as="p" className="self-end !text-white-A700_01">
                        Export support
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[33%] flex-col items-start justify-center gap-[30px] rounded-[24px] border border-solid border-blue_gray-50 bg-white-A700_01 p-[39px] shadow-sm md:w-full sm:p-5">
                <Heading as="h6" className="tracking-[-0.56px] !text-blue_gray-500">
                  Business
                </Heading>
                <div className="flex flex-wrap items-center gap-1">
                  <Heading size="7xl" as="h1" className="tracking-[-3.24px] !text-black-900">
                    $19
                  </Heading>
                  <Heading as="h6" className="mb-[11px] self-end tracking-[-0.56px] !text-blue_gray-500">
                    /monthly
                  </Heading>
                </div>
                <Button color="black_900" shape="round" className="w-full font-medium tracking-[-0.32px] sm:px-5">
                  Sign up now
                </Button>
                <div className="mb-1 flex flex-col items-start gap-5">
                  <div className="flex items-center gap-4">
                    <Img src="images/img_icons_3.svg" alt="icons_thirteen" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p" className="self-end">
                      Up to 5 project members
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_icons_3.svg" alt="icons_fifteen" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p" className="self-end">
                      Unlimited tasks and projects
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_icons_3.svg" alt="icons_seventeen" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p" className="self-end">
                      200GB storage
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_icons_3.svg" alt="icons_nineteen" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p" className="self-end">
                      Integrations
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_icons_3.svg" alt="icons_twentyone" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p" className="self-end">
                      Dedicated account manager
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_icons_3.svg" alt="icons" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p">
                      Custom fields
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_icons_3.svg" alt="icons" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p" className="self-end">
                      Advanced analytics
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_icons_3.svg" alt="icons" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p" className="self-end">
                      Export capabilities
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_icons_3.svg" alt="icons" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p">
                      API access
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_icons_3.svg" alt="icons_thirtyone" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p" className="self-end">
                      Advanced security features
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[79px] self-stretch py-[59px] md:py-5">
            <div className="mb-8 flex flex-col items-center">
              <Button
                color="gray_900_19"
                size="xs"
                variant="outline"
                shape="round"
                className="min-w-[101px] font-medium tracking-[-0.33px]"
              >
                Testimonials
              </Button>
              <div className="mt-[19px] flex px-11 md:px-5">
                <Heading
                  size="7xl"
                  as="h2"
                  className="bg-gradient3 bg-clip-text text-center tracking-[-3.24px] !text-transparent"
                >
                  What our users say
                </Heading>
              </div>
              <div className="relative mt-[-2px] h-[786px] self-stretch md:h-auto">
                <div className="grid w-full max-w-[1016px] grid-cols-[repeat(auto-fill,_minmax(245px_,_1fr))] justify-center gap-5 md:p-5">
                  <DesktopTestimonial className="flex w-full flex-col gap-[19px] rounded-[20px] border border-solid border-gray-200 bg-white-A700_01 p-10 shadow-xs sm:p-5" />
                  <DesktopTestimonial
                    asaseasoned="I was amazed at how quickly we were able to integrate this app into our workflow."
                    alexrivera="Casey Jordan"
                    jamietechguruze="@caseyj"
                    className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-gray-200 bg-white-A700_01 p-10 shadow-xs sm:p-5"
                  />
                  <DesktopTestimonial
                    asaseasoned="Adopting this app for our team has streamlined our project management and improved communication across the board. "
                    alexrivera="Jordan Patels"
                    jamietechguruze="@jpatelsdesign"
                    className="flex w-full flex-col gap-[19px] rounded-[20px] border border-solid border-gray-200 bg-white-A700_01 p-10 shadow-xs sm:p-5"
                  />
                  <DesktopTestimonial
                    asaseasoned="Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks."
                    alexrivera="Taylor Kim"
                    jamietechguruze="@taylorkimm"
                    className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-gray-200 bg-white-A700_01 p-10 shadow-xs sm:p-5"
                  />
                  <DesktopTestimonial
                    asaseasoned="Our team’s productivity has skyrocketed since we started using this tool. "
                    alexrivera="Josh Smith"
                    jamietechguruze="@jjsmith"
                    className="flex w-full flex-col gap-[19px] rounded-[20px] border border-solid border-gray-200 bg-white-A700_01 p-10 shadow-xs sm:p-5"
                  />
                  <DesktopTestimonial
                    asaseasoned="With this app, we can easily assign tasks, track progress, and manage documents all in one place."
                    alexrivera="Sam Dawson"
                    jamietechguruze="@dawsontechtips"
                    className="flex w-full flex-col gap-[19px] rounded-[20px] border border-solid border-gray-200 bg-white-A700_01 p-10 shadow-xs sm:p-5"
                  />
                  <DesktopTestimonial
                    asaseasoned="This app has completely transformed how I manage my projects and deadlines."
                    alexrivera="Morgan Lee"
                    jamietechguruze="@morganleewhiz"
                    className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-gray-200 bg-white-A700_01 p-10 shadow-xs sm:p-5"
                  />
                  <DesktopTestimonial
                    asaseasoned="Its user-friendly interface and robust features support our diverse needs."
                    alexrivera="Casey Harper"
                    jamietechguruze="@casey09"
                    className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-gray-200 bg-white-A700_01 p-10 shadow-xs sm:p-5"
                  />
                  <DesktopTestimonial
                    asaseasoned="The customizability and integration capabilities of this app are top-notch."
                    alexrivera="Riley Smith"
                    jamietechguruze="@rileysmith1"
                    className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-gray-200 bg-white-A700_01 p-10 shadow-xs sm:p-5"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[786px] w-full bg-gradient4" />
              </div>
            </div>
          </div>
          <div className="self-stretch bg-white-A700_01">
            <div className="relative h-[472px] bg-gradient1 md:h-auto">
              <div className="flex w-[45%] flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-[9px] self-stretch px-[21px] sm:px-5">
                  <Heading
                    size="7xl"
                    as="h2"
                    className="bg-gradient3 bg-clip-text text-center tracking-[-3.24px] !text-transparent"
                  >
                    Sign up for free today
                  </Heading>
                  <Text
                    as="p"
                    className="w-[90%] text-center leading-[23px] tracking-[-0.16px] !text-gray-900_01 md:w-full"
                  >
                    Celebrate the joy of accomplishment with an app designed to track your progress and motivate your
                    efforts.
                  </Text>
                </div>
                <div className="flex items-center gap-[17px]">
                  <Button color="black_900" shape="round" className="min-w-[115px] font-medium tracking-[-0.32px]">
                    Get for free
                  </Button>
                  <div className="flex gap-1 rounded-[10px] py-[9px]">
                    <a href="#">
                      <Text as="p" className="!font-medium tracking-[-0.32px]">
                        Learn more
                      </Text>
                    </a>
                    <Img src="images/img_icons_black_900.svg" alt="icons" className="h-[20px] w-[20px]" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-between gap-5 md:relative md:flex-col">
                <Img
                  src="images/img_emojistar_1.png"
                  alt="image"
                  className="h-[357px] w-[29%] object-cover md:w-full"
                />
                <Img
                  src="images/img_helix2_1.png"
                  alt="helix2one_one"
                  className="mt-[113px] h-[359px] w-[30%] object-cover md:w-full"
                />
              </div>
            </div>
          </div>
          <footer className="self-stretch bg-white-A700_01 pb-1.5">
            <DesktopFooterl className="flex items-center justify-between gap-5 bg-black-900 p-2 md:flex-col" />
          </footer>
        </div>
      </div>
    </>
  );
}
