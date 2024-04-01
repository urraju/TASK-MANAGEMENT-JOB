import HelmetUse from "../Components/Shared/HelmetUse";
import Banner from "../Layout/Banner";
import WhoTask from "../Layout/WhoTask";

const Home = () => {
    return(
        <div>
            <HelmetUse helmet={'Home'}/>
              <Banner/>
              <WhoTask/>
        </div>
    )}
export default Home;