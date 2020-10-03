import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { view } from "@risingstack/react-easy-state";
import myStore from "../../store";
class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    const chosenObject = myStore.contacts.filter(
      (contact) => contact.id === Number(id)
    );
    this.setState({
      name: chosenObject[0].name,
      email: chosenObject[0].email,
      phone: chosenObject[0].phone,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }
    const { id } = this.props.match.params;

    const updContact = {
      name,
      email,
      phone,
      id: Number(id),
    };
    //// UPDATE CONTACT ////
    myStore.contacts = myStore.contacts.filter(
      (contact) => contact.id !== Number(id)
    );
    myStore.contacts.splice(Number(id) - 1, 0, updContact);
    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default view(EditContact);
