import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NumberPanel from "./NumberPanel";

configure({ adapter: new Adapter() });

let onClick;

describe("<NumberPanel />", () => {
  beforeEach(() => {
    onClick = jest.fn();
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<NumberPanel />);
    expect(wrapper).toBeTruthy();
  });

  it("should handle number click", () => {
    const wrapper = shallow(<NumberPanel onClick={onClick} />);

    wrapper
      .find("button")
      .first()
      .simulate("click");

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(1);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<NumberPanel />);
    expect(wrapper).toMatchSnapshot();
  });
});
