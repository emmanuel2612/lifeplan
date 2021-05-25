import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <main>
        <h1>Tap Oyster to begin</h1>
        <Link to="/planner">
          <a>Get Started</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
