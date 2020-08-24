import React from "react";
//import EmployeeTable from "EmployeeTable";
import Searchbar from "./Searchbar.js";
import Table from "./Table.js";
//import search
//import table

class DataArea extends React.Component {
  state = {
    searchTerm: "",
    data: [],
    filteredData: [],
  };

  onChange = () => {};
  render() {
    return (
      <div>
        <Searchbar />
        <Table />
      </div>
    );
  }
}

export default DataArea;
//import Search from "../components/Search";
//import EmployeeTable from "../components/EmployeeTable";

// this is where you state will be set up to stored what comes back on the api call, along with the order those employees are shown in

// you can also add the functionality in here for the 'searchBar' component and pass the functionality in as a prop. this functionality has to filter the users which are in state after the api call is made

// you are also going to have another component which is going to display the employees - which you can pass in on the props - along with the functionality to handle sorting by name etc.

// in the component mentioned above you will have to dynamically display all of the employees/users in a table format

// you'll also have to consider css styling for these components
