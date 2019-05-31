import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ActionsPanel from "./ActionsPanel";

configure({ adapter: new Adapter() });

describe("<ActionsPanel />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<ActionsPanel />);
    expect(wrapper).toBeTruthy();
  });

  it("should handle operator action click", () => {});

  it("should match snapshot", () => {});
});
