import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Calc from "./Calc";

configure({ adapter: new Adapter() });

const mockHook = newState =>
  jest.fn().mockImplementation(state => [newState, newState => {}]);

describe("<Calc />", () => {
  it("should render without crashing", () => {
    React.useState = mockHook({
      data: [],
      isFetching: false
    });

    const wrapper = shallow(<Calc />);
    expect(wrapper).toBeTruthy();
  });

  it("should match snapshot", () => {
    React.useState = mockHook({
      data: [],
      isFetching: false
    });

    const wrapper = shallow(<Calc />);
    expect(wrapper).toMatchSnapshot();
  });
});
