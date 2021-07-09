import React from "react";
import Notepad from "./Notepad";
export default {
  title: "Notepad",
  component: Notepad,
};

const Template = (args) => <Notepad {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
