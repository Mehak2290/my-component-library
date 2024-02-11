import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text.tests.tsx';

test('Text is visible', () => {
  render(<Text />);
  const Text = screen.getByTestId('id_4'); 
  expect(Text).toBeInTheDocument();
});


test('Background color changes in the disabled state', () => {
    render(<Text disabled />);
    const Text = screen.getByTestId('id_4'); 
    expect(Text).toHaveStyle('background-color: gray'); 
  });