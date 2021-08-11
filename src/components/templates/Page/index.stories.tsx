import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page } from ".";
import * as HeaderStories from "../../molecules/Header/index.stories";

export default {
  title: "Template/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
