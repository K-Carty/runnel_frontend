import React, { Component } from "react";

import axios from "axios";

export default class Runnel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    runnels:[],
    };
    this.loadRunnels = this.loadRunnels.bind(this);
  }

  componentWillMount() {
    this.loadRunnels();
  }

  async loadRunnels()
  {
    const promise = await axios.get("http://localhost:3001/");
    const status = promise.status;
    if(status===200)
    {
      const data = promise.data;
      this.setState({runnels:data});
    }
  }

  render() {
    return(
      <div>
        <h1>Runnels</h1>
            {this.state.runnels.map((value,index)=>{return <h4 key={index}>{value}</h4>})}
      </div>
    )
  }
}