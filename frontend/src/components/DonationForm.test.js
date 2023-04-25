import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DonationForm from './DonationForm';

describe('DonationForm', () => {
  it('renders a form', () => {
    render(<DonationForm />);
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });

  it('renders a Name input field', () => {
    render(<DonationForm />);
    const nameInput = screen.getByLabelText('Name');
    expect(nameInput).toBeInTheDocument();
  });

  it('renders an Email input field', () => {
    render(<DonationForm />);
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
  });

  it('renders an Amount input field', () => {
    render(<DonationForm />);
    const amountInput = screen.getByLabelText('Amount');
    expect(amountInput).toBeInTheDocument();
  });

  it('renders a Payment Method select field', () => {
    render(<DonationForm />);
    const paymentMethodSelect = screen.getByLabelText('Payment Method');
    expect(paymentMethodSelect).toBeInTheDocument();
  });

  it('renders three Payment Method options', () => {
    render(<DonationForm />);
    const paymentMethodOptions = screen.getAllByRole('option');
    expect(paymentMethodOptions).toHaveLength(3);
  });

  it('calls handleSubmit on form submission', () => {
    const handleSubmit = jest.fn();
    render(<DonationForm onSubmit={handleSubmit} />);
    const formElement = screen.getByRole('form');
    fireEvent.submit(formElement);
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('updates state on Name input change', () => {
    render(<DonationForm />);
    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toEqual('John Doe');
  });

  it('updates state on Email input change', () => {
    render(<DonationForm />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    expect(emailInput.value).toEqual('johndoe@example.com');
  });

  it('updates state on Amount input change', () => {
    render(<DonationForm />);
    const amountInput = screen.getByLabelText('Amount');
    fireEvent.change(amountInput, { target: { value: '50' } });
    expect(amountInput.value).toEqual('50');
  });

  it('updates state on Payment Method select change', () => {
    render(<DonationForm />);
    const paymentMethodSelect = screen.getByLabelText('Payment Method');
    fireEvent.change(paymentMethodSelect, { target: { value: 'credit-card' } });
    expect(paymentMethodSelect.value).toEqual('credit-card');
  });
});
