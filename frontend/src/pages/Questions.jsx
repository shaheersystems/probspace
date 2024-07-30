import React from "react";

import { Heading } from "../components/ui/heading";
import { Divider } from "../components/ui/divider";
import { Text } from "../components/ui/text";
import { Button } from "../components/ui/button";
import {
  CheckBadgeIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";

import { Avatar } from "../components/ui/avatar";
import { GiftTopIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
} from "../components/ui/dropdown";
const Questions = () => {
  const users = [
    {
      id: 1,
      name: "Jane Cooper",
      email: "",
    },
    {
      id: 2,
      name: "Cody Fisher",
      email: "",
    },
    {
      id: 3,
      name: "Esther Howard",
      email: "",
    },
  ];
  return (
    <>
      <div className="space-y-2">
        <Heading>Analytical Questions</Heading>
        <Text>
          This is a collection of analytical questions that are commonly asked
          in interviews for data science, machine learning, and other analytical
          roles.
        </Text>
      </div>
      <div className="py-4">
        <Divider />
      </div>
      <div className="flex items-center gap-4">
        <Heading>Filters</Heading>
        <div className="flex items-center gap-4 py-2">
          <Dropdown>
            <DropdownButton outline>Select Role</DropdownButton>
            <DropdownSection>
              <DropdownMenu>
                <DropdownItem>Associate Software Engineer</DropdownItem>
                <DropdownItem>Jr. Software Engineer</DropdownItem>
                <DropdownItem>Sr. Software Engineer</DropdownItem>
              </DropdownMenu>
            </DropdownSection>
          </Dropdown>
        </div>
      </div>
      <div className="py-4">
        <Divider />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="col-span-8 space-y-4">
          <div className="p-4 space-y-2 rounded-md bg-zinc-100 dark:bg-zinc-800">
            <Heading className={"font-display max-w-2xl"}>
              What is the difference between supervised and unsupervised
              learning?
            </Heading>
            <Text>
              This question was asked at <span>Microsoft</span>
              {", "}
              <span>Meta</span>
              {", "}
              <span>Oracle</span> & more
            </Text>
            <Text className={"truncate"}>
              Supervised learning is a type of machine learning where the model
              is trained on a labeled dataset. The model learns to map input
              data to the correct output. In unsupervised learning, the model is
              trained on an unlabeled dataset. The model learns to identify
              patterns in the input data without being given the correct output.
            </Text>
            <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 rounded bg-zinc-200 dark:bg-zinc-900">
              <Text>24 available answers</Text>
              <Button className="w-full cursor-pointer sm:w-auto" plain>
                Find out the answer
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2">
              <Button className="w-full cursor-pointer sm:w-auto" outline>
                <PlusIcon className="w-4 h-4" />I was asked this
              </Button>
              <Button className="w-full cursor-pointer sm:w-auto" outline>
                <PlusIcon className="w-4 h-4" />
                Answer this question
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-8 space-y-4 rounded-md md:col-span-4">
          <div className="p-4 space-y-2 rounded-md bg-zinc-100 dark:bg-zinc-800">
            {" "}
            <Heading className={"font-display"}>
              Contribute to help the community
            </Heading>
            <Text>
              Got an interview question you faced? Share it with our community
              and help others gear up for their interviews!
            </Text>
            <div className="space-y-4">
              <Button className="w-full cursor-pointer" color="blue">
                <PlusIcon className="w-4 h-4 mr-2" />
                Contribute
              </Button>
            </div>
          </div>
          <div className="p-4 space-y-2 rounded-md bg-zinc-100 dark:bg-zinc-800">
            <Heading className={"font-display"}>Support this project</Heading>
            <Text>
              If Probspace helped you prepare for your dream job, consider
              supporting us.
            </Text>
            <Button className="w-full cursor-pointer">
              <GiftTopIcon className="w-4 h-4 mr-2" />
              Sponsor
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
