import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Mount: call API");
    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("update", prevState);

    // this is only ways to act like dependency array
    if (this.state.count !== prevState.count) {
      console.log("count is changed");
    }
  }
  componentWillUnmount() {
    console.log("unmount");
    //clean up timer
    clearInterval(this.timer);
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>I'm {name}</h1>
        <p>Count: {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Counter
        </button>
        <button onClick={() => this.setState({ count: count - 1 })}>
          Decrease
        </button>
      </div>
    );
  }
}
export default User;
