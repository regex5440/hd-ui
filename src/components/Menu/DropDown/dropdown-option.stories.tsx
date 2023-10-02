import { Meta, StoryObj } from "@storybook/react";
import DropDown from "./DropDown";

export default {
  title: "Menu/DropDown/DropDown.Option",
  component: DropDown.Option,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropDown.Option>;

export const DefaultOption: StoryObj<typeof DropDown.Option> = {
  args: {
    children: "Dummy Option",
    selected: false,
    style: { border: "1px solid black", padding: "10px" },
  },
};
