import React from "react";
import PropTypes from "prop-types";
//import React - and property types for validation purposes

const searchBarStyle = {
  width: "80%",
  marginTop: "15px",
  marginBottom: "10px",
};
//this object contains the parameters for the styling of the navbar.

const Searchbar = (props) => {
  const { placeholder, onSearch } = props;
  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      style={searchBarStyle}
      onChange={onSearch}
    ></input>
  );
};
//this returns an instance of the search bar component - with attributes/props set out

Searchbar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};
//this sets out property types for validation purposes

export default Searchbar;
