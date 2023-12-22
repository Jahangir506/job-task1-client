import dev from '../../assets/dev.jpg'
import corporate from '../../assets/corporate.jpg'
import bank from '../../assets/bank.jpg'

const UsePeople = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center my-14">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={dev}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
          <div className="card-actions justify-center my-auto">
              <button className="btn btn-primary">Developers</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={bank}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
          <div className="card-actions justify-center my-auto">
              <button className="btn btn-primary">Bankers</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={corporate}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center my-auto">
              <button className="btn btn-primary">Corporate Professionals</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UsePeople;
