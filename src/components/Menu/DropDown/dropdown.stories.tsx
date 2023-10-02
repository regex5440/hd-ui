import { Meta, StoryObj } from "@storybook/react";
import DropDown from "./DropDown";

export default {
  title: "Menu/DropDown",
  component: DropDown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  // includeStories: ["DropDown.Option"],
} satisfies Meta<typeof DropDown>;

type StoryObject = StoryObj<typeof DropDown>;

export const DefaultWithOption: StoryObject = {
  // args: {
  //   onChange: (value) => {
  //     console.log("LogFromDropDown", value);
  //   },
  //   children: [
  //     <DefaultOption value="Option 1">Option 1</DefaultOption>,
  //     <DefaultOption value="Option 2">Option 2</DefaultOption>,
  //   ],
  // },
  render: (args) => {
    return (
      <DropDown
        onChange={(value) => {
          console.log(value);
        }}
        {...args}
      >
        <DropDown.Option value={"Option 1"} selected>
          Option 1
        </DropDown.Option>
        <DropDown.Option value={"Option 2"}>Option 2</DropDown.Option>
      </DropDown>
    );
  },
};
