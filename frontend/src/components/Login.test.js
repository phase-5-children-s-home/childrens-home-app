import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Login } from './Login';

describe('Login', () => {
  it('submits the form with valid input', async () => {
    const setIsLoggedIn = jest.fn();
    const { getByLabelText, getByText } = render(<Login setIsLoggedIn={setIsLoggedIn} />);
    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('password');
    const submitButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(setIsLoggedIn).toHaveBeenCalledWith(true);
    });
  });

  it('displays error messages with invalid input', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('password');
    const submitButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Email must be a valid email address')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
  });
});
