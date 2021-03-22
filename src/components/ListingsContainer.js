import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDelete}) {

  const cardComponents = listings.map( listing => <ListingCard key={listing.id} listing={listing} onDelete={onDelete}/>)

  return (
    <main>
      <ul className="cards">
        {cardComponents}
      </ul>
    </main>
  );
}

export default ListingsContainer;
