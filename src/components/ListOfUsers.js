import React, { Component } from "react";
import API from "../utils/API";
import NavBar from "./NavBar";
import TableBody from "./TableBody";

export default class ListOfUsers extends Component {
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}]
  }

  labels = [
    { name: "Image", width: "30%" },
    { name: "Name", width: "40%" },
    { name: "Phone", width: "30%" },
  ]

  handleSort = orderedList => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }

    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[orderedList] === undefined) {
          return 1;
        } else if (b[orderedList] === undefined) {
          return -1;
        }
        else if (orderedList === "name") {
          return a[orderedList].first.localeCompare(b[orderedList].first);
        } else {
          return a[orderedList] - b[orderedList];
        }
      } else {
        if (a[orderedList] === undefined) {
          return 1;
        } else if (b[orderedList] === undefined) {
          return -1;
        }
        else if (orderedList === "name") {
          return b[orderedList].first.localeCompare(a[orderedList].first);
        } else {
          return b[orderedList] - a[orderedList];
        }
      }

    }
    const sorted = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sorted });
  }

  handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }

  componentDidMount() {
    API.getUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        <NavBar handleSearchChange={this.handleSearchChange} />
        <div className="table-body">
          <TableBody
            labels={this.labels}
            users={this.state.filteredUsers}
            handleSort={this.handleSort}
          />
        </div>
      </>
    );
  }
}
