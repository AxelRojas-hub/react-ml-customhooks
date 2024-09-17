import { useState } from "react";
import { SearchForm } from "./SearchForm";
import { SearchResultItem } from "./SearchResultItem";

function App () {
  const [results, setResults] = useState([]);
  const handleSearch = async (search:string) => {
    const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q="+search);
    const data = await res.json();
    setResults(data.results)
  };
    return (
      <div>
        <SearchForm onSearch={handleSearch} />
        <div className="search-results">
        {results.map((r: { title: string; price: string; thumbnail: string, permalink: string; }) => (
          <SearchResultItem
          key={r.title} 
          title={r.title} 
          price={r.price} 
          img={r.thumbnail} 
          permalink={r.permalink}/>
        ))}
        </div>
      </div>
    );
}

export { App };