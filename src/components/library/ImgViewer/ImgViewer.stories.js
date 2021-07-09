import React from "react";
import ImgViewer from "./ImgViewer";
export default {
  title: "ImgViewer",
  component: ImgViewer,
};

const Template = (args) => <ImgViewer {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
