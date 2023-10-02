import { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalProps } from ".";
import { useRef, useState } from "react";

const meta: Meta = {
  title: "Modal/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Modal>;

export default meta;

export const PopOver: StoryObj<typeof Modal> = {
  args: {
    keepModalCentered: false,
    TransitionStyle: "fade",
    closeOnBlur: true,
    showBackdrop: false,
  },
  render: (args) => {
    const [state, setState] = useState(false);
    const button = useRef<HTMLButtonElement>(null);
    return (
      <>
        <button onClick={() => setState(true)} ref={button}>
          Modal
        </button>
        <Modal
          {...args}
          triggerElement={button}
          open={state}
          closeHandler={() => {
            console.log("ClosedPopover");
            setState(false);
          }}
        >
          This is a popover modal, it will be placed near to the element that
          changes it's state based on the prop: triggerElement
        </Modal>
      </>
    );
  },
};

export const Dialog: StoryObj<typeof meta> = {
  args: {
    open: true,
    keepModalCentered: true,
    closeHandler: () => {
      console.log("Closed");
    },
  },
};
