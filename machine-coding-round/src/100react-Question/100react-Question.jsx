// import React from 'react'

// export default function Question() {
//   return (
//     <div>100react-Question</div>
//   )
// }


import React, { Component } from 'react'

export default class Question extends Component {
state = {count : 0};

increment = () =>{
  this.setState({count: this.state.count + 1})
}

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>click</button>
        
      </div>
    )
  }
}
