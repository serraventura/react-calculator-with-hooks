import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Calc from "./Calc";

configure({ adapter: new Adapter() });

describe("<Calc />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Calc />);
    expect(wrapper).toBeTruthy();
  });

  it("should render without crashing", () => {});

  it("should match snapshot", () => {});
});
