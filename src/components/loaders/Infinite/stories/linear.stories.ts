import { Meta, StoryObj } from "@storybook/react";
import LinearLoader from "../LinearLoader";

const meta: Meta = {
    title: "Loaders/LinearLoader",
    component: LinearLoader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof LinearLoader>;

export default meta;
export const Infinite: StoryObj<typeof meta> = {
    args: {
        withProgress: false,
        width: "500px",
    },
};

export const Finite: StoryObj<typeof meta> = {
    args: {
        withProgress: true,
        width: "500px",
        percentage: 30,
    },
};
