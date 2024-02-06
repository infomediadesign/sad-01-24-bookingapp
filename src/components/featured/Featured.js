import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
  const [citiesData, setCitiesData] = useState([]);

  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Berlin,Madrid,London");

  useEffect(() => {
    if (data && data.length === 3) {
      setCitiesData(data);
    }
  }, [data]);

  const cityItems = [
    { name: 'Berlin', imgSrc: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Madrid', imgSrc: 'https://images.unsplash.com/photo-1574556462575-eb106a5865a0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'London', imgSrc: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          {cityItems.map((city, index) => (
            <div key={index} className="featuredItem">
              <img src={city.imgSrc} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>{city.name}</h1>
                <h2>{citiesData[index]} properties</h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Featured;
