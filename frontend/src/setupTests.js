// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';
import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

test('renders the form and footer', () => {
    const { getByTestId } = render(<Homepage />);
    const formElement = getByTestId('form');
    const footerElement = getByTestId('footer');
    expect(formElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });

  jest.useFakeTimers();

test('updates the number of people and teams', () => {
  const { getByText } = render(<Homepage />);
  jest.advanceTimersByTime(500);
  const peopleElement = getByText(/1850/i);
  const teamsElement = getByText(/950/i);
  expect(peopleElement).toBeInTheDocument();
  expect(teamsElement).toBeInTheDocument();
});

test('navigates to the login page when clicked', () => {
  const { getByText } = render(
    <Router>
      <Homepage />
    </Router>
  );
  const loginLink = getByText(/Donate/i);
  fireEvent.click(loginLink);
  expect(window.location.pathname).toBe('/login');
});

test('individuals signed up counter increments correctly', () => {
  render(<Homepage />);
  const counter = screen.getByText(/people/i);
  expect(counter).toHaveTextContent('0 people');
  setTimeout(() => expect(counter).toHaveTextContent('100 people'), 21);
  setTimeout(() => expect(counter).toHaveTextContent('1,000 people'), 221);
  setTimeout(() => expect(counter).toHaveTextContent('1,850 people'), 4019);
});

// see if value is initially 20 minutes
it('initializes numPeople state variable to 0', () => {
    render(<Homepage />);
    expect(screen.getByText('0+ people')).toBeInTheDocument();
  });

//footer
describe("<Footer />", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it("contains the correct HTML elements and CSS classes", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(".footer").length).toBe(1);
    expect(wrapper.find(".sb__footer").length).toBe(1);
    expect(wrapper.find(".sb__footer-links").length).toBe(1);
    expect(wrapper.find(".sb__footer-below").length).toBe(1);
    // ...and so on
  });

  it("all links are working and redirecting to the correct pages", () => {
    const wrapper = shallow(<Footer />);
    const links = wrapper.find("a");
    links.forEach((link) => {
      expect(link.prop("href")).not.toBe("#");
    });
  });
});

  