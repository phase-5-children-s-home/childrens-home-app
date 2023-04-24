import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Passwordreset } from './Passwordreset';

describe('Passwordreset', () => {
  it('should render the password reset form', () => {
    const { getByLabelText, getByText } = render(<Passwordreset />);
    expect(getByLabelText('email')).toBeInTheDocument();
    expect(getByLabelText('password')).toBeInTheDocument();
    expect(getByText('Reset Password')).toBeInTheDocument();
  });

  it('should submit the form with user input', async () => {
    const { getByLabelText, getByText } = render(<Passwordreset />);
    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('password');
    const submitButton = getByText('Reset Password');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    await waitFor(() =>
      expect(getByText('Please Wait...')).toBeInTheDocument()
    );
    // assert that the form was submitted successfully and the user was redirected
  });

  it('should display errors if form submission fails', async () => {
    const { getByLabelText, getByText } = render(<Passwordreset />);
    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('password');
    const submitButton = getByText('Reset Password');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    await waitFor(() =>
      expect(getByText('Please Wait...')).toBeInTheDocument()
    );
    expect(getByText('Invalid email')).toBeInTheDocument();
    expect(getByText('Password must be at least 8 characters long')).toBeInTheDocument();
  });
});
