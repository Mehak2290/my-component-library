import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button.tests.tsx';

test('Button is visible', () => {
  render(<Button />);
  const Button = screen.getByTestId('id_1'); 
  expect(Button).toBeInTheDocument();
});


test('Background color changes in the disabled state', () => {
    render(<Button disabled />);
    const Button = screen.getByTestId('id_1'); 
    expect(Button).toHaveStyle('background-color: gray'); 
  });