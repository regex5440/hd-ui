import { Meta, StoryObj } from "@storybook/react";
import BouncyBalls from "../BouncyBall";

const meta: Meta = {
  title: "Loaders/BouncyBalls",
  component: BouncyBalls,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BouncyBalls>;
export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};
