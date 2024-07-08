"use client";

import { Typography, Button } from "@/src/ui";
import Facebook from "@/public/assets/facebook.svg";
import Instagram from "@/public/assets/Instagram.svg";
import Twitter from "@/public/assets/twitter.svg";

const unoLinks = [
  "Accessibility Statement",
  "Your Orders",
  "Returns & Replacements",
  "Shipping Rates & Policies",
  "Refund and Returns Policy",
  "Privacy Policy",
  "Terms and Conditions",
  "Cookie Settings",
  "Help Center",
];

const duoLinks = [
  "Contact Us",
  "Careers",
  "Blogs",
  "Customers Reviews",
  "FAQs",
];

const trioLinks = [
  "Showrooms",
  "Customer Service",
  "Affiliates",
  "After Service Sale",
];

const socials = [<Twitter />, <Facebook />, <Instagram />];

const ctaBtns = [
  { heading: "Get it on", text: "Google Play" },
  { heading: "Download on the", text: "App Store" },
];

const legalLinks = ["Terms and Conditions", "Policy", "Privacy", "Order"];

const Footer = () => {
  return (
    <section className="w-full h-auto relative">
      <div className="bg-primary-500 p-10 flex flex-col justify-start items-start gap-4 lg:flex-row lg:items-center lg:justify-between ">
        <div>
          <Typography variant="h4" color="white">
            Subscribe to our newsletter to get updates on our latest offers!
          </Typography>
        </div>
        <div className="w-full lg:w-[30%] flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your Email Address"
            className="py-2 px-6 rounded-lg lg:grow w-full"
          />
          <button className="bg-[#FFBABA] py-2 px-4 rounded-lg lg:ml-4">
            Subscribe
          </button>
        </div>
      </div>

      <div className="w-full p-10 flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full flex justify-start gap-8 mb-4 lg:w-[60%] lg:justify-between lg:items-start lg:gap-0 lg:mb-0">
          <ul>
            <Typography
              variant="h5"
              color="black"
              align="left"
              customClassName="mb-4"
            >
              Let Us Help You
            </Typography>
            {unoLinks.map((unoLink, index) => (
              <li
                key={index}
                className="mb-2 cursor-pointer hover:text-primary-300"
              >
                {unoLink}
              </li>
            ))}
          </ul>
          <ul>
            <Typography
              variant="h5"
              color="black"
              align="left"
              customClassName="mb-4"
            >
              About
            </Typography>
            {duoLinks.map((duoLink, index) => (
              <li
                key={index}
                className="mb-2 cursor-pointer hover:text-primary-300"
              >
                {duoLink}
              </li>
            ))}
          </ul>
          <ul>
            <Typography
              variant="h5"
              color="black"
              align="left"
              customClassName="mb-4"
            >
              Support
            </Typography>
            {trioLinks.map((trioLink, index) => (
              <li
                key={index}
                className="mb-2 cursor-pointer hover:text-primary-300"
              >
                {trioLink}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[30%]">
          <div>
            <div className="mb-16">
              <Typography>Follow us on social media:</Typography>
              <div className="flex justify-start mt-4">
                {socials.map((social, index) => (
                  <div
                    className="w-8 h-8 bg-primary-950 rounded-full flex justify-center items-center cursor-pointer mr-4"
                    key={index}
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>
            <Typography>Download our app</Typography>
            {ctaBtns.map((btn, index) => (
              <div
                className="w-40 h-14 bg-black rounded-md text-white flex p-2 my-4"
                key={index}
              >
                <div>
                  <p className="font-thin text-xs">{btn.heading}</p>
                  <p className="font-medium text-base">{btn.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>

      <div className="p-10">
        <div className="border-t-2 bg-slate-800"></div>
      </div>

      <div className="p-10 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <ul className="flex">
          {legalLinks.map((legalLink, index) => (
            <li className="mr-4 cursor-pointer" key={index}>{legalLink}</li>
          ))}
        </ul>
        <p>© Copyright 2024, All Rights Reserved by Timbu Cloud Shop</p>
      </div>
    </section>
  );
};

export default Footer;
