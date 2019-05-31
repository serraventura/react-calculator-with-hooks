import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Display from "./Display";

configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Display text={[]} />);
    expect(wrapper).toBeTruthy();
  });

  it("should display right expression with right result", () => {
    const wrapper = shallow(<Display text={[1, "+", 1]} result="2" />);
    expect(wrapper.find(`[data-test="expression"]`).text()).toEqual("1 + 1");
    expect(wrapper.find(`[data-test="result"]`).text()).toEqual("2");
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<Display text={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
