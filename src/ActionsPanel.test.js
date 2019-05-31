import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ActionsPanel from "./ActionsPanel";

configure({ adapter: new Adapter() });

let onClick;

describe("<ActionsPanel />", () => {
  beforeEach(() => {
    onClick = jest.fn();
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<ActionsPanel />);
    expect(wrapper).toBeTruthy();
  });

  it("should handle operator action click", () => {
    const wrapper = shallow(<ActionsPanel onClick={onClick} />);

    wrapper
      .find("button")
      .first()
      .simulate("click");

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith('+');
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<ActionsPanel />);
    expect(wrapper).toMatchSnapshot();
  });
});
