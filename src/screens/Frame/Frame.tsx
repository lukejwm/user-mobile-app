import {
  ArrowLeftIcon,
  ChevronDownIcon,
  GiftIcon,
  HeartIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  SearchIcon,
  StarIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";

// Data for business listings
const businesses = [
  { id: 1, name: "Business name", address: "Address...." },
  { id: 2, name: "Business name", address: "Address...." },
  { id: 3, name: "Business name", address: "Address...." },
  { id: 4, name: "Business name", address: "Address...." },
  { id: 5, name: "Business name", address: "Address...." },
  { id: 6, name: "Business name", address: "Address...." },
  { id: 7, name: "Business name", address: "Address...." },
  { id: 8, name: "Business name", address: "Address...." },
  { id: 9, name: "Business name", address: "Address...." },
  { id: 10, name: "Business name", address: "Address...." },
];

// Data for reviews/activities
const activities = [
  { id: 1, title: "review 1" },
  { id: 2, title: "Earn Instant Rewards" },
  { id: 3, title: "Share the Love" },
];

// Data for recent photos
const recentPhotos = Array(8).fill(null);

// Navigation items
const navItems = [
  { icon: <SearchIcon className="w-6 h-6" />, label: "Explore" },
  { icon: <GiftIcon className="w-6 h-6" />, label: "Rewards" },
  { icon: <PlusCircleIcon className="w-6 h-6" />, label: "Home" },
  { icon: <MessageSquareIcon className="w-6 h-6" />, label: "Inbox" },
  {
    icon: (
      <div className="relative w-6 h-6">
        <img
          className="absolute w-5 h-5 top-0.5 left-0.5"
          alt="Profile"
          src="/union.svg"
        />
      </div>
    ),
    label: "Profile",
  },
];

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-md mx-auto relative">
        {/* Welcome Screen */}
        <section className="w-full h-[852px] relative bg-[#ffde59]">
          <div className="absolute w-[247px] h-44 top-[130px] left-[73px]">
            <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-12 left-[27px]">
              <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[60px] whitespace-nowrap">
                Social Duck
              </div>
            </div>

            <div className="absolute top-0 left-[81px] font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
              Welcome to
            </div>

            <div className="absolute top-[116px] left-0 font-['Raleway',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[60px] whitespace-nowrap">
              Review sites are dead!
            </div>
          </div>

          <div className="absolute top-[379px] left-[140px] w-[115px] h-[94px]">
            <div className="relative w-[113px] h-[94px]">
              <div className="absolute w-[113px] top-[55px] left-0 font-['Raleway',Helvetica] font-normal text-black text-xl tracking-[0] leading-[60px] whitespace-nowrap">
                Social Duck
              </div>

              <img
                className="absolute w-[93px] h-[71px] top-0 left-2.5"
                alt="Rectangle"
                src="/rectangle-15.png"
              />
            </div>
          </div>

          <Button
            variant="outline"
            className="flex w-[250px] items-center justify-center gap-2 px-4 py-2 absolute top-[574px] left-[73px] bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
              Log In
            </span>
          </Button>

          <Button
            variant="outline"
            className="flex w-[250px] items-center justify-center gap-2 px-4 py-2 absolute top-[643px] left-[72px] bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
              Sign up
            </span>
          </Button>

          <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[692px] left-[90px]">
            <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
              Continue without signing up
            </div>
          </div>
        </section>

        {/* Login Screen */}
        <section className="w-full h-[852px] absolute top-0 left-[482px] bg-[#ffde59] hidden">
          <div className="absolute w-[115px] h-[94px] top-[124px] left-[139px]">
            <div className="relative w-[113px] h-[94px]">
              <div className="absolute w-[113px] top-[55px] left-0 font-['Raleway',Helvetica] font-normal text-black text-xl tracking-[0] leading-[60px] whitespace-nowrap">
                Social Duck
              </div>

              <img
                className="absolute w-[93px] h-[71px] top-0 left-2.5"
                alt="Rectangle"
                src="/rectangle-15-1.png"
              />
            </div>
          </div>

          <div className="absolute top-[255px] left-[41px] font-['Raleway',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[60px] whitespace-nowrap">
            Where your shout-outs make a difference!
          </div>

          <Card className="absolute w-[358px] h-[267px] top-[348px] left-[18px] shadow-[0px_4px_4px_#00000040]">
            <CardContent className="relative w-[361px] h-[270px] -top-0.5 -left-0.5 bg-[#f6f0e0] rounded-lg border-[3px] border-solid border-[#1a1a1a] p-0">
              <div className="flex w-[338px] items-center gap-3 p-3 absolute top-[21px] left-[9px] bg-white rounded-lg overflow-hidden border-[3px] border-solid border-[#1a1a1a]">
                <img
                  className="relative w-8 h-8"
                  alt="Tech media postcard"
                  src="/tech---media-postcard.svg"
                />
                <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  Email
                </div>
              </div>

              <div className="flex w-[338px] items-center gap-3 p-3 absolute top-[89px] left-[9px] bg-white rounded-lg overflow-hidden border-[3px] border-solid border-[#1a1a1a]">
                <img
                  className="relative w-8 h-8"
                  alt="Actions UI lock alt"
                  src="/actions---ui-lock-alt.svg"
                />
                <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  Password
                </div>
              </div>

              <div className="flex w-[136px] items-center justify-center gap-2.5 p-2.5 absolute top-[214px] left-[210px]">
                <div className="relative w-fit mt-[-1.00px] ml-[-0.50px] mr-[-0.50px] font-['Raleway',Helvetica] font-normal text-[#0a0dad] text-[15px] text-center tracking-[0] leading-7 whitespace-nowrap">
                  Forgot password
                </div>
              </div>

              <Button
                variant="outline"
                className="flex w-[250px] items-center justify-center gap-2 px-4 py-2 absolute top-[170px] left-[52px] bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
              >
                <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  Log In
                </span>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Register Screen */}
        <section className="w-full h-[852px] absolute top-[956px] left-[482px] bg-[#ffde59] hidden">
          <div className="absolute w-[115px] h-[94px] top-[124px] left-[139px]">
            <div className="relative w-[113px] h-[94px]">
              <div className="absolute w-[113px] top-[55px] left-0 font-['Raleway',Helvetica] font-normal text-black text-xl tracking-[0] leading-[60px] whitespace-nowrap">
                Social Duck
              </div>

              <img
                className="absolute w-[93px] h-[71px] top-0 left-2.5"
                alt="Rectangle"
                src="/rectangle-15-2.png"
              />
            </div>
          </div>

          <div className="absolute h-10 top-[296px] left-6 font-['Raleway',Helvetica] font-normal text-black text-base tracking-[0] leading-5">
            Register
            <br />
            Create your account
          </div>

          <div className="absolute top-[225px] left-[86px] font-['Raleway',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[60px] whitespace-nowrap">
            Welcome back to Social Duck
          </div>

          <Card className="absolute w-[358px] h-[291px] top-[348px] left-[18px]">
            <CardContent className="relative w-[361px] h-[294px] -top-0.5 -left-0.5 bg-[#f6f0e0] rounded-lg border-[3px] border-solid border-[#1a1a1a] shadow-[0px_4px_4px_#00000040] p-0">
              <div className="flex w-[338px] items-center gap-3 p-3 absolute top-4 left-2 bg-white rounded-lg overflow-hidden border-[3px] border-solid border-[#1a1a1a]">
                <img
                  className="relative w-8 h-8"
                  alt="Tech media postcard"
                  src="/tech---media-postcard.svg"
                />
                <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  Email
                </div>
              </div>

              <div className="flex w-[338px] items-center gap-3 p-3 absolute top-[84px] left-2 bg-white rounded-lg overflow-hidden border-[3px] border-solid border-[#1a1a1a]">
                <img
                  className="relative w-8 h-8"
                  alt="Actions UI lock alt"
                  src="/actions---ui-lock-alt.svg"
                />
                <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  Password
                </div>
              </div>

              <div className="flex w-[338px] items-center gap-3 p-3 absolute top-[152px] left-2 bg-white rounded-lg overflow-hidden border-[3px] border-solid border-[#1a1a1a]">
                <img
                  className="relative w-8 h-8"
                  alt="Actions UI lock alt"
                  src="/actions---ui-lock-alt.svg"
                />
                <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  Repeat Password
                </div>
              </div>

              <Button
                variant="outline"
                className="flex w-[250px] h-10 items-center justify-center gap-2 px-4 py-3 absolute top-[228px] left-[52px] bg-white rounded-lg border-2 border-solid border-[#1a1a1a]"
              >
                <span className="mt-[-8.00px] mb-[-4.00px] text-[22px] tracking-[0] leading-7 relative w-fit font-['Raleway',Helvetica] font-normal text-black text-center whitespace-nowrap">
                  Create Account
                </span>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Home Screen */}
        <section className="w-full h-[852px] absolute top-0 left-[964px] bg-[#ffde59] hidden">
          <div className="absolute top-[211px] left-[66px] font-['Raleway',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[60px] whitespace-nowrap">
            Hi [User], ready to shout out?
          </div>

          <div className="top-[106px] left-[143px] absolute w-[115px] h-[94px]">
            <div className="relative w-[113px] h-[94px]">
              <div className="absolute w-[113px] top-[55px] left-0 font-['Raleway',Helvetica] font-normal text-black text-xl tracking-[0] leading-[60px] whitespace-nowrap">
                Social Duck
              </div>

              <img
                className="absolute w-[93px] h-[71px] top-0 left-2.5"
                alt="Rectangle"
                src="/rectangle-15-3.png"
              />
            </div>
          </div>

          <Button
            variant="outline"
            className="flex w-[250px] items-center justify-center gap-2 px-4 py-2 absolute top-[301px] left-[72px] bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
              Shout Out
            </span>
          </Button>

          <div className="absolute w-[134px] h-[35px] top-[370px] left-[41px] font-['Raleway',Helvetica] font-normal text-black text-xl tracking-[0] leading-[60px] whitespace-nowrap">
            Latest Activite
          </div>

          <Card className="absolute w-[311px] h-[262px] top-[418px] left-[41px] bg-[#f6f0e0] rounded-lg border-[3px] border-solid border-black shadow-[0px_4px_4px_#00000040]">
            <CardContent className="p-0">
              <ScrollArea className="relative w-[275px] h-[238px] top-[9px] left-[15px] overflow-hidden overflow-x-scroll">
                <div className="relative w-[873px] h-[238px]">
                  {activities.map((activity, index) => (
                    <div
                      key={activity.id}
                      className="absolute w-[277px] h-[238px] top-0 left-[${index * 299}px]"
                    >
                      <div className="relative w-[275px] h-[238px] rounded-sm">
                        <div className="absolute w-[275px] h-[238px] top-0 left-0 bg-white rounded-sm overflow-hidden border-2 border-solid border-[#1a1a1a]">
                          <img
                            className="absolute w-6 h-6 top-[107px] left-[126px]"
                            alt="Photo image"
                            src="/photo---image-image.svg"
                          />
                        </div>

                        <div className="top-[145px] left-[114px] absolute h-[18px] font-['Raleway',Helvetica] font-normal text-black text-xs text-center tracking-[0.24px] leading-[18px] whitespace-nowrap">
                          {activity.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Bottom Navigation */}
          <div className="absolute w-full h-20 bottom-0 left-0 bg-[#f6f0e0] shadow-[4px_0px_4px_#00000040]">
            <div className="flex justify-between px-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[50px] h-[50px] items-center justify-center p-2.5 mt-[15px]"
                >
                  <div className="relative w-6 h-6 mt-[-6.00px]">
                    {item.icon}
                  </div>
                  <div className="relative w-[53px] mb-[-5.00px] ml-[-11.50px] mr-[-11.50px] font-['Raleway',Helvetica] font-normal text-black text-xs text-center tracking-[0.24px] leading-[18px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Detail Screen */}
        <section className="w-full h-[852px] absolute top-0 left-[1928px] bg-[#ffde59] overflow-hidden hidden">
          <div className="absolute w-[393px] h-[262px] top-0 left-0">
            <div className="w-[393px] h-[262px] top-0 absolute left-0">
              <div className="relative h-[262px] bg-gray-1 rounded-sm overflow-hidden">
                <img
                  className="top-[119px] left-[185px] absolute w-6 h-6"
                  alt="Photo image"
                  src="/photo---image-image.svg"
                />
              </div>
            </div>

            <div className="inline-flex items-start gap-2.5 px-3 py-1 absolute top-[225px] left-[329px] bg-black rounded-[20px]">
              <div className="relative w-fit mt-[-2.00px] font-patrick-hand-tiny font-[number:var(--patrick-hand-tiny-font-weight)] text-white text-[length:var(--patrick-hand-tiny-font-size)] text-center tracking-[var(--patrick-hand-tiny-letter-spacing)] leading-[var(--patrick-hand-tiny-line-height)] whitespace-nowrap [font-style:var(--patrick-hand-tiny-font-style)]">
                1 /12
              </div>
            </div>

            <XIcon className="absolute w-6 h-6 top-6 left-[26px] text-white" />
            <HeartIcon className="absolute w-6 h-6 top-6 left-[343px] text-white" />
          </div>

          <div className="inline-flex flex-col items-start gap-3 absolute top-[281px] left-[29px]">
            <div className="relative w-[335px] mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[33.6px]">
              Business name
            </div>

            <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <StarIcon className="relative w-6 h-6" />
                <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-base text-center tracking-[0.32px] leading-[normal] whitespace-nowrap">
                  4.99
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="Badge"
                  src="/badge.svg"
                />
                <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-base text-center leading-4">
                  <span className="tracking-[0.05px]">Achievements</span>
                  <span className="[font-family:'Patrick_Hand',Helvetica] tracking-[0.05px]">
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>

            <div className="relative w-[335px] font-['Raleway',Helvetica] font-normal text-black text-base tracking-[0.32px] leading-[normal]">
              Business Address....
            </div>
          </div>

          <Button
            variant="outline"
            className="inline-flex top-[406px] left-[127px] items-center justify-center gap-2 px-4 py-2 absolute bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
              Are you here
            </span>
          </Button>

          <Separator className="absolute w-[393px] h-0.5 top-[462px] left-0" />

          <ScrollArea className="absolute w-full h-[310px] top-[462px] left-0">
            {businesses.slice(0, 3).map((business, index) => (
              <div
                key={business.id}
                className={`inline-flex flex-col items-start gap-4 absolute top-[${index * 88 + 476}px] left-[26px]`}
              >
                <div className="flex w-[347px] items-center gap-[18px] relative flex-[0_0_auto]">
                  <div className="relative w-20 h-20 bg-white rounded-[20px] overflow-hidden border-2 border-solid border-[#1a1a1a]">
                    <div className="relative w-[172px] h-[172px] top-[-46px] left-[-46px] bg-white border-2 border-solid border-[#1a1a1a] rounded-sm overflow-hidden">
                      <img
                        className="top-[74px] left-[74px] absolute w-6 h-6"
                        alt="Photo image"
                        src="/photo---image-image.svg"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-[243px] items-start relative">
                    <div className="relative w-[243px] h-[66px]">
                      <div className="absolute w-[243px] -top-px left-0 text-[23px] tracking-[0] leading-7 font-['Raleway',Helvetica] font-normal text-black">
                        {business.name}
                      </div>

                      <div className="absolute w-[243px] top-[27px] left-0 font-['Raleway',Helvetica] font-normal text-black text-lg tracking-[0] leading-[19px]">
                        {business.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute w-[107px] h-[21px] top-[83px] left-[117px] font-['Raleway',Helvetica] font-normal text-black text-[13px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
              Business not here
            </div>
          </ScrollArea>

          {/* Bottom Navigation */}
          <div className="absolute w-full h-20 bottom-0 left-0 bg-[#f6f0e0] shadow-[4px_0px_4px_#00000040]">
            <div className="flex justify-between px-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[50px] h-[50px] items-center justify-center p-2.5 mt-[15px]"
                >
                  <div className="relative w-6 h-6 mt-[-6.00px]">
                    {item.icon}
                  </div>
                  <div className="relative w-[53px] mb-[-5.00px] ml-[-11.50px] mr-[-11.50px] font-['Raleway',Helvetica] font-normal text-black text-xs text-center tracking-[0.24px] leading-[18px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business List Screen */}
        <section className="w-full h-[852px] absolute top-0 left-[1446px] bg-[#ffde59] overflow-hidden hidden">
          <div className="absolute w-[393px] h-[99px] top-[54px] left-0 bg-[#f6f0e0] shadow-[0px_4px_4px_#00000040]">
            <div className="absolute h-[60px] top-[18px] left-8 font-['Raleway',Helvetica] font-normal text-black text-sm tracking-[0] leading-5">
              Where did you visit?
              <br />
              Share a shout-out for a place you recently enjoyed.
              <br />
              Select a business below
            </div>
          </div>

          <ArrowLeftIcon className="absolute w-6 h-6 top-6 left-[26px]" />

          <ScrollArea className="absolute w-[347px] h-[528px] top-[184px] left-[23px] overflow-hidden overflow-y-scroll">
            {businesses.map((business, index) => (
              <div
                key={business.id}
                className={`inline-flex flex-col items-start gap-4 absolute top-[${index * 88}px] left-0`}
              >
                <div className="flex w-[347px] items-center gap-[18px] relative flex-[0_0_auto]">
                  <div className="relative w-20 h-20 bg-white rounded-[20px] overflow-hidden border-2 border-solid border-[#1a1a1a]">
                    <div className="relative w-[172px] h-[172px] top-[-46px] left-[-46px] bg-white border-2 border-solid border-[#1a1a1a] rounded-sm overflow-hidden">
                      <img
                        className="top-[74px] left-[74px] absolute w-6 h-6"
                        alt="Photo image"
                        src="/photo---image-image.svg"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-[243px] items-start relative">
                    <div className="relative w-[243px] h-[66px]">
                      <div className="absolute w-[243px] -top-px left-0 text-[23px] tracking-[0] leading-7 font-['Raleway',Helvetica] font-normal text-black">
                        {business.name}
                      </div>

                      <div className="absolute w-[243px] top-[27px] left-0 font-['Raleway',Helvetica] font-normal text-black text-lg tracking-[0] leading-[19px]">
                        {business.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>

          <div className="absolute w-[107px] h-[21px] top-[551px] left-[143px] font-['Raleway',Helvetica] font-normal text-black text-[13px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
            Business not here
          </div>

          <img
            className="absolute w-[15px] h-[15px] top-[528px] left-[180px]"
            alt="Arrow"
            src="/arrow-1.svg"
          />

          {/* Bottom Navigation */}
          <div className="absolute w-full h-20 bottom-0 left-0 bg-[#f6f0e0] shadow-[4px_0px_4px_#00000040]">
            <div className="flex justify-between px-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[50px] h-[50px] items-center justify-center p-2.5 mt-[15px]"
                >
                  <div className="relative w-6 h-6 mt-[-6.00px]">
                    {item.icon}
                  </div>
                  <div className="relative w-[53px] mb-[-5.00px] ml-[-11.50px] mr-[-11.50px] font-['Raleway',Helvetica] font-normal text-black text-xs text-center tracking-[0.24px] leading-[18px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Review Screen */}
        <section className="w-full h-[852px] absolute top-0 left-[2410px] bg-[#ffde59] overflow-hidden hidden">
          <div className="absolute w-[393px] h-[262px] top-0 left-0">
            <div className="w-[393px] h-[262px] top-0 absolute left-0">
              <div className="relative h-[262px] bg-gray-1 rounded-sm overflow-hidden">
                <img
                  className="top-[119px] left-[185px] absolute w-6 h-6"
                  alt="Photo image"
                  src="/photo---image-image.svg"
                />
              </div>
            </div>

            <div className="inline-flex items-start gap-2.5 px-3 py-1 absolute top-[225px] left-[329px] bg-black rounded-[20px]">
              <div className="relative w-fit mt-[-2.00px] font-patrick-hand-tiny font-[number:var(--patrick-hand-tiny-font-weight)] text-white text-[length:var(--patrick-hand-tiny-font-size)] text-center tracking-[var(--patrick-hand-tiny-letter-spacing)] leading-[var(--patrick-hand-tiny-line-height)] whitespace-nowrap [font-style:var(--patrick-hand-tiny-font-style)]">
                1 /12
              </div>
            </div>

            <XIcon className="absolute w-6 h-6 top-6 left-[26px] text-white" />
            <HeartIcon className="absolute w-6 h-6 top-6 left-[343px] text-white" />
          </div>

          <div className="inline-flex flex-col items-start gap-3 absolute top-[281px] left-[29px]">
            <div className="relative w-[335px] mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[33.6px]">
              Business name
            </div>

            <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <StarIcon className="relative w-6 h-6" />
                <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-base text-center tracking-[0.32px] leading-[normal] whitespace-nowrap">
                  4.99
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="Badge"
                  src="/badge.svg"
                />
                <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-base text-center leading-4">
                  <span className="tracking-[0.05px]">Achievements</span>
                  <span className="[font-family:'Patrick_Hand',Helvetica] tracking-[0.05px]">
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>

            <div className="relative w-[335px] font-['Raleway',Helvetica] font-normal text-black text-base tracking-[0.32px] leading-[normal]">
              Business Address....
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-3 absolute top-[392px] left-[29px]">
            <div className="relative w-[335px] mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[33.6px]">
              Enjoyed your visit?
            </div>

            <div className="relative w-[335px] font-['Raleway',Helvetica] font-normal text-black text-base tracking-[0.32px] leading-[normal]">
              Tap "Drop Some Love" to support us with a quick shout-out.
              <br />
              Not quite right? Tap "Give Feedback" and help us get better —
              we're listening.
            </div>
          </div>

          <Button
            variant="outline"
            className="flex w-[249px] items-center justify-center gap-2 px-4 py-2 absolute top-[559px] left-[72px] bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
              Loved it? Drop some love
            </span>
          </Button>

          <Button
            variant="outline"
            className="flex w-[249px] items-center justify-center gap-2 px-4 py-2 absolute top-[635px] left-[72px] bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="mt-[-2.00px] ml-[-6.00px] mr-[-6.00px] text-lg tracking-[0.18px] leading-6 relative w-fit font-['Raleway',Helvetica] font-normal text-black text-center whitespace-nowrap">
              Not quite right? Tell us why
            </span>
          </Button>

          {/* Bottom Navigation */}
          <div className="absolute w-full h-20 bottom-0 left-0 bg-[#f6f0e0] shadow-[4px_0px_4px_#00000040]">
            <div className="flex justify-between px-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[50px] h-[50px] items-center justify-center p-2.5 mt-[15px]"
                >
                  <div className="relative w-6 h-6 mt-[-6.00px]">
                    {item.icon}
                  </div>
                  <div className="relative w-[53px] mb-[-5.00px] ml-[-11.50px] mr-[-11.50px] font-['Raleway',Helvetica] font-normal text-black text-xs text-center tracking-[0.24px] leading-[18px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shout Out Screen */}
        <section className="w-full h-[852px] absolute top-0 left-[2892px] bg-[#ffde59] overflow-hidden hidden">
          <div className="absolute w-[276px] h-[127px] top-[45px] left-[59px]">
            <div className="left-1.5 inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-0">
              <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[60px] whitespace-nowrap">
                Show some love
              </div>
            </div>

            <div className="absolute top-[67px] left-0 font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
              Enjoyed your visit? Drop some love here
            </div>
          </div>

          <ArrowLeftIcon className="absolute w-6 h-6 top-6 left-[26px]" />

          <div className="absolute w-[343px] h-[274px] top-[172px] left-[25px]">
            <div className="w-[343px] h-[228px] top-[46px] absolute left-0">
              <div className="relative h-[228px] bg-white border-2 border-solid border-[#1a1a1a] rounded-sm overflow-hidden">
                <img
                  className="top-[102px] left-40 absolute w-6 h-6"
                  alt="Photo image"
                  src="/photo---image-image.svg"
                />
              </div>
            </div>

            <div className="absolute top-0 left-0 font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
              Upload a picture or video
            </div>
          </div>

          <Select>
            <SelectTrigger className="flex w-[345px] h-[60px] items-center gap-2.5 pl-4 pr-16 py-4 absolute top-[454px] left-6 bg-white rounded-lg border-2 border-solid border-[#1a1a1a] shadow-small">
              <div className="relative flex-1 mt-[-2.00px] font-['Raleway',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                Preset shout outs
              </div>
              <ChevronDownIcon className="absolute w-7 h-7 top-[15px] right-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            className="h-[151px] top-[523px] left-[25px] flex w-[343px] items-start gap-2.5 pt-3 pb-4 px-4 absolute bg-white rounded-lg overflow-hidden border-2 border-solid border-[#1a1a1a]"
            placeholder="Enjoyed your visit? Drop some love here (max 250 characters)"
          />

          <Button
            variant="outline"
            className="inline-flex top-[688px] left-[155px] items-center justify-center gap-2 px-4 py-2 absolute bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
              Submit
            </span>
          </Button>

          {/* Bottom Navigation */}
          <div className="absolute w-full h-20 bottom-0 left-0 bg-[#f6f0e0] shadow-[4px_0px_4px_#00000040]">
            <div className="flex justify-between px-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[50px] h-[50px] items-center justify-center p-2.5 mt-[15px]"
                >
                  <div className="relative w-6 h-6 mt-[-6.00px]">
                    {item.icon}
                  </div>
                  <div className="relative w-[53px] mb-[-5.00px] ml-[-11.50px] mr-[-11.50px] font-['Raleway',Helvetica] font-normal text-black text-xs text-center tracking-[0.24px] leading-[18px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Confirmation Screen */}
        <section className="w-full h-[852px] absolute top-0 left-[3374px] bg-[#ffde59] overflow-hidden hidden">
          <div className="absolute w-72 h-[177px] top-[49px] left-[54px]">
            <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-0 left-0">
              <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[60px] whitespace-nowrap">
                Spread some love
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[70px] left-[5px]">
              <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[60px] whitespace-nowrap">
                Congratulations!!!
              </div>
            </div>

            <div className="absolute w-[258px] top-[137px] left-[15px] font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-5">
              Your Review is now live on socialduck.io
            </div>
          </div>

          <ArrowLeftIcon className="absolute w-6 h-6 top-6 left-[26px]" />

          <Card className="absolute w-[300px] h-[338px] top-[405px] left-[47px] bg-white rounded-md shadow-[0px_4px_4px_#00000040]">
            <CardContent className="p-0">
              <div className="flex w-[271px] top-[106px] left-4 flex-col items-start gap-3 absolute">
                <div className="mr-[-64.00px] relative w-[335px] mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[33.6px]">
                  Business name
                </div>

                <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                    <StarIcon className="relative w-6 h-6" />
                    <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-base text-center tracking-[0.32px] leading-[normal] whitespace-nowrap">
                      4.99
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Badge"
                      src="/badge.svg"
                    />
                    <div className="relative w-fit font-['Raleway',Helvetica] font-normal text-black text-base text-center leading-4">
                      <span className="tracking-[0.05px]">Achievements</span>
                      <span className="[font-family:'Patrick_Hand',Helvetica] tracking-[0.05px]">
                        &nbsp;
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mr-[-64.00px] relative w-[335px] font-['Raleway',Helvetica] font-normal text-black text-base tracking-[0.32px] leading-[normal]">
                  Business Address....
                </div>
              </div>

              <Avatar className="absolute w-12 h-12 top-[35px] left-[126px]">
                <img
                  className="object-cover"
                  alt="Business"
                  src="/image-1.png"
                />
              </Avatar>

              <div className="absolute w-[226px] h-[30px] top-[226px] left-[37px] flex">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <img
                      key={index}
                      className={`absolute w-[30px] h-[30px] top-0 left-[${index * 49}px]`}
                      alt="Star"
                      src="/actions---ui-star-solid.svg"
                    />
                  ))}
              </div>

              <Button
                variant="outline"
                className="inline-flex top-[279px] left-[73px] items-center justify-center gap-2 px-4 py-2 absolute bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
              >
                <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  Share the love
                </span>
              </Button>
            </CardContent>
          </Card>

          <div className="absolute w-[306px] h-[60px] top-[236px] left-[45px] font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-5">
            Share the love by giving us a positive review on google below
          </div>

          <div className="absolute w-[258px] top-[296px] left-[69px] font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-5">
            We make it easy to post your review on google click the link below
            we have already copy what you have written all you need to do is
            paste
          </div>

          {/* Bottom Navigation */}
          <div className="absolute w-full h-20 bottom-0 left-0 bg-[#f6f0e0] shadow-[4px_0px_4px_#00000040]">
            <div className="flex justify-between px-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[50px] h-[50px] items-center justify-center p-2.5 mt-[15px]"
                >
                  <div className="relative w-6 h-6 mt-[-6.00px]">
                    {item.icon}
                  </div>
                  <div className="relative w-[53px] mb-[-5.00px] ml-[-11.50px] mr-[-11.50px] font-['Raleway',Helvetica] font-normal text-black text-xs text-center tracking-[0.24px] leading-[18px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Screen */}
        <section className="w-full h-[852px] absolute top-[956px] left-[2410px] bg-[#ffde59] overflow-hidden hidden">
          <div className="absolute w-[258px] h-[156px] top-[25px] left-[65px]">
            <div className="left-2 inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-0">
              <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[60px] whitespace-nowrap">
                Not quite right?
              </div>
            </div>

            <div className="absolute w-[258px] top-[76px] left-0 font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-5">
              We are gutted to hear something was not quite right!! but give us
              a chance to make it better. We want to hear your feedback below.
            </div>
          </div>

          <Textarea
            className="flex w-[343px] h-[181px] items-start gap-2.5 pt-3 pb-4 px-4 absolute top-[226px] left-[25px] bg-white rounded-lg overflow-hidden border-2 border-solid border-[#1a1a1a]"
            placeholder="Tell us why? (max 250 characters)"
          />

          <div className="absolute w-52 top-[450px] left-3.5 font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-5">
            We would still love a rating
          </div>

          <div className="absolute w-[343px] h-[63px] top-[484px] left-[25px] bg-white rounded-lg border-2 border-solid border-black">
            <div className="relative w-[226px] h-[30px] top-[15px] left-[54px] flex">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <img
                    key={index}
                    className={`absolute w-[30px] h-[30px] top-0 left-[${index * 49}px]`}
                    alt="Star"
                    src="/actions---ui-star-solid.svg"
                  />
                ))}
            </div>
          </div>

          <Button
            variant="outline"
            className="inline-flex top-[688px] left-[149px] items-center justify-center gap-2 px-4 py-2 absolute bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
              Submit
            </span>
          </Button>

          {/* Bottom Navigation */}
          <div className="absolute w-full h-20 bottom-0 left-0 bg-[#f6f0e0] shadow-[4px_0px_4px_#00000040]">
            <div className="flex justify-between px-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[50px] h-[50px] items-center justify-center p-2.5 mt-[15px]"
                >
                  <div className="relative w-6 h-6 mt-[-6.00px]">
                    {item.icon}
                  </div>
                  <div className="relative w-[53px] mb-[-5.00px] ml-[-11.50px] mr-[-11.50px] font-['Raleway',Helvetica] font-normal text-black text-xs text-center tracking-[0.24px] leading-[18px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Confirmation Screen */}
        <section className="w-full h-[852px] absolute top-[2016px] left-[2410px] bg-[#ffde59] overflow-hidden hidden">
          <div className="absolute w-[260px] h-[108px] top-[318px] left-[68px]">
            <div className="relative w-[258px] h-[108px]">
              <div className="left-[58px] inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-0">
                <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[60px] whitespace-nowrap">
                  Thanks!!
                </div>
              </div>

              <div className="absolute w-[258px] top-[68px] left-0 font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-5">
                Thank you for the feed back we will be in touch.
              </div>
            </div>
          </div>

          <img
            className="absolute w-20 h-20 top-[238px] left-40"
            alt="Message"
            src="/objects---things-comment-alt-message.svg"
          />

          <Button
            variant="outline"
            className="inline-flex top-[450px] left-40 items-center justify-center gap-2 px-4 py-2 absolute bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
              Back
            </span>
          </Button>

          {/* Bottom Navigation */}
          <div className="absolute w-full h-20 bottom-0 left-0 bg-[#f6f0e0] shadow-[4px_0px_4px_#00000040]">
            <div className="flex justify-between px-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[50px] h-[50px] items-center justify-center p-2.5 mt-[15px]"
                >
                  <div className="relative w-6 h-6 mt-[-6.00px]">
                    {item.icon}
                  </div>
                  <div className="relative w-[53px] mb-[-5.00px] ml-[-11.50px] mr-[-11.50px] font-['Raleway',Helvetica] font-normal text-black text-xs text-center tracking-[0.24px] leading-[18px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Confirmation Screen */}
        <section className="w-full h-[852px] absolute top-[956px] left-[961px] bg-[#ffde59] hidden">
          <div className="absolute w-[281px] h-48 top-[234px] left-[58px]">
            <div className="absolute w-[281px] h-[108px] top-[84px] left-0">
              <div className="relative w-[279px] h-[108px]">
                <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-0 left-0">
                  <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[60px] whitespace-nowrap">
                    Congratulations!!!
                  </div>
                </div>

                <div className="absolute w-[258px] top-[68px] left-2.5 font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-5">
                  Your Part of the social duck community
                </div>
              </div>
            </div>

            <div className="absolute w-[115px] h-[94px] top-0 left-[82px]">
              <div className="relative w-[113px] h-[94px]">
                <div className="absolute w-[113px] top-[55px] left-0 font-['Raleway',Helvetica] font-normal text-black text-xl tracking-[0] leading-[60px] whitespace-nowrap">
                  Social Duck
                </div>

                <img
                  className="absolute w-[93px] h-[71px] top-0 left-2.5"
                  alt="Rectangle"
                  src="/rectangle-15-4.png"
                />
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="inline-flex top-[450px] left-[132px] items-center justify-center gap-2 px-4 py-2 absolute bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
              Get Started
            </span>
          </Button>
        </section>

        {/* Coming Soon Screen */}
        <section className="w-full h-[852px] absolute top-[956px] left-[1687px] bg-[#ffde59] hidden">
          <div className="absolute w-[260px] h-[168px] top-[365px] left-[68px]">
            <div className="relative w-[258px] h-[168px]">
              <div className="left-3 inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-0">
                <div className="relative w-fit mt-[-1.00px] font-['Raleway',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[60px] whitespace-nowrap">
                  Coming soon!!
                </div>
              </div>

              <div className="absolute w-[258px] top-[68px] left-0 font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-5">
                We're currently working hard behind the scenes to bring you
                something brilliant.
                <br /> This feature isn't quite ready yet, but it will be
                launching very soon.
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="inline-flex top-[586px] left-40 items-center justify-center gap-2 px-4 py-2 absolute bg-white rounded-md border-2 border-solid border-[#1a1a1a]"
          >
            <span className="font-['Raleway',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
              Back
            </span>
          </Button>

          <div className="absolute w-[225px] h-[94px] top-[226px] left-[85px]">
            <div className="absolute w-[115px] h-[94px] top-0 left-14">
              <div className="relative w-[113px] h-[94px]">
                <div className="absolute w-[113px] top-[55px] left-0 font-['Raleway',Helvetica] font-normal text-black text-xl tracking-[0] leading-[60px] whitespace-nowrap">
                  Social Duck
                </div>

                <img
                  className="absolute w-[93px] h-[71px] top-0 left-2.5"
                  alt="Rectangle"
                  src="/rectangle-15-5.png"
                />
              </div>
            </div>

            <img
              className="absolute w-[58px] h-[58px] top-4 left-0"
              alt="Navigation"
              src="/navigation---transportation-traffic-barrier.svg"
            />

            <img
              className="absolute w-[58px] h-[58px] top-[13px] left-[167px]"
              alt="Navigation"
              src="/navigation---transportation-traffic-barrier.svg"
            />
          </div>
        </section>

        {/* Photo Upload Screen */}
        <section className="w-full h-[852px] absolute top-[956px] left-[2892px] bg-[#ffde59] hidden">
          <div className="absolute w-[117px] h-[117px] top-[457px] left-[138px] bg-gray-1 rounded-sm overflow-hidden">
            <img
              className="absolute w-6 h-6 top-[47px] left-[47px]"
              alt="Photo image"
              src="/photo---image-image.svg"
            />
          </div>

          <div className="absolute w-[117px] h-[117px] top-[457px] left-[259px] bg-gray-1 rounded-sm overflow-hidden">
            <img
              className="absolute w-6 h-6 top-[47px] left-[47px]"
              alt="Photo image"
              src="/photo---image-image.svg"
            />
          </div>

          <div className="absolute w-[117px] h-[117px] top-[578px] left-[17px] bg-gray-1 rounded-sm overflow-hidden">
            <img
              className="absolute w-6 h-6 top-[47px] left-[47px]"
              alt="Photo image"
              src="/photo---image-image.svg"
            />
          </div>

          <div className="absolute w-[117px] h-[117px] top-[578px] left-[138px] bg-gray-1 rounded-sm overflow-hidden">
            <img
              className="absolute w-6 h-6 top-[47px] left-[47px]"
              alt="Photo image"
              src="/photo---image-image.svg"
            />
          </div>

          <div className="absolute w-[117px] h-[117px] top-[578px] left-[259px] bg-gray-1 rounded-sm overflow-hidden">
            <img
              className="absolute w-6 h-6 top-[47px] left-[47px]"
              alt="Photo image"
              src="/photo---image-image.svg"
            />
          </div>

          <div className="absolute w-[117px] h-[117px] top-[699px] left-[17px] bg-gray-1 rounded-sm overflow-hidden">
            <img
              className="absolute w-6 h-6 top-[47px] left-[47px]"
              alt="Photo image"
              src="/photo---image-image.svg"
            />
          </div>

          <div className="absolute w-[117px] h-[117px] top-[699px] left-[138px] bg-gray-1 rounded-sm overflow-hidden">
            <img
              className="absolute w-6 h-6 top-[47px] left-[47px]"
              alt="Photo image"
              src="/photo---image-image.svg"
            />
          </div>

          <div className="absolute w-[117px] h-[117px] top-[699px] left-[259px] bg-gray-1 rounded-sm overflow-hidden">
            <img
              className="absolute w-6 h-6 top-[47px] left-[47px]"
              alt="Photo image"
              src="/photo---image-image.svg"
            />
          </div>

          <Card className="absolute w-[359px] h-[394px] top-[18px] left-[17px]">
            <CardContent className="p-0">
              <div className="absolute w-[359px] h-[388px] top-1.5 left-0">
                <div className="absolute w-[359px] h-[340px] top-12 left-0">
                  <div className="relative h-[340px] bg-white border-2 border-solid border-[#1a1a1a] rounded-sm overflow-hidden">
                    <img
                      className="top-[158px] left-[168px] absolute w-6 h-6"
                      alt="Photo image"
                      src="/photo---image-image.svg"
                    />
                  </div>
                </div>

                <div className="absolute top-0 left-[126px] font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
                  Picture or video
                </div>
              </div>

              <XIcon className="absolute w-6 h-6 top-0 left-2" />
            </CardContent>
          </Card>

          <div className="absolute w-[117px] h-[117px] top-[457px] left-[17px] bg-white">
            <img
              className="absolute w-6 h-6 top-[47px] left-[47px]"
              alt="Tech media photo"
              src="/tech---media-photo.svg"
            />
          </div>

          <div className="absolute w-14 h-[19px] top-[433px] left-3.5 font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
            recent
          </div>
        </section>

        {/* Camera Screen */}
        <section className="w-full h-[852px] absolute top-[2016px] left-[2892px] bg-white overflow-hidden hidden">
          <div className="absolute w-full h-full top-0 left-0 bg-[url(/rectangle-7.png)] bg-cover bg-[50%_50%]">
            <div className="absolute w-full h-[252px] top-0 left-0">
              <div className="absolute w-full h-[252px] top-0 left-0 bg-black opacity-20" />

              <div className="top-[57px] left-[27px] absolute w-[52px] h-[52px] bg-[#00000080] rounded-[26px]" />
              <div className="top-[57px] left-[315px] absolute w-[52px] h-[52px] bg-[#00000080] rounded-[26px]" />

              <div className="absolute w-4 h-4 top-[74px] left-[45px]">
                <div className="relative w-[18px] h-[18px] -top-px -left-px">
                  <img
                    className="absolute w-[17px] h-[17px] top-0 left-0"
                    alt="Vector"
                    src="/vector-3.svg"
                  />
                  <img
                    className="absolute w-[17px] h-[17px] top-0 left-0"
                    alt="Vector"
                    src="/vector-4.svg"
                  />
                </div>
              </div>

              <img
                className="absolute w-[23px] h-[23px] top-[72px] left-[329px]"
                alt="Group"
                src="/group-14.png"
              />
            </div>

            <div className="absolute w-full h-[248px] bottom-0 left-0">
              <div className="absolute w-full h-[248px] top-0 left-0 bg-black opacity-20" />

              <div className="top-[145px] left-[19px] absolute w-[52px] h-[52px] bg-[#00000080] rounded-[26px]" />
              <div className="top-36 left-[322px] absolute w-[52px] h-[52px] bg-[#00000080] rounded-[26px]" />

              <img
                className="absolute w-4 h-[25px] top-[158px] left-[340px]"
                alt="Group"
                src="/group-15.png"
              />

              <div className="absolute w-6 h-[23px] top-40 left-[33px]">
                <div className="relative w-[22px] h-[22px]">
                  <img
                    className="absolute w-6 h-2.5 top-0 left-0"
                    alt="Group"
                    src="/group.png"
                  />
                  <img
                    className="absolute w-6 h-2.5 top-3 left-0"
                    alt="Group"
                    src="/group-1.png"
                  />
                </div>
              </div>

              <div className="absolute w-[303px] top-[38px] left-[45px] font-['Raleway',Helvetica] font-normal text-white text-lg text-center tracking-[-0.41px] leading-[22px]">
                Press and hold for video recording, tap for capturing a photo.
              </div>

              <img
                className="absolute w-[111px] h-[111px] top-[109px] left-[133px]"
                alt="Vector"
                src="/vector.svg"
              />
              <img
                className="absolute w-[83px] h-[83px] top-[123px] left-[147px]"
                alt="Vector"
                src="/vector-1.svg"
              />
            </div>
          </div>
        </section>

        {/* Photo Edit Screen */}
        <section className="w-full h-[852px] absolute top-[2978px] left-[2892px] bg-[#ffde59] hidden">
          <div className="absolute w-[360px] h-[402px] top-6 left-4">
            <div className="absolute w-[360px] h-[397px] top-[5px] left-0">
              <img
                className="absolute w-[360px] h-[340px] top-[57px] left-0 object-cover"
                alt="Rectangle"
                src="/rectangle-10.png"
              />

              <div className="absolute top-0 left-[154px] font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
                Overlay
              </div>

              <ScrollArea className="absolute w-[360px] h-[340px] top-[57px] left-0 overflow-x-scroll">
                <div className="flex space-x-4">
                  <img
                    className="w-[360px] h-[340px] object-cover"
                    alt="Rectangle"
                  />
                  <img
                    className="w-[360px] h-[340px] object-cover"
                    alt="Rectangle"
                    src="/rectangle-11-2.png"
                  />
                  <img
                    className="w-[360px] h-[340px] object-cover"
                    alt="Rectangle"
                    src="/rectangle-11-1.png"
                  />
                  <img
                    className="w-[360px] h-[340px] object-cover"
                    alt="Rectangle"
                    src="/rectangle-11.png"
                  />
                </div>
              </ScrollArea>
            </div>

            <img
              className="absolute w-5 h-5 top-0 left-2.5"
              alt="Vector"
              src="/vector-2.svg"
            />
            <ArrowLeftIcon className="absolute w-6 h-6 top-0 left-[326px]" />
          </div>

          <div className="absolute w-[350px] h-[166px] top-[473px] left-4">
            <div className="absolute top-0 left-0 font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
              Add a caption
            </div>

            <Textarea
              className="h-[120px] top-[46px] left-[7px] flex w-[343px] items-start gap-2.5 pt-3 pb-4 px-4 absolute bg-white rounded-lg overflow-hidden border-2 border-solid border-[#1a1a1a]"
              placeholder="......"
            />
          </div>

          <div className="absolute w-[350px] h-[167px] top-[654px] left-4">
            <div className="absolute top-0 left-0 font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
              Add hash tags
            </div>

            <Textarea
              className="h-[120px] top-[47px] left-[7px] flex w-[343px] items-start gap-2.5 pt-3 pb-4 px-4 absolute bg-white rounded-lg overflow-hidden border-2 border-solid border-[#1a1a1a]"
              placeholder="......"
            />
          </div>

          <div className="absolute w-[200px] h-[35px] top-[438px] left-[97px] font-['Raleway',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[0.1px]">
            swap left to see the overlays
          </div>
        </section>
      </div>
    </div>
  );
};
