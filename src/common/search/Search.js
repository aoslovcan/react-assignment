import React, { useState, useEffect } from "react";
import style from "./Serach.module.css";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [allData, setAllData] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  console.log(`${props.message} Search`);
  useEffect(() => {
    if (searchValue.length > 0) {
      const items = [...props?.dataToSearch];
      let search = searchValue?.trim().toLowerCase();
      let filteredItems = items.filter((item) => {
        return item.author.toLowerCase().match(search);
      });
      if (filteredItems.length) {
        props.setFiltered(filteredItems);
      }
    } else {
      props.setFiltered();
    }
  }, [searchValue]);

  return (
    <div
      className={`${style.searchInput} col-6 row offset-3`}
      data-testid="search-component"
    >
      <input
        placeholder={props.placeholder}
        id="search-input"
        type="search"
        name="searchValue"
        value={searchValue}
        onChange={handleChange}
        data-testid="search-input"
      />
    </div>
  );
}

export default Search;
