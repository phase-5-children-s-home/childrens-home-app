import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  test('renders about us text', () => {
    render(<AboutUs />);
    const text = screen.getByText(/We are a non-profit organization dedicated to improving the lives of those in need/i);
    expect(text).toBeInTheDocument();
  });
});
