import React from 'react';
import { Button} from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    propertyName: { control: 'text' }, 
  },
};

const Template = (args) => <Button {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  propertyName: 'Default Text',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  propertyName: 'Disabled Text',
  disabled: true, 
};
