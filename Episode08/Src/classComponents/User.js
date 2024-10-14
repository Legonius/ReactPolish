import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return <h1>I'm {name}</h1>;
  }
}
export default User;
