import React from "react";
import Home from "../pages/index";
import { findByRole, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { tempData } from "../__mocks__/tempData";

describe("Home Page", () => {
 it('shows heading temperature at curr location', () => {
    render(<Home />);
    const temp = screen.getByRole('heading', {name: /temperature/i});
    expect(temp).toBeInTheDocument();
 });




  


});
