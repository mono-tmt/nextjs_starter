import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    argTypes: { onClick: { action: "clicked" } },
    backgroundColor: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: "There are a set of rules to keep in mind:",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};
Secondary.parameters = {
  docs: {
    description: {
      story: "詳細な説明をここに記載します",
    },
  },
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
Large.parameters = {
  docs: {
    description: {
      story: "詳細な説明をここに記載します",
    },
  },
};
export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
