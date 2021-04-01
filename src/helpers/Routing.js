import { useHistory } from "react-router-dom";

const Routing = () => {
  const history = useHistory();
  const visitPage = (route) => {
    history.push(route);
  };
  return { visitPage };
};

export default Routing;
