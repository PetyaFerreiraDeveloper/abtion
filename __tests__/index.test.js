import React from "react";
import Home from "../pages/index";
import { Header } from "../components/Header";
import { findByRole, render, screen, within, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { tempData } from "../__mocks__/tempData";


describe("Home Page", () => {
 it('shows loading until loading data', () => {
   render(<Home />);
   const location = screen.getByText(/loading/i);
   expect(location).toBeInTheDocument();
 });

 it('renders a Header component, when the data is loaded', async () => {
   const { getByText } = render(<Header />);

   await waitFor(() => expect(getByText(/hvidovre/i)).toBeInTheDocument())
 })




  


});
