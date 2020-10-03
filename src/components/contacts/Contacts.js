import React, { Component } from "react";
import Contact from "./Contact";
import { view } from "@risingstack/react-easy-state";
import myStore from "../../store";
class Contacts extends Component {
  render() {
    const { contacts } = myStore;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default view(Contacts);
