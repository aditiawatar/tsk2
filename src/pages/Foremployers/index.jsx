import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img, Slider } from "../../components";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function ForemployersPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Aditi's Application7</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700 pb-[1235px] md:pb-5">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-end self-stretch bg-gray-100 pb-2.5">
            <header className="flex items-center justify-center self-stretch p-[34px] sm:p-5">
              <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-5 md:flex-col">
                <div className="flex items-center gap-9 md:flex-col">
                  <div className="flex flex-wrap items-center gap-1 rounded-tr-[5px] bg-deep_purple-600 pr-1.5">
                    <Heading
                      size="3xl"
                      as="h2"
                      className="rounded-[5px] border border-solid border-deep_purple-600 pl-[7px] !font-outfit !text-[35.5px] tracking-[-0.71px] !text-white-A700_01"
                    >
                      <span className="text-deep_purple-600">r</span>
                      <span className="tracking-[2.84px] text-deep_purple-600">e</span>
                      <span className="font-actor font-normal text-white-A700_01">work</span>
                    </Heading>
                    <Text
                      size="xs"
                      as="p"
                      className="mb-1 self-end !font-gilroyregular !text-[11.43px] !text-white-A700_01"
                    >
                      ai
                    </Text>
                  </div>
                  <ul className="flex items-center gap-8 md:flex-col">
                    <li>
                      <a href="#" className="cursor-pointer self-start hover:font-semibold hover:text-deep_purple-600">
                        <Text as="p" className="text-center !text-blue_gray-400">
                          Talent Finder
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer self-start hover:font-semibold hover:text-deep_purple-600">
                        <Text as="p" className="text-center !text-blue_gray-400">
                          For Recruiters
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex flex-col items-center">
                          <Heading size="s" as="h6" className="text-center !font-poppins">
                            For Employers
                          </Heading>
                          <Img src="images/img_vector_451.png" alt="vector451_one" className="h-px object-cover" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer self-start hover:font-semibold hover:text-deep_purple-600">
                        <Text as="p" className="text-center !text-blue_gray-400">
                          About Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer hover:font-semibold hover:text-deep_purple-600">
                        <Text as="p" className="text-center !text-blue_gray-400">
                          Company
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-[17px]">
                  <Button
                    size="xl"
                    shape="round"
                    className="min-w-[129px] border-2 border-solid border-deep_purple-600 font-poppins font-medium sm:px-5"
                  >
                    Log In
                  </Button>
                  <Button
                    size="xl"
                    shape="round"
                    className="min-w-[152px] font-poppins font-medium !text-white-A700_01 sm:px-5"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </header>
            <div className="relative h-[596px] w-[92%] md:h-auto">
              <div className="flex w-full items-start justify-center md:flex-col">
                <div className="relative z-[1] mt-[70px] flex w-[48%] flex-col gap-1 md:w-full md:p-5">
                  <Heading size="8xl" as="h1" className="!font-montserrat">
                    <span className="font-garnettsemibold text-[54px] font-semibold text-deep_purple-600">
                      Power Up Your&nbsp;
                    </span>
                    <span className="font-garnettsemibold text-[54px] font-semibold text-deep_purple-600">
                      <>
                        Hiring
                        <br />
                      </>
                    </span>
                    <span className="font-garnettregular text-5xl font-normal text-deep_purple-600">with Rework .</span>
                  </Heading>
                  <Text size="md" as="p" className="leading-[22px] !text-gray-900">
                    Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent
                    connections. Rework is your strategic partner in redefining how you hire{" "}
                  </Text>
                </div>
                <div className="relative ml-[-109px] h-[596px] flex-1 md:ml-0 md:w-full md:flex-none md:self-stretch md:p-5">
                  <div className="absolute bottom-0 right-[0.00px] top-0 my-auto flex h-max w-[79%] items-center justify-center sm:relative sm:flex-col">
                    <div className="relative z-[2] mb-7 flex w-[28%] items-start justify-center gap-[15px] self-end rounded-[5px] bg-deep_purple-600 p-3.5 sm:w-full">
                      <Button color="deep_purple_50" size="3xl" className="w-[64px] rounded-[5px]">
                        <Img src="images/img_search.svg" />
                      </Button>
                      <Heading
                        size="xl"
                        as="h2"
                        className="mt-1.5 w-[63%] !font-garnettsemibold !text-[24.94px] !font-semibold !text-deep_purple-50"
                      >
                        <span className="font-spacegrotesk font-bold text-deep_purple-50">
                          <>
                            +360
                            <br />
                          </>
                        </span>
                        <span className="font-garnettlight text-[12.31px] font-light text-deep_purple-50">
                          Happy Companies
                        </span>
                      </Heading>
                    </div>
                    <Img
                      src="images/img_ellipse_6033.png"
                      alt="image"
                      className="relative ml-[-201px] h-[596px] flex-1 object-cover sm:ml-0 sm:w-full sm:self-stretch"
                    />
                  </div>
                  <Img
                    src="images/img_mask_group.png"
                    alt="image_one"
                    className="absolute left-0 right-0 top-[0.00px] m-auto h-[555px] w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-[20%] left-[0.00px] m-auto flex w-[21%] flex-col items-start">
                <Button size="4xl" className="w-full rounded-[20px] font-poppins !text-gray-100 sm:px-5">
                  Book A Demo
                </Button>
                <div className="mt-[27px] flex items-center gap-2.5">
                  <Img src="images/img_checkmark.svg" alt="checkmark_one" className="h-[20px] w-[20px]" />
                  <Text size="md" as="p" className="mb-[5px] self-end !text-deep_purple-600">
                    No credit Required
                  </Text>
                </div>
                <div className="flex items-center gap-2.5 py-[7px]">
                  <Img src="images/img_checkmark.svg" alt="checkmark_three" className="h-[20px] w-[20px]" />
                  <Text size="md" as="p" className="self-start !text-deep_purple-600">
                    Streamlined Recruitment Process
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-deep_purple-50 py-[50px] shadow-lg md:py-5">
            <div className="flex flex-col items-center gap-7 overflow-auto">
              <Text size="2xl" as="p" className="text-center !text-deep_purple-200">
                Hire for 1000+ Brands Including
              </Text>
              <div className="mx-auto flex w-full max-w-[1714px] items-center justify-between gap-5 md:flex-col md:p-5">
                <Img src="images/img_microsoft_1.svg" alt="microsoftone" className="h-[26px] w-[8%] md:w-full" />
                <Img src="images/img_google_2015_1.svg" alt="google2015one" className="h-[31px] w-[6%] md:w-full" />
                <Img
                  src="images/img_kisspng_amazon.png"
                  alt="kisspngamazon"
                  className="h-[38px] w-[6%] object-cover md:w-full"
                />
                <Img
                  src="images/img_kisspng_nokia_n.png"
                  alt="kisspngnokian"
                  className="h-[26px] w-[8%] object-cover md:w-full"
                />
                <Img src="images/img_vector.svg" alt="vector_one" className="h-[42px] w-[8%] md:w-full" />
                <Img src="images/img_microsoft_1.svg" alt="microsofttwo" className="h-[26px] w-[8%] md:w-full" />
                <Img src="images/img_google_2015_1.svg" alt="google2015two" className="h-[31px] w-[6%] md:w-full" />
                <Img
                  src="images/img_kisspng_amazon.png"
                  alt="kisspngamazon"
                  className="h-[38px] w-[6%] object-cover md:w-full"
                />
                <Img
                  src="images/img_kisspng_nokia_n.png"
                  alt="kisspngnokian"
                  className="h-[26px] w-[8%] object-cover md:w-full"
                />
              </div>
            </div>
          </div>
          <Heading size="5xl" as="h2" className="mt-[99px] text-center !font-garnettsemibold capitalize">
            <span className="text-deep_purple-600">Our Amazing Benefits&nbsp;</span>
            <span className="font-garnettregular font-normal text-deep_purple-600">Helpful For Your Hiring</span>
          </Heading>
          <div className="mx-auto mt-[85px] flex w-full max-w-[1200px] md:p-5">
            <div className="grid w-full grid-cols-[repeat(auto-fill,_minmax(343px_,_1fr))] gap-[84px]">
              <div className="flex w-full flex-col gap-[18px]">
                <Img src="images/img_eos_icons_ai.svg" alt="60cost_reduce" className="h-[50px] w-[50px]" />
                <Heading size="xl" as="h2" className="!font-librefranklin">
                  <span className="font-garnettsemibold font-semibold text-deep_purple-600">
                    <>
                      60%
                      <br />
                    </>
                  </span>
                  <span className="font-garnettregular font-normal text-deep_purple-600">Cost Reduce</span>
                </Heading>
                <Text as="p" className="leading-7 !text-gray-900_04">
                  Zero overhead in the hiring process - promise! Source top quality candidates for some of the best
                  companies
                </Text>
              </div>
              <div className="flex w-full flex-col gap-[17px]">
                <Img
                  src="images/img_eos_icons_ai_deep_purple_600.svg"
                  alt="eosiconsai_one"
                  className="h-[50px] w-[50px]"
                />
                <Heading size="xl" as="h3" className="!font-garnettsemibold !font-semibold">
                  <span className="text-deep_purple-600">
                    <>
                      50% Faster
                      <br />
                    </>
                  </span>
                  <span className="font-garnettregular font-normal text-deep_purple-600">Recruitment by TAT</span>
                </Heading>
                <Text as="p" className="leading-7 !text-gray-900_04">
                  Zero overhead in the hiring process - promise! Source top quality candidates for some of the best
                  companies
                </Text>
              </div>
              <div className="flex w-full flex-col gap-[18px]">
                <Img
                  src="images/img_mdi_user_card_details_outline.svg"
                  alt="mdiusercard_one"
                  className="h-[50px] w-[50px]"
                />
                <Heading size="xl" as="h4" className="!font-librefranklin">
                  <span className="font-garnettsemibold font-semibold text-deep_purple-600">
                    <>
                      Highly Contextualized <br />
                    </>
                  </span>
                  <span className="font-garnettregular font-normal text-deep_purple-600">Interview</span>
                </Heading>
                <Text as="p" className="leading-7 !text-gray-900_04">
                  Al models generate highly contextualized interviews for the candidates based on your Company profile,
                  Job description and Candidate&#39;s CV.
                </Text>
              </div>
              <div className="flex w-full flex-col gap-[18px]">
                <Img src="images/img_healthicons_i_s.svg" alt="healthiconsis" className="h-[48px] w-[48px]" />
                <Heading size="xl" as="h5" className="!font-librefranklin">
                  <span className="font-garnettsemibold font-semibold text-deep_purple-600">
                    <>
                      Automated <br />
                    </>
                  </span>
                  <span className="font-garnettregular font-normal text-deep_purple-600">Scheduling</span>
                </Heading>
                <Text as="p" className="leading-7 !text-gray-900_04">
                  Email & WhatsApp based communication for interview scheduling with automated reminders.
                </Text>
              </div>
              <div className="flex w-full flex-col gap-[18px]">
                <Img
                  src="images/img_eos_icons_ai_deep_purple_200.svg"
                  alt="eosiconsai_one"
                  className="h-[50px] w-[50px]"
                />
                <Heading size="xl" as="h6" className="!font-librefranklin">
                  <span className="font-garnettsemibold font-semibold text-deep_purple-600">
                    <>
                      AI generated Interviews
                      <br />
                    </>
                  </span>
                  <span className="font-garnettregular font-normal text-deep_purple-600">On what matters</span>
                </Heading>
                <Text as="p" className="leading-7 !text-gray-900_04">
                  0 manual interventions, completely seamless experience for the candidates.
                </Text>
              </div>
              <div className="flex w-full flex-col gap-[18px]">
                <Img
                  src="images/img_fluent_tasks_app_20_regular.svg"
                  alt="fluenttasks_one"
                  className="h-[50px] w-[50px]"
                />
                <Heading size="xl" as="h4" className="!font-librefranklin">
                  <span className="font-garnettsemibold font-semibold text-deep_purple-600">
                    <>
                      in-built
                      <br />
                    </>
                  </span>
                  <span className="font-garnettregular font-normal text-deep_purple-600">ATS</span>
                </Heading>
                <Text as="p" className="leading-7 !text-gray-900_04">
                  To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.
                </Text>
              </div>
            </div>
          </div>
          <div className="relative mt-[155px] h-[784px] self-stretch md:h-auto">
            <Img src="images/img_eye.svg" alt="eye_one" className="ml-[505px] mt-[105px] h-[25px] w-[25px] md:ml-0" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center justify-center gap-[99px] bg-gray-100 px-14 py-[95px] md:gap-[74px] md:p-5 sm:gap-[49px]">
              <Heading size="4xl" as="h2" className="text-center !font-garnettsemibold capitalize">
                <span className="text-deep_purple-600">How Our System&nbsp;</span>
                <span className="font-garnettregular font-normal text-deep_purple-600">Operates</span>
              </Heading>
              <div className="flex w-full max-w-[1198px] gap-px rounded-lg md:flex-col">
                <div className="flex w-full flex-col items-center gap-[38px] bg-white-A700_01">
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    <Heading size="lg" as="h3" className="mb-5 self-end !font-poppins !text-black-900">
                      Upload Documents
                    </Heading>
                    <Img src="images/img_twitter.svg" alt="upload" className="h-[84px] w-[84px] rounded-bl-[10px]" />
                  </div>
                  <div className="mb-[59px] flex w-[85%] pb-[19px] md:w-full md:p-5">
                    <Text size="xl" as="p" className="!text-gray-700">
                      Shortlist the most qualified candidate and upload their details for the top companies
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-[61px] bg-deep_purple-50 pl-[29px] pt-[29px] sm:gap-[30px] sm:pl-5 sm:pt-5">
                  <a href="#">
                    <Heading size="lg" as="h4" className="!font-garnettsemibold !text-gray-900">
                      Sign Up
                    </Heading>
                  </a>
                  <div className="relative h-[160px] self-stretch">
                    <Text
                      size="xl"
                      as="p"
                      className="absolute left-[0.00px] top-[0.00px] m-auto w-[92%] !text-gray-700"
                    >
                      Follow the link below to sign up and get access of the current job postings
                    </Text>
                    <div className="absolute bottom-[0.00px] right-[0.33px] m-auto w-[23%] rounded-tl-[10px] bg-deep_purple-600 p-[7px] shadow-7xl">
                      <Img src="images/img_bag.svg" alt="bag_one" className="my-1 h-[60px] w-full md:h-auto" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[38px] bg-white-A700_01 pb-[30px] pl-[30px] sm:pb-5 sm:pl-5">
                  <div className="flex items-center justify-between gap-5">
                    <Heading size="lg" as="h5" className="!font-poppins !text-black-900">
                      Get Rewards
                    </Heading>
                    <div className="w-[23%] rounded-bl-[10px] bg-deep_purple-600 p-[11px] shadow-8xl">
                      <Img src="images/img_ticket.svg" alt="ticket_one" className="h-[61px] w-[61px] rounded-[1px]" />
                    </div>
                  </div>
                  <div className="mb-[30px] pb-[46px] md:pb-5">
                    <Text size="xl" as="p" className="!text-gray-700">
                      As soon as the candidate gets selected you get your benefits
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                color="gray_100"
                size="2xl"
                shape="round"
                className="min-w-[164px] border-2 border-solid border-deep_purple-600 font-poppins font-medium sm:px-5"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[74px] self-stretch bg-white-A700 p-14 md:gap-[55px] md:p-5 sm:gap-[37px]">
            <Heading size="5xl" as="h2" className="mt-[9px] !font-garnettsemibold capitalize">
              <span className="text-deep_purple-600">Choose Your Simple,&nbsp;</span>
              <span className="font-garnettregular font-normal text-deep_purple-600">Transparent Pricing</span>
            </Heading>
            <div className="mx-auto flex w-full max-w-[1197px] gap-[49px] md:flex-col">
              <div className="flex w-full flex-col items-center justify-center rounded-[10px] bg-gray-100 p-[30px] shadow-3xl sm:p-5">
                <div className="mt-[3px] flex flex-wrap items-center gap-1.5">
                  <Text size="4xl" as="p" className="text-center !font-spacegrotesk !text-deep_purple-600">
                    1
                  </Text>
                  <Text size="4xl" as="p" className="text-center !font-garnettmedium !text-deep_purple-600">
                    Month
                  </Text>
                </div>
                <div className="mt-[15px] flex flex-wrap items-center">
                  <Text size="7xl" as="p" className="text-center !font-spacegrotesk !text-gray-900_06">
                    ₹
                  </Text>
                  <Text size="7xl" as="p" className="text-center !font-garnettmedium !text-gray-900_06">
                    199.00
                  </Text>
                  <Text
                    as="p"
                    className="mb-[5px] self-end text-center !font-garnettmedium !font-medium !text-gray-900_06"
                  >
                    /month
                  </Text>
                </div>
                <div className="mt-[46px] flex flex-col gap-5 self-stretch">
                  <Text
                    size="xl"
                    as="p"
                    className="text-center !font-garnettmedium !font-medium leading-7 !text-deep_purple-600"
                  >
                    Suitable for companies with 5-10 openings
                  </Text>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2.5 pr-[19px]">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="image"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-gray-700">
                        10 interview-ready candidates
                      </Text>
                    </div>
                    <div className="flex gap-2.5 self-start">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="image_one"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-gray-700">
                        Unlimited job postings
                      </Text>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Img src="images/img_checkmark_green_500.svg" alt="image_two" className="h-[24px] w-[24px]" />
                      <Text as="p" className="w-[92%] !text-gray-700">
                        Receive pre-vetted profiles within 48 hours
                      </Text>
                    </div>
                    <div className="flex gap-2.5 pr-[27px] sm:pr-5">
                      <Img
                        src="images/img_icons_red_300.svg"
                        alt="image_three"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-gray-700">
                        Dedicated account manager
                      </Text>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Img src="images/img_icons_red_300.svg" alt="image_four" className="h-[24px] w-[24px]" />
                      <Text as="p" className="w-[92%] !text-gray-700">
                        Assistance with interview scheduling
                      </Text>
                    </div>
                    <div className="flex gap-2.5 self-start">
                      <Img
                        src="images/img_icons_red_300.svg"
                        alt="custom_reports"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-gray-700">
                        Custom reports
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  size="2xl"
                  shape="round"
                  className="mt-[62px] w-full font-poppins !text-white-A700_01 !shadow-4xl sm:px-5"
                >
                  Get Started
                </Button>
              </div>
              <div className="flex w-full flex-col items-start rounded-[10px] bg-deep_purple-600 pb-[30px] pl-[30px] shadow-3xl sm:pb-5 sm:pl-5">
                <Button
                  color="orange_300"
                  size="sm"
                  className="relative z-[3] min-w-[131px] self-end rounded-bl-[5px] font-garnettmedium font-medium"
                >
                  Most Popular
                </Button>
                <div className="relative ml-[98px] mt-[-2px] flex flex-wrap items-center gap-1.5 md:ml-0">
                  <Text size="4xl" as="p" className="text-center !font-spacegrotesk !text-gray-100">
                    3
                  </Text>
                  <Text size="4xl" as="p" className="text-center !font-garnettmedium !text-gray-100">
                    Months
                  </Text>
                </div>
                <div className="ml-10 mt-[15px] flex flex-wrap items-center md:ml-0">
                  <Text size="7xl" as="p" className="text-center !font-spacegrotesk !text-gray-100">
                    ₹
                  </Text>
                  <Text size="7xl" as="p" className="text-center !font-garnettmedium !text-gray-100">
                    149.00
                  </Text>
                  <Text
                    as="p"
                    className="mb-[5px] self-end text-center !font-garnettmedium !font-medium !text-gray-100"
                  >
                    /month
                  </Text>
                </div>
                <div className="ml-[5px] mt-[46px] flex w-[89%] flex-col gap-5 md:ml-0 md:w-full">
                  <Text
                    size="xl"
                    as="p"
                    className="text-center !font-garnettmedium !font-medium leading-7 !text-gray-100"
                  >
                    Suitable for companies with 5-10 openings
                  </Text>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2.5 pr-[19px]">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_one"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-deep_purple-50">
                        10 interview-ready candidates
                      </Text>
                    </div>
                    <div className="flex gap-2.5 self-start">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_three"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-deep_purple-50">
                        Unlimited job postings
                      </Text>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_five"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p" className="w-[92%] !text-deep_purple-50">
                        Receive pre-vetted profiles within 48 hours
                      </Text>
                    </div>
                    <div className="flex gap-2.5 pr-[27px] sm:pr-5">
                      <Img
                        src="images/img_icons_red_300.svg"
                        alt="icons_one"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-deep_purple-50">
                        Dedicated account manager
                      </Text>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Img src="images/img_icons_red_300.svg" alt="icons_three" className="h-[24px] w-[24px]" />
                      <Text as="p" className="w-[92%] !text-deep_purple-50">
                        Assistance with interview scheduling
                      </Text>
                    </div>
                    <div className="flex gap-2.5 self-start">
                      <Img
                        src="images/img_icons_red_300.svg"
                        alt="icons_five"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-deep_purple-50">
                        Custom reports
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  color="gray_100"
                  size="2xl"
                  shape="round"
                  className="ml-[5px] mt-[62px] min-w-[296px] font-poppins font-medium !shadow-4xl md:ml-0 sm:px-5"
                >
                  Get Started
                </Button>
              </div>
              <div className="flex w-full flex-col items-center justify-center rounded-[10px] bg-gray-100 p-[30px] shadow-3xl sm:p-5">
                <div className="mt-[3px] flex flex-wrap items-center gap-1.5">
                  <Text size="4xl" as="p" className="text-center !font-spacegrotesk !text-deep_purple-600">
                    6
                  </Text>
                  <Text size="4xl" as="p" className="text-center !font-garnettmedium !text-deep_purple-600">
                    Months
                  </Text>
                </div>
                <div className="mt-[15px] flex flex-wrap items-center">
                  <Text size="7xl" as="p" className="text-center !font-spacegrotesk !text-gray-900_06">
                    ₹
                  </Text>
                  <Text size="7xl" as="p" className="text-center !font-garnettmedium !text-gray-900_06">
                    169.00
                  </Text>
                  <Text
                    as="p"
                    className="mb-[5px] self-end text-center !font-garnettmedium !font-medium !text-gray-900_06"
                  >
                    /month
                  </Text>
                </div>
                <div className="mt-[46px] flex flex-col gap-5 self-stretch">
                  <Text
                    size="xl"
                    as="p"
                    className="text-center !font-garnettmedium !font-medium leading-7 !text-deep_purple-600"
                  >
                    Suitable for companies with 5-10 openings
                  </Text>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2.5 pr-[19px]">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_one"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-gray-700">
                        10 interview-ready candidates
                      </Text>
                    </div>
                    <div className="flex gap-2.5 self-start">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_three"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-gray-700">
                        Unlimited job postings
                      </Text>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_five"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p" className="w-[92%] !text-gray-700">
                        Receive pre-vetted profiles within 48 hours
                      </Text>
                    </div>
                    <div className="flex gap-2.5 pr-[27px] sm:pr-5">
                      <Img
                        src="images/img_icons_red_300.svg"
                        alt="icons_one"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-gray-700">
                        Dedicated account manager
                      </Text>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Img src="images/img_icons_red_300.svg" alt="icons_three" className="h-[24px] w-[24px]" />
                      <Text as="p" className="w-[92%] !text-gray-700">
                        Assistance with interview scheduling
                      </Text>
                    </div>
                    <div className="flex gap-2.5 self-start">
                      <Img
                        src="images/img_icons_red_300.svg"
                        alt="icons_five"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Text as="p" className="self-end !text-gray-700">
                        Custom reports
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  size="2xl"
                  shape="round"
                  className="mt-[62px] w-full font-poppins !text-white-A700_01 !shadow-4xl sm:px-5"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <Button
              color="gray_100"
              size="2xl"
              shape="round"
              className="min-w-[180px] border-2 border-solid border-deep_purple-600 font-poppins sm:px-5"
            >
              Book a Demo
            </Button>
          </div>
          <div className="flex items-start justify-center gap-10 self-stretch bg-gray-100 px-14 py-[81px] md:flex-col md:p-5">
            <div className="flex flex-1 flex-col items-start md:self-stretch">
              <Heading size="5xl" as="h2" className="!font-garnettsemibold">
                <span className="text-deep_purple-600">Discover the Future of&nbsp;</span>
                <span className="font-garnettregular font-normal text-deep_purple-600">Talent Assessment!</span>
              </Heading>
              <Text size="xl" as="p" className="mt-[30px] !text-gray-900_06">
                <>
                  Facing challenges in traditional hiring?
                  <br />
                  Uncover the costs, pitfalls, and the game-changing role of Generative AI in recruitment.
                </>
              </Text>
              <Text size="xl" as="p" className="mt-[30px] !text-gray-900_06">
                <>
                  🔍 Inside this Whitepaper:
                  <br />
                  Manual vs. Machine-based hiring: Costs & Challenges.
                  <br />
                  The truth about &quot;Interview as a Service.&quot;
                  <br />
                  Generative AI: The simple explanation. Optimize Your Hiring Process Today!
                </>
              </Text>
              <Button size="4xl" className="mt-[94px] min-w-[591px] rounded-[20px] font-poppins font-medium sm:px-5">
                Download Now for Smarter Recruitment
              </Button>
            </div>
            <Img
              src="images/img_rectangle_39394.png"
              alt="image_two"
              className="mb-[29px] h-[563px] w-[32%] rounded-[12px] object-cover md:w-full"
            />
          </div>
          <div className="flex flex-col items-start self-stretch bg-white-A700 py-[66px] pl-[66px] pr-14 md:p-5">
            <Heading size="5xl" as="h2" className="ml-[53px] !font-garnettsemibold md:ml-0">
              <span className="text-deep_purple-600">Customer</span>
              <span className="text-deep_purple-600">&nbsp;</span>
              <span className="font-garnettregular font-normal text-gray-900_05">Testimonials</span>
            </Heading>
            <Text size="xl" as="p" className="ml-[53px] mt-[5px] !text-gray-900_05 md:ml-0">
              What others has say About Us
            </Text>
            <div className="mx-auto mb-[146px] mt-[83px] flex w-full max-w-[1198px] gap-6 self-center md:flex-col">
              <div className="flex w-full flex-col gap-[30px]">
                <div className="flex flex-col items-center gap-7 rounded-[16px] bg-deep_purple-50 p-3.5 shadow-5xl">
                  <Text size="xl" as="p" className="mt-[5px] w-[97%] leading-[27px] md:w-full">
                    “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, and the recruiters have been able to find the best employers leads. Highly
                    recommend! “
                  </Text>
                  <div className="flex items-start gap-[19px] self-stretch">
                    <Img
                      src="images/img_ellipse_2.png"
                      alt="circleimage"
                      className="mt-0.5 h-[50px] w-[50px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-center">
                      <Text size="5xl" as="p" className="!font-garnettregular !text-deep_purple-600">
                        Theresa Webb
                      </Text>
                      <Text as="p" className="!font-medium !text-gray-700_02">
                        HR Manager, Amazon
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-7 rounded-[16px] bg-deep_purple-50 p-[15px] shadow-5xl">
                  <Text size="xl" as="p" className="mt-1 w-[97%] leading-[27px] md:w-full">
                    “ Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, ““ Rework has been a great way to make the hiring process easier and faster.
                    Highly recommend! “
                  </Text>
                  <div className="flex items-start gap-[19px] self-stretch">
                    <Img
                      src="images/img_ellipse_1_50x50.png"
                      alt="circleimage_one"
                      className="mt-0.5 h-[50px] w-[50px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start">
                      <Text size="5xl" as="p" className="!font-garnettregular !text-deep_purple-600">
                        Ronald Richards
                      </Text>
                      <Text as="p" className="!font-medium !text-gray-700_02">
                        HR Manager, Google
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[30px]">
                <div className="flex flex-col items-center justify-center gap-[30px] rounded-[16px] bg-deep_purple-50 p-4 shadow-5xl">
                  <Text size="xl" as="p" className="mt-[3px] w-[98%] leading-[27px] md:w-full">
                    “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, and the recruiters have been able to find the best employers leads. Highly
                    recommend! ““ Rework has been a great way to make the hiring process easier and faster. Highly
                    recommend! “
                  </Text>
                  <div className="flex items-start gap-[19px] self-stretch">
                    <Img
                      src="images/img_ellipse_1_8.png"
                      alt="circleimage"
                      className="h-[50px] w-[50px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start">
                      <Text size="5xl" as="p" className="!font-garnettregular !text-deep_purple-600">
                        Savannah Nguyen
                      </Text>
                      <Text as="p" className="!font-medium !text-gray-700_02">
                        HR Manager, Microsoft
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-7 rounded-[16px] bg-deep_purple-50 p-[15px] shadow-5xl">
                  <Text size="xl" as="p" className="mt-1 w-[97%] leading-[27px] md:w-full">
                    “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, and the recruiters have been able to find the best employers leads. Highly
                    recommend! “
                  </Text>
                  <div className="flex items-start gap-[19px] self-stretch">
                    <Img
                      src="images/img_ellipse_1_50x50.png"
                      alt="circleimage_one"
                      className="mt-0.5 h-[50px] w-[50px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start">
                      <Text size="5xl" as="p" className="!font-garnettregular !text-deep_purple-600">
                        Ronald Richards
                      </Text>
                      <Text as="p" className="!font-medium !text-gray-700_02">
                        HR Manager, Google
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[30px]">
                <div className="flex flex-col items-center gap-7 rounded-[16px] bg-deep_purple-50 p-3.5 shadow-5xl">
                  <Text size="xl" as="p" className="mt-[5px] w-[97%] leading-[27px] md:w-full">
                    “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, and the recruiters have been able to find the best employers leads. Highly
                    recommend! “
                  </Text>
                  <div className="flex items-start gap-[19px] self-stretch">
                    <Img
                      src="images/img_ellipse_2.png"
                      alt="circleimage"
                      className="mt-0.5 h-[50px] w-[50px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-center">
                      <Text size="5xl" as="p" className="!font-garnettregular !text-deep_purple-600">
                        Theresa Webb
                      </Text>
                      <Text as="p" className="!font-medium !text-gray-700_02">
                        HR Manager, Amazon
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-7 rounded-[16px] bg-deep_purple-50 p-[15px] shadow-5xl">
                  <Text size="xl" as="p" className="mt-1 w-[97%] leading-[27px] md:w-full">
                    “ Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                    save money and time, ““ Rework has been a great way to make the hiring process easier and faster.
                    Highly recommend! “
                  </Text>
                  <div className="flex items-start gap-[19px] self-stretch">
                    <Img
                      src="images/img_ellipse_1_50x50.png"
                      alt="circleimage_one"
                      className="mt-0.5 h-[50px] w-[50px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start">
                      <Text size="5xl" as="p" className="!font-garnettregular !text-deep_purple-600">
                        Ronald Richards
                      </Text>
                      <Text as="p" className="!font-medium !text-gray-700_02">
                        HR Manager, Google
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[26px] self-stretch bg-gray-100 px-14 py-[95px] md:flex-col md:p-5">
            <Text size="6xl" as="p" className="w-[30%] !font-sfprodisplay !text-deep_purple-600 md:w-full">
              <span className="font-garnettmedium text-deep_purple-600">How Rework AI has been a good&nbsp;</span>
              <span className="font-garnettregular font-normal text-deep_purple-600">
                Hiring platform for Companies
              </span>
            </Text>
            <div className="mb-2 flex w-[63%] items-center justify-center gap-[18px] self-end md:w-full md:flex-col">
              <div className="flex flex-1 flex-col items-center gap-2.5 md:self-stretch">
                <Heading size="6xl" as="h2" className="!font-spacegrotesk">
                  80%
                </Heading>
                <Text size="xl" as="p" className="text-center !text-gray-800">
                  Reduction in your recruitment TAT with the access to a wider talent pool on the platform
                </Text>
              </div>
              <div className="h-full w-[2px] bg-deep_purple-600 md:h-[2px] md:w-full" />
              <div className="flex flex-1 flex-col items-center gap-2.5 self-start md:self-stretch">
                <Heading size="6xl" as="h3" className="!font-spacegrotesk">
                  50%
                </Heading>
                <Text size="xl" as="p" className="text-center !text-gray-800">
                  Streamline your budgeting and save money while finding the top candidates
                </Text>
              </div>
              <div className="h-full w-[2px] bg-deep_purple-600 md:h-[2px] md:w-full" />
              <div className="flex flex-1 flex-col items-center gap-2.5 self-start md:self-stretch">
                <Heading size="6xl" as="h4" className="!font-spacegrotesk">
                  10k
                </Heading>
                <Text size="xl" as="p" className="text-center !text-gray-800">
                  Certified sourcing partners’ expertise
                </Text>
              </div>
            </div>
          </div>
          <div className="self-stretch">
            <div className="flex flex-col items-center justify-center gap-12 bg-white-A700 px-14 py-[75px] md:p-5">
              <Heading size="5xl" as="h2" className="!font-garnettsemibold capitalize">
                <span className="text-deep_purple-600">Success&nbsp;</span>
                <span className="font-garnettregular font-normal text-deep_purple-600">Stories</span>
              </Heading>
              <div className="mx-auto w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
                  renderDotsItem={(props) => {
                    return props?.isActive ? (
                      <div className="h-[10px] w-[10px] bg-black-900" />
                    ) : (
                      <div className="h-[10px] w-[10px] bg-white-A700_01" />
                    );
                  }}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="flex max-w-[1192px] gap-5"
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="mx-2.5 flex flex-col gap-2.5 rounded-[16px] bg-gray-50_01 shadow-6xl">
                        <Img
                          src="images/img_unsplash_mpdlxiig0p0.png"
                          alt="unsplash_one"
                          className="h-[245px] rounded-tl-[16px] rounded-tr-[16px] object-cover"
                        />
                        <div className="flex flex-col gap-[30px] p-5">
                          <Text size="4xl" as="p" className="!font-garnettmedium leading-[27px] !text-gray-900_07">
                            Rework has been a great way to make the hiring process easier and faster.
                          </Text>
                          <Text size="xl" as="p" className="leading-[27px] !text-gray-700_02">
                            “We&#39;ve been able to save money and time, and the recruiters have been able to find the
                            best employers leads. Highly recommend! “
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-[74px] bg-gray-100 px-14 py-[109px] md:gap-[55px] md:p-5 sm:gap-[37px]">
              <div className="flex w-[62%] flex-col items-center gap-[19px] md:w-full">
                <Heading size="5xl" as="h3" className="text-center !font-garnettsemibold">
                  <span className="text-deep_purple-600">Frequently asked&nbsp;</span>
                  <span className="font-garnettregular font-normal text-deep_purple-600">Questions</span>
                </Heading>
                <Text as="p" className="text-center leading-[22px] !text-gray-900">
                  We have Compiled the most commonly asked question about our Platform for your information and to
                  enhance your overall experience.
                </Text>
              </div>
              <Accordion preExpanded={[0]} className="mb-12 flex w-[64%] flex-col gap-4">
                {[...Array(8)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelisth${i}`}>
                    <div className="flex flex-1 flex-col gap-[22px] rounded-[10px] border-2 border-solid border-deep_purple-600 p-4">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="mt-1 flex flex-wrap items-center justify-between gap-5 sm:flex-col">
                                  <Text size="xl" as="p" className="!font-medium !text-gray-900">
                                    How can I Get started with Rework AI?
                                  </Text>
                                  {props?.expanded ? (
                                    <Img
                                      src="images/img_typcn_plus.svg"
                                      alt="typcnplus_one"
                                      className="h-[24px] w-[24px] self-start sm:w-full"
                                    />
                                  ) : (
                                    <Img
                                      src="images/img_typcn_plus.svg"
                                      alt="typcnplus_three"
                                      className="mr-[11px] h-[24px] w-[24px] sm:mr-0 sm:w-full"
                                    />
                                  )}
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div>
                          <Text as="p" className="!font-light leading-[22px] !text-gray-900">
                            Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio.
                            Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.
                          </Text>
                        </div>
                      </AccordionItemPanel>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[60px] self-stretch bg-white-A700 py-[113px] pl-[113px] pr-14 md:p-5 sm:gap-[30px]">
            <div className="ml-3 flex w-[93%] flex-col gap-5 md:ml-0 md:w-full">
              <Heading size="5xl" as="h2" className="!font-garnettsemibold">
                Optimize Your Hiring Strategy with Rework&#39;s Exclusive Hiring Audit
              </Heading>
              <Text size="xl" as="p" className="!text-gray-900_06">
                Discover the strengths and opportunities in your current hiring process. Our comprehensive Hiring Audit
                evaluates your strategy, identifies areas for improvement, and tailors a roadmap for success. Elevate
                your recruitment game with data-driven insights – because the right talent deserves the right approach.
              </Text>
            </div>
            <Button
              size="4xl"
              className="mb-3 ml-3 min-w-[476px] rounded-[20px] font-poppins font-medium md:ml-0 sm:px-5"
            >
              Request Your Free Hiring Audit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
