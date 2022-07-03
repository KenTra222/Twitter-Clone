import React from 'react';

import Post from './Post';


export default {
  title: 'Components/Post',
  component: Post,
};


const Template = () => <Post
content='hey i am a new post on the phone right now' 
time='222'
 />;

export const Default = Template.bind({});


