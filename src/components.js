import { Component } from "react";
export class Wordcount extends Component{
  constructor(){
    super()
    this.state={words:null};
  }
  getwordcount=(event)=>{
    const p=event.target.value;
    var num=p.trim().split(/\s+/);
    this.setState({
      words:num.length
    })
  }
  render(){
    return(
      <div id="container">
        <div id="main">
          <h1>Responsive Paragraph Word Counter</h1>
          <textarea onChange={this.getwordcount} rows={10} placeholder="Enter Your Text ...."/>
          <p>word count:{this.state.words}</p>
        </div>
      </div>
    )
  }

}