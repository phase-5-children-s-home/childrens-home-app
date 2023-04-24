import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./Login";

describe("Login", () => {
  it("renders the login form", () => {
    render(<Login setIsLoggedIn={() => {}} />);

    expect(screen.getByLabelText("email")).toBeInTheDocument();
    expect(screen.getByLabelText("password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("displays error messages with invalid input", async () => {
    const mockFetch = jest.fn();
    mockFetch.mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ errors: { email: ["Email is required"] } }),
    });
    global.fetch = mockFetch;

    render(<Login setIsLoggedIn={() => {}} />);

    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "invalid-email" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(mockFetch).toHaveBeenCalledTimes(1);

    const errorElement = await screen.findByText("Email is required");
    expect(errorElement).toBeInTheDocument();
  });

  it("submits the form with valid input", async () => {
    const mockFetch = jest.fn();
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ data: { user: { id: 1 }, token: "abc123" } }),
    });
    global.fetch = mockFetch;

    const mockSetIsLoggedIn = jest.fn();

    render(<Login setIsLoggedIn={mockSetIsLoggedIn} />);

    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "valid-email@example.com" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(mockFetch).toHaveBeenCalledTimes(1);

    await screen.findByText("Please Wait...");

    expect(mockSetIsLoggedIn).toHaveBeenCalledTimes(1);
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
  });
});
