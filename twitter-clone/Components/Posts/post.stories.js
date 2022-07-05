import React from 'react';

import Post from './Post';


export default {
  title: 'Components/Post',
  component: Post,
};


const Template = () => <Post
content='hey i am a new post being created through figma and next js '
time='2/22/2022'
 />;

export const Default = Template.bind({});


