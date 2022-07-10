import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { linkTo } from "@storybook/addon-links";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/Button",
  component: Button,

  argTypes: {
    title: {
      description: "Text displayed in the button",
    },
    onClick: {
      description: "Function handled after click",
    },
    disabled: {
      description:
        "When disabled, the button is not clickable and has a different color",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    type: {
      description: "Type of the button",
      defaultValue: "button",
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
    },
    variant: {
      description: "Variant of the button",
      defaultValue: "primary",
      control: {
        type: "select",
        options: ["primary", "otherVariant"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Hello world!",
  variant: "primary",
  onClick: linkTo("Buttons/Button", "Disabled"),
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  title: "Diabled!",
  variant: "primary",
  onClick: linkTo("Buttons/Button", "Hello World"),
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Secondary",
  variant: "primary",
  onClick: linkTo("Buttons/Button", "Hello World"),
};
