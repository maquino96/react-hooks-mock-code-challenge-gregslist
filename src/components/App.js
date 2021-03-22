import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  console.log(listings)

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then( r => r.json())
      .then( listingsArr => setListings(listingsArr))

  }, [])

  const handleDelete = (id) => {

    const updatedListings = listings.filter( listing => listing.id !== id)
    setListings(updatedListings)

  }



  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onDelete={handleDelete} />
    </div>
  );
}

export default App;
