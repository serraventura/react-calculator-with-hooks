import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NumberPanel from "./NumberPanel";

configure({ adapter: new Adapter() });

describe("<NumberPanel />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<NumberPanel />);
    expect(wrapper).toBeTruthy();
  });

  it("should handle number click", () => {});

  it("should match snapshot", () => {});
});
