import React from "react";

function Search({search,Setsearch}) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Search</label>
      <input 
      type="text"
      id="search"
      placeholder="Search Items"
      value={search}
      onChange={(e)=>(Setsearch(e.target.value))}
       />
    </form>
  );
}

export default Search;
