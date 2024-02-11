import React from 'react';
import { Text} from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    propertyName: { control: 'text' }, 
  },
};

const Template = (args) => <Text {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  propertyName: 'Default Text',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  propertyName: 'Disabled Text',
  disabled: true, 
};