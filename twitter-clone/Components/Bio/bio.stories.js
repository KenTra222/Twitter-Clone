import React from 'react';

import  Bio  from './Bio';


export default {
  title: 'Components/Bio',
  component: Bio,
};


const Template = () => <Bio
headshot=''
name='Fatima Smith'
tagline='Changing lives and heads one run way at a time!'
role='Model x Philanthropist'/>;

export const Default = Template.bind({});
