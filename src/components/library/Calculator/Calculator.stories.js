import React from "react";
import Calculator from "./Calculator";
export default {
  title: "Calculator",
  component: Calculator,
};

const Template = (args) => <Calculator {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
