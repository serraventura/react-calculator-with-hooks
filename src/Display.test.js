describe("<Display />", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Display text={[]} />);
    expect(wrapper).toBeTruthy();
  });

  it("should display right expression with right result", () => {});

  it("should match snapshot", () => {});
});
