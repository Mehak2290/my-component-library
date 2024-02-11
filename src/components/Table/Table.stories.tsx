import React from 'react';
import { Table} from './Table';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    propertyName: { control: 'text' }, 
  },
};

const Template = (args) => <Table {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  propertyName: 'Default Text',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  propertyName: 'Disabled Text',
  disabled: true, 
};