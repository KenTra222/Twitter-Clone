import React from 'react';

import Post from './Post';


export default {
  title: 'Example/Post',
  component: Post,
};


const Template = (args) => <Post {...args} />;

export const Default = Template.bind({});


