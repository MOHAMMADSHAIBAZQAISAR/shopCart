import React from 'react';

class Car extends React.Component {
    //a prop is being used. And we used the this.State obj
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  // the change color function is colling the setState function, the setState func wil lcompare the code,
  // of virtual dom with real-dom, and if any changes, then it will update them.
//   changeColor = () => {
//     this.state.color = "green"
//     this.setState({});
//   }
//the change color is calle by button.
changeColor = () =>{
    this.setState({color: "blue"});
    // this.setState.color = 'green'; //it will not ref the changes, for that need to call the setState fun.
    // this.setState({});
}
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

export default Car