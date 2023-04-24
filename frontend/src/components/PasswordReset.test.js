import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Passwordreset } from "./Passwordreset";

describe("Passwordreset", () => {
  it("submits the form with correct data", async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(),
      })
    );
    global.fetch = mockFetch;

    const { getByLabelText, getByText } = render(<Passwordreset />);

    fireEvent.change(getByLabelText("email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("password"), {
      target: { value: "password123" },
    });
    fireEvent.submit(getByText("Reset Password"));

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        "https://childrens-home-backend.onrender.com/reset_password",
        expect.objectContaining({
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "test@example.com",
            password: "password123",
          }),
        })
      );
    });
  });

  it("displays errors when the form is submitted with invalid data", async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () =>
          Promise.resolve({
            errors: "Invalid email",
          }),
      })
    );
    global.fetch = mockFetch;

    const { getByLabelText, getByText } = render(<Passwordreset />);

    fireEvent.change(getByLabelText("email"), {
      target: { value: "invalid-email" },
    });
    fireEvent.change(getByLabelText("password"), {
      target: { value: "" },
    });
    fireEvent.submit(getByText("Reset Password"));

    await waitFor(() => {
      expect(screen.getByText("Invalid email")).toBeInTheDocument();
    });
  });
});
