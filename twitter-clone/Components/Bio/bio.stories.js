import React from 'react';

import  Bio  from './Bio';


export default {
  title: 'Components/Bio',
  component: Bio,
};


const Template = () => <Bio
headshot='https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
name='Fatima Smith'
tagline='Changing lives and heads one run way at a time!'
role='Model x Philanthropist'/>;

export const Default = Template.bind({});
