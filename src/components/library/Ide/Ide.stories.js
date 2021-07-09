import React from "react";
import Ide from "./Ide";
export default {
  title: "Ide",
  component: Ide,
};

const Template = (args) => <Ide {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
