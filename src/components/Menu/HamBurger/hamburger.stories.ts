import { Meta, StoryObj } from "@storybook/react-vite";
import HamBurger from "./HamBurger";

const meta: Meta = {
    title: "Menu/HamBurger",
    component: HamBurger,
    parameters: {
        layout: "centered",
    },
    tags: ['auto-docs']
} satisfies Meta<typeof HamBurger>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: {},
};
