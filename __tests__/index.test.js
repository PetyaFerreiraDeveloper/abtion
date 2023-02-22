import React from "react";
import Home from "../pages/index";
import { Header } from "../components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { tempData } from "../__mocks__/tempData";

describe("Home Page", () => {
  it("shows loading until loading data", () => {
    render(<Home />);
    const location = screen.getByText(/loading/i);
    expect(location).toBeInTheDocument();
  });

  it("renders a Header component, with location name", async () => {
    const { getByText } = render(<Header data={tempData} />);
    expect(getByText(/copenhagen/i)).toBeInTheDocument();
  });
});
