import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Register } from "./Register";

describe("Register component", () => {
  it("renders correctly", () => {
    const { container } = render(<Register />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays error messages if form submission fails", async () => {
    const mockErrorResponse = {
      errors: {
        email: ["Email is already taken"],
      },
    };
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: () => Promise.resolve(mockErrorResponse),
      ok: false,
    });

    render(<Register />);
    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "testpassword" },
    });

    fireEvent.submit(screen.getByRole("button"));

    await waitFor(() =>
      expect(screen.getByText("Email is already taken")).toBeInTheDocument()
    );

    expect(global.fetch).toHaveBeenCalledWith(
      "https://childrens-home-backend.onrender.com/users",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          email: "test@example.com",
          username: "testuser",
          password: "testpassword",
        }),
      })
    );

    global.fetch.mockRestore();
  });

  it("navigates to login page if form submission succeeds", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
    });

    const { container } = render(<Register />);
    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "testpassword" },
    });

    fireEvent.submit(screen.getByRole("button"));

    await waitFor(() =>
      expect(container).toHaveTextContent("Please Wait...")
    );

    expect(global.fetch).toHaveBeenCalledWith(
      "https://childrens-home-backend.onrender.com/users",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          email: "test@example.com",
          username: "testuser",
          password: "testpassword",
        }),
      })
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://childrens-home-backend.onrender.com/users",
      expect.any(Object)
    );
    expect(global.fetch).toHaveReturned();

    global.fetch.mockRestore();
  });
});
