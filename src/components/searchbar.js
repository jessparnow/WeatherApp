import React from "react";

function Search() {
  return (
    <div className="column is-4 is-offset-8">
      <input
        className="input is-rounded is-primary"
        type="text"
        placeholder="City Name"
      ></input>
      <button className="button has-background-primary">Search</button>
    </div>
  );
}
export default Search;
