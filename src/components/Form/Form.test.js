import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import Form from "./Form.js";

describe("Form component test", () => {
  it("render Form component", () => {
    shallow(<Form />);
  });

  it("render button", () => {
    const wrapper = shallow(<Form />);
    const buttonElement = wrapper.find("button");
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual("Save");
  });

  it("name input ", () => {
    const wrapper = shallow(<Form />);
    const nameInput = wrapper.find("#name-input");
    expect(nameInput.props().value).toEqual("");
  });

  it("email input", () => {
    const wrapper = shallow(<Form />);
    const emailInput = wrapper.find("#email-input");
    expect(emailInput.props().value).toEqual("");
  });

  it("password input", () => {
    const wrapper = shallow(<Form />);
    const passwordInput = wrapper.find("#password-input");
    expect(passwordInput.props().value).toEqual("");
  });
});

// describe("form testing react testing library", () => {
//   it("render email input", () => {
//     const { getByTestId } = render(<Form />);
//     const input = getByTestId("email-input");
//     expect(input).toBeInTheDocument();
//     expect(input).toHaveAttribute("type", "email");
//   });

//   it("test valid input field", () => {
//     const { getByTestId } = render(<Form />);
//     const input = getByTestId("email-input");
//     userEvent.type(input, "test@mail.com");
//     expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
//   });
// });
