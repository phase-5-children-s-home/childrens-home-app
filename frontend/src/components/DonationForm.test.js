import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DonationForm from './DonationForm';

describe('DonationForm', () => {
  test('should submit the form when the Donate button is clicked', async () => {
    const mockResponse = { success: true };
    jest.spyOn(window, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    }));
    render(<DonationForm />);
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Amount:'), { target: { value: '50' } });
    fireEvent.change(screen.getByLabelText('Payment Method:'), { target: { value: 'credit-card' } });
    fireEvent.click(screen.getByText('Donate'));
    expect(window.fetch).toHaveBeenCalledWith('/api/donate', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John',
        email: 'john@example.com',
        amount: 50,
        paymentMethod: 'credit-card',
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    expect(await screen.findByText('{"success":true}')).toBeInTheDocument();
  });
});
