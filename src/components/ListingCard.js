import React, {useState} from "react";

function ListingCard({listing, onRemoveListing}) {

  // const[showListing, setShowListing] = useState(true);
  const[favorite, setFavorite] = useState(false);

  const { id, description, image, location } = listing;

  function handleClick() {
    setFavorite(prevFavorite => !prevFavorite)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    });
    onRemoveListing(id);
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div onClick = {handleClick} className="details">
        { favorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick = {handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

