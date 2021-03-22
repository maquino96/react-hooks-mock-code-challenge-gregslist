import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [ searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState([])

  const [sortList, setSortList] = useState('')

  // I've come to the same conclusion twice so far that the filterArray is required when creating the search bar feature. 
  // console.log(searchTerm)

  console.log(listings)

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

  const handleSort = (event) => {
    event.preventDefault()
    setSortList(event.target.value)

    switch (sortList){
      case 'Default':
        return console.log('default')
      case 'Location':
        setListings(listings.sort( (a, b) => {
          if ( a.location < b.location ){
              return -1;
          }
          if ( a.location > b.location ){
              return 1;
          }
              return 0;
          }
        ))
        return fetchAPI()
      case 'Price':
        return console.log('price')
      default:
        break 
    }


  }


  return (
    <div className="app">
      <Header searchTerm={searchTerm} onSearch={setSearchTerm} handleSearch={handleSearch}/>
        <label htmlFor="sort">Sort Listings</label> <br></br>
        <select name="sort-by" id="sort-dropdown" onChange={e => handleSort(e)}>
        <option value="Default">Default</option>
          <option value="Location">Location</option>
          <option value="Price">Price</option>
        </select>
      <ListingsContainer listings={searchTerm ? filter: listings} onDelete={handleDelete} />
    </div>
  );
}

export default App;
