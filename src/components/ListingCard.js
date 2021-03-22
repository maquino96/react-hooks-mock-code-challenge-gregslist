import {useState} from "react";


function ListingCard({listing, onDelete}) {
  const [favorite, setFavorite] = useState(false)

  const handleFavoriteClick = () => {
    setFavorite(!favorite)

  }

  const handleDelete = (event)=> {

    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({}) 
    })
      .then(r => r.json())
      .then(updatedPlant => {
        onDelete(listing.id)
      }) 
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.name} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={(e) => handleFavoriteClick(e)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={(e) => handleFavoriteClick(e)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={(e) => handleDelete(e)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
