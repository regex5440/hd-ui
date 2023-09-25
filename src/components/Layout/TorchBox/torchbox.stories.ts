import { Meta, StoryObj } from "@storybook/react";
import TorchBox from "./TorchBox";


const meta: Meta = {
    title: 'Layout/TorchBox',
    component: TorchBox,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof TorchBox>;

export default meta;

export const Default: StoryObj<typeof meta> = {
    args: {
        torchStyle: {
            size: 0.5,
        },
        containerStyle: {
            height: '200px',
            width: '400px'
        }
    }
}