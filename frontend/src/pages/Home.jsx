import React from "react";
import { Heading } from "../components/ui/heading";
import { Text } from "../components/ui/text";
import { Button } from "../components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const Home = () => {
  const companies = [
    "https://static-cdn.i2cinc.com/wp-content/themes/i2cinc-2023/assets/images/logo.svg",
    "https://discover.ilmx.org/wp-content/uploads/2023/12/arbisoft.webp",
    "https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/65e9dc44087cee387ed320b5_Devsinc_Logo-removebg-preview%20(1).png",
    "https://systemsltd.com/themes/custom/sysltd/SystemsLogo-02.svg",
    "https://netsoltech.com/images/netsol-logo-white.svg",
    "https://illuminatechnology.com/wp-content/uploads/2023/03/Asset-1@2x.png",
    "https://www.dubizzlelabs.com/static/DUBIZZLELABS-FULL-COLOUR-ee0ffcb14214e71e72b13e4b83fe856a.png",
  ];
  return (
    <div>
      <div className="max-w-6xl space-y-12 flex items-center flex-col justify-center px-4 mx-auto md:px-0 min-h-[70vh] text-center">
        <Heading>
          <h2 className="text-6xl font-bold ">
            Crowd sourced programming questions, to help you{" "}
            <span className="inline-block text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
              ace
            </span>{" "}
            your next technical interview.
          </h2>
        </Heading>
        <Text>
          <p className="max-w-3xl text-lg ">
            We've collected a list of questions from famous companies of
            Pakistan. Crowd sourced to help you ace your next technical
            interview.
          </p>
        </Text>
        <div className="flex items-center gap-4">
          <Button color="blue">
            Get Started <ArrowRightIcon />
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          {[
            "Software Engineer",
            "Frontend Engineer",
            "Backend Engineer",
            "Full Stack Engineer",
          ].map((item) => (
            <Link
              to="/"
              className="p-12 border rounded border-neutral-800 hover:bg-neutral-800"
              key={item}
            >
              <Text>{item}</Text>
            </Link>
          ))}
          <Link
            to=""
            className="flex items-center justify-between p-12 border rounded border-neutral-800 hover:bg-neutral-800"
          >
            <Text>View All</Text>
            <ArrowRightIcon className="w-4 h-4 ml-2 dark:text-neutral-200" />
          </Link>
        </div>
      </div>
      <div className="max-w-6xl px-4 py-12 mx-auto md:px-0">
        <Text className={"text-center"}>
          Join a community of candidates who’ve landed jobs at top companies
        </Text>
        <div className="flex items-center justify-between py-8">
          {companies.map((company) => (
            <img
              className="object-cover w-auto h-8"
              src={company}
              alt="Company"
            />
          ))}
        </div>
      </div>
      <div className="max-w-6xl px-4 py-12 mx-auto space-y-12 md:px-0">
        <Heading>
          <h2 className="text-6xl font-bold text-center">How does it work?</h2>
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-4 space-y-6 border rounded-md border-neutral-700">
            <Heading>
              <h3>1. Create an account</h3>
            </Heading>
            <Text>
              <p>Create an account and start solving questions.</p>
            </Text>
            <div className="flex items-center justify-end">
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl px-4 py-12 mx-auto md:px-0">
        <Text className={"text-center"}>
          Trusted by Educational Institutes and Universities
        </Text>
        <div className="flex items-center justify-between py-8">
          {companies.map((company) => (
            <img
              className="object-cover w-auto h-8"
              src={company}
              alt="Company"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
