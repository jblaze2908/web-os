import React from "react";
import CameraApp from "./CameraApp";
export default {
  title: "CameraApp",
  component: CameraApp,
};

const Template = (args) => <CameraApp {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
