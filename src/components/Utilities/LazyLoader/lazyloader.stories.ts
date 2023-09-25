import { Meta, StoryObj } from "@storybook/react";
import LazyLoader from "./LazyLoader";


const meta: Meta = {
    title: 'Utilities/LazyLoader',
    component: LazyLoader,
} satisfies Meta<typeof LazyLoader>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: {}
}