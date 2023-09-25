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

export const PopOver: StoryObj<typeof meta> = {
  args: {
    keepModalCentered: false,
    TransitionStyle: "fade",
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
          {...(args as ModalProps)}
          triggerElement={button}
          open={state}
          closeHandler={() => setState(false)}
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
  },
};
