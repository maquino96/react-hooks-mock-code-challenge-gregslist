import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [ searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState([])
  console.log(searchTerm)

  // console.log(listings)

  useEffect(() => {
    fetchAPI()
  }, [])

  const fetchAPI = () => {
    fetch(`http://localhost:6001/listings`)
    .then( r => r.json())
    .then( listingsArr => setListings(listingsArr))
  }

  const handleDelete = (id) => {

    const updatedListings = listings.filter( listing => listing.id !== id)
    setListings(updatedListings)

  }

  const handleSearch = () => {
    const manipulatedArr = listings
    if (searchTerm.length ) {
    const filteredListings = manipulatedArr.filter( listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilter(filteredListings)
    } else { fetchAPI()}

  }



  return (
    <div className="app">
      <Header searchTerm={searchTerm} onSearch={setSearchTerm} handleSearch={handleSearch}/>
      <ListingsContainer listings={searchTerm ? filter: listings} onDelete={handleDelete} />
    </div>
  );
}

export default App;
