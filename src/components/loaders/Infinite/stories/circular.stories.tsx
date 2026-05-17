import { Meta, StoryObj } from "@storybook/react-vite";
import CircularLoader from "../CircularLoader";

const meta: Meta = {
  title: "Loaders/CircularLoader",
  component: CircularLoader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CircularLoader>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};
