import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Banner = () => {
  const { user } = useAuth();
  return (
    <>
      <div
        className="hero min-h-[602px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/8zjv5ny/task.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> QuickTask</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to='/dashboard'>
              <button className="btn btn-primary">{`let's Explore`}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
