import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Van from './Van';

describe('<Van />', () => {
  test('it should mount', () => {
    render(<Van />);
    
    const van = screen.getByTestId('Van');

    expect(van).toBeInTheDocument();
  });
});