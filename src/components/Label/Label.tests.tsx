import React from 'react';
import { render, screen } from '@testing-library/react';
import {Label} from './Label.tests.tsx';

test('Label is visible', () => {
  render(<Label />);
  const Label = screen.getByTestId('id_2'); 
  expect(Label).toBeInTheDocument();
});


test('Background color changes in the disabled state', () => {
    render(<Label disabled />);
    const Label = screen.getByTestId('id_2'); 
    expect(Label).toHaveStyle('background-color: gray'); 
  });