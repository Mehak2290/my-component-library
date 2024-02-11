import React from 'react';
import { Label} from './Label';

export default {
  title: 'Label',
  component: Label,
  argTypes: {
    propertyName: { control: 'text' }, 
  },
};

const Template = (args) => <Label {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  propertyName: 'Default Text',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  propertyName: 'Disabled Text',
  disabled: true, 
};