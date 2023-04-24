import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders the About component', () => {
    const { getByText } = render(<About />);
    const headerElement = getByText(/About Us/i);
    const firstParagraphElement = getByText(/We are a non-profit organization/i);
    const secondParagraphElement = getByText(/Our team is made up of passionate individuals/i);
    const thirdParagraphElement = getByText(/Through our fundraising events/i);
    expect(headerElement).toBeInTheDocument();
    expect(firstParagraphElement).toBeInTheDocument();
    expect(secondParagraphElement).toBeInTheDocument();
    expect(thirdParagraphElement).toBeInTheDocument();
  });
});
