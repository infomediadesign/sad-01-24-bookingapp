import "./featured.css";
import hotel1 from './hotel1.svg';
import hotel2 from './hotel2.svg';
import hotel3 from './hotel3.svg';

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
         
          src={hotel1}
          alt="hotel1"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={hotel2}
          alt="hotel2"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Germany</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={hotel3}
          alt="hotel3"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austria</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
