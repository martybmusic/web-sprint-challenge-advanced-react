/* eslint-disable no-restricted-globals */
import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/Checkout Form/i);
    expect(header).toBeTruthy();
});
    

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/First Name/i);
    const lastName = screen.getByLabelText(/Last Name/i);
    const address = screen.getByLabelText(/Address/i);
    const city = screen.getByLabelText(/City/i);
    const state = screen.getByLabelText(/State/i);
    const zip = screen.getByLabelText(/Zip/i);
    const button = screen.getByRole("button");

    userEvent.type(firstName, 'Marty');
    userEvent.type(lastName, 'Brueggemann');
    userEvent.type(address, '1111 Fictional Ln');
    userEvent.type(city, 'Saint Paul');
    userEvent.type(state, 'MN');
    userEvent.type(zip, '55104');
    userEvent.click(button);

    const successMsg = document.querySelector("[data-testid='successMessage']");

    expect(successMsg).toHaveTextContent('Marty Brueggemann');
    expect(successMsg).toHaveTextContent('1111 Fictional Ln');
    expect(successMsg).toHaveTextContent('Saint Paul');
    expect(successMsg).toHaveTextContent('MN');
    expect(successMsg).toHaveTextContent('55104');

});
