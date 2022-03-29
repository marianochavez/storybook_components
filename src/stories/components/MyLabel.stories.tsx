import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        // size: { control: 'select', options: ['normal','h1'] },
        color: { control: 'select'},
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> =(args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    label: 'hello world',
    size: 'normal',
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'toUpperCase',
    size: 'normal',
    allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    fontColor : "#5517ac",
    size: 'h1',
}