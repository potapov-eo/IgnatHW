import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import HW12, {HW12Props} from "./HW12";
import {ReduxStoreProviderDecorator} from "../../stories/decorators/ReduxStoreProviderDecorator";


export default {
    title: 'Example/HW12',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;


const Template: Story<HW12Props> = () =>
    <HW12/>

export const HW12Base = Template.bind({});
HW12Base.args = {};
