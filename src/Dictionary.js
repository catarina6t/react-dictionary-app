import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);


  function handleResponse(response) {
    console.log(response.data[0]);
    //update this result state everytime get a response from a API
    setResults(response.data[0]);

    //console.log(response.data[0].meanings[0].definitions[0].definition);
  
}

  function search(event) {
    event.preventDefault();
    //alert(`Searching for ${keyword} definition`);
    // documentation : https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results ={results } />
      //send this to the component results
    </div>
  );
}
