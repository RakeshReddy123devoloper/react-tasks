import React from "react";
import axios from "axios";
import Child from "../buttoncards/child";
import Loader from "./spinner";
class Update extends React.Component {
  constructor() {
    super();
    this.state = { count: 0, product: null };
  }
  componentDidUpdate(prvsprops, prevState) {
    console.log(this.state.count)
    if (prevState.count !== this.state.count) {
      console.log("component value updated");
      axios
        .get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then((res) => {
          this.setState({ product: res.data });
        });
      //   fetch(`https://fakestoreapi.com/products/${this.state.count}`)
      //   .then((res) => res.json())
      //   .then((json) => {
      //     this.setState({ product: this.state.count });
      //   });
    }

  }

  shouldComponentUpdate(nextprops, nextState) {
    if (this.state.count >= 10) {
      return false;
    } else {
      return true;
    }
  }

  getSnapshotBeforeUpdate(prvsprops, prevState) {
    // console.log(prevState, "snapshot");
    return null;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  click0 = () => {
   this.setState({count:1})
    // else {
    //   this.decrement();
    // }
  };
  click2 = () => {

    this.setState({count:2})

  };
  click3 = () => {
    this.setState({count:3})
    // else {
    //   this.decrement();
    // }
  };

  click4 = () => {
    this.setState({count:4})
    // else {
    //   this.decrement();
    // }
  };

  click5 = () => {
    this.setState({count:5})
    // else {
    //   this.decrement();
    // }
  };

  click6 = () => {
    this.setState({count:6})
    // else {
    //   this.decrement();
    // }
  };

  click7 = () => {
    this.setState({count:7})
    // else {
    //   this.decrement();
    // }
  };

  click8 = () => {
    this.setState({count:8})
    //  else {
    //   this.decrement();
    // }
  };

  click9 = () => {
    this.setState({count:9})
    // else {
    //   this.decrement();
    // }
  };

  click10 = () => {
    this.setState({count:1})
    // else {
    //   this.decrement();
    // }
  };

  render() {
    const { count, product } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h1 style={{textAlign:"center", marginTop:"20vh"}}>spinner task 11</h1>
        <div>
          <h1>{count}</h1>
          <button onClick={this.increment}>next</button>
          <button onClick={this.decrement} disabled={count <= 0}>
            previous
          </button>
          <button onClick={this.click0}>1</button>
          <button onClick={this.click2}>2</button>
          <button onClick={this.click3}>3</button>
          <button onClick={this.click4}>4</button>
          <button onClick={this.click5}>5</button>
          <button onClick={this.click6}>6</button>
          <button onClick={this.click7}>7</button>
          <button onClick={this.click8}>8</button>
          <button onClick={this.click9}>9</button>
          <button onClick={this.click10}>10</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {!product ? (
            <Loader />

          ) : (
            // <Child
            //   img={product.img}
            //   title={product.title}
            //   desc={product.description}
            //   cat={product.category}
            // />
            <Child
              img={product.image}
              title={product.title}
              desc={product.description}
              cat={product.category}
            />
          )}
        </div>

      </div>
    );
  }
}

export default Update;




