import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Register } from './Register';

describe('Register', () => {
  test('renders form elements', () => {
    render(<Register />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /already have an account/i })).toBeInTheDocument();
  });

  test('submits form data', () => {
    const mockedFetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );
    global.fetch = mockedFetch;

    render(<Register />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'testuser@test.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'testpassword' },
    });
    fireEvent.submit(screen.getByRole('form'));

    expect(mockedFetch).toHaveBeenCalledTimes(1);
    expect(mockedFetch).toHaveBeenCalledWith('https://childrens-home-backend.onrender.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'testuser',
        email: 'testuser@test.com',
        password: 'testpassword',
      }),
    });
  });
});
