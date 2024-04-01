
import { Helmet } from "react-helmet";

const HelmetUse = ({ helmet }) => {
  return (
    <Helmet>
      <title>{helmet}</title>
    </Helmet>
  );
};
export default HelmetUse;
