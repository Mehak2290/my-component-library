import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table.tests.tsx';

test('Table is visible', () => {
  render(<Table />);
  const Table = screen.getByTestId('id_3'); 
  expect(Table).toBeInTheDocument();
});


test('Background color changes in the disabled state', () => {
    render(<Table disabled />);
    const Table = screen.getByTestId('id_3'); 
    expect(Table).toHaveStyle('background-color: gray'); 
  });