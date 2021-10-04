function Wrapper(props) {
  const { route } = props;
  const { component } = route;

  return component;
}

export default Wrapper;
