import React from 'react';

function update(){
  var rows=[];
}

function display(){

}

class AddQuote extends React.Component{
  constructor(props){
    super(props)
    this.state={
      quotes:'',
    }

    this.handleItemChange=this.handleItemChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleItemChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
      
  handleSubmit(event){
    event.preventDefault();
    alert(this.state.quotes);
    return <h1>{this.state.quotes}</h1>;
  }

  render(){
    return(
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <strong id="quote">"Quotes"</strong>
          <input type="text" placeholder="Quote" id="field" name="quotes" 
                 value={this.state.quotes} onChange={this.handleItemChange}
                 />
          <hr/>
          <input type="submit" value="Add Quote" id="submit"/>
        </form>
        <p></p>
      </div>
    );
  }
}

export default AddQuote;