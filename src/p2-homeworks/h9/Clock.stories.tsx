import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Clock from "../h9/Clock";


export default {
    title: 'Example/Clock',
    component: Clock,

} as Meta;

const Template: Story = (args) => <Clock />;

export const ClockBaseExample = Template.bind({});
ClockBaseExample.args = {
};