import React from 'react';
import { useNavigate } from 'react-router-dom';
import './searchItem.css';

const SearchItem = () => {
  const navigate = useNavigate();

  const searchHotel = () => {
    navigate('/hotelsearch');
  };

  // Sample data for random listings
  const listings = [
    {
      title: 'Tower Street Apartments',
      distance: '500m from center',
      taxiOp: 'Free airport taxi',
      subtitle: 'Studio Apartment with Air conditioning',
      features: 'Entire studio • 1 bathroom • 21m² 1 full bed',
      cancelOp: 'Free cancellation',
      cancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
      rating: '8.9',
      price: '€112',
    },
    {
      title: 'River Side Hotel',
      distance: '1.1km from center',
      taxiOp: 'Breakfast included',
      subtitle: 'Deluxe Room with Air conditioning',
      features: '2 beds • 1 bathroom',
      cancelOp: 'Free cancellation',
      cancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
      rating: '8.2',
      price: '€150',
    },
    {
      title: 'Ocean View Resort',
      distance: '800m from center',
      taxiOp: 'Free shuttle service',
      subtitle: 'Luxury Suite with Ocean View',
      features: '2 bedrooms • 2 bathrooms • 40m² 1 king bed, 2 twin beds',
      cancelOp: 'Free cancellation',
      cancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
      rating: '9.5',
      price: '€220',
    },
    {
      title: 'Mountain Retreat Lodge',
      distance: '2.5km from center',
      taxiOp: 'Mountain views',
      subtitle: 'Cozy Cabin with Fireplace',
      features: '1 bedroom • 1 bathroom • 35m² 1 queen bed',
      cancelOp: 'Free cancellation',
      cancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
      rating: '8.7',
      price: '€120',
    },
    {
      title: 'City Lights Hotel',
      distance: '700m from center',
      taxiOp: 'Cityscape views',
      subtitle: 'Executive Suite with Jacuzzi',
      features: '1 bedroom • 1.5 bathrooms • 30m² 1 king bed',
      cancelOp: 'Free cancellation',
      cancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
      rating: '9.2',
      price: '€180',
    },
    {
      title: 'Sunset Beach Resort',
      distance: '1.8km from center',
      taxiOp: 'Private beach access',
      subtitle: 'Beachfront Villa with Pool',
      features: '3 bedrooms • 2 bathrooms • 120m² 2 queen beds, 1 king bed',
      cancelOp: 'Free cancellation',
      cancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
      rating: '9.8',
      price: '€300',
    },
    {
      title: 'Downtown Loft Apartments',
      distance: '300m from center',
      taxiOp: 'City center location',
      subtitle: 'Modern Loft with Balcony',
      features: 'Entire loft • 1.5 bathrooms • 50m² 1 king bed',
      cancelOp: 'Free cancellation',
      cancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
      rating: '9.0',
      price: '€160',
    },
    {
      title: 'Historic Mansion Hotel',
      distance: '1.5km from center',
      taxiOp: 'Historical charm',
      subtitle: 'Grand Suite with Antique Furnishings',
      features: '2 bedrooms • 2 bathrooms • 80m² 1 king bed, 2 twin beds',
      cancelOp: 'Free cancellation',
      cancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
      rating: '8.5',
      price: '€200',
    },
  ];

  return (
    <div className="searchItemcontainer">
      {listings.map((listing, index) => (
        <div key={index} className="searchItem">
          <img
            src={`https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1`}
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">{listing.title}</h1>
            <span className="siDistance">{listing.distance}</span>
            <span className="siTaxiOp">{listing.taxiOp}</span>
            <span className="siSubtitle">{listing.subtitle}</span>
            <span className="siFeatures">{listing.features}</span>
            <span className="siCancelOp">{listing.cancelOp}</span>
            <span className="siCancelOpSubtitle">{listing.cancelOpSubtitle}</span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>{listing.rating}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{listing.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton" onClick={searchHotel}>
                See availability
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;
