import React from 'react';
import ReactDOM from 'react-dom';
import * as FontAwesome from 'react-icons/lib/fa';

  export class QuoteApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], quotes: '' ,edit:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div>
          {/* <div items={this.state.items} ></div> */}
          <form className="form" onSubmit={this.handleSubmit}>
            <div>
              <h2><q>Quotes</q></h2>
                <input
                  id="quote"
                  onChange={this.handleChange}
                  value={this.state.quotes} placeholder="Enter Quote"/>
                <br/>
                <br/>
                <button id="add">
                  Add Quote
                </button>
              </div>
          </form>
         <section>
         <hr/>
          <div id="textDisplay">
            {this.state.items.map((item, i) => (
                <div className="content" key={item.id}>
                  <div>
                    {`${item.quotes} `}
                    <button onClick={() => this.handleRemove(i)}>
                        <FontAwesome.FaTrash/>
                    </button>
                    <button onClick={() => this.handleEdit(item.id)}>
                    <FontAwesome.FaEdit/>
                    </button>
                    <button onClick={() => this.handleIncrement(i)}>
                    <FontAwesome.FaThumbsOUp/>
                    </button>
                  </div>
                </div>
              ))}
          </div> 
        </section>
        </div>
      );
    }

    handleRemove(i) {
      let newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({ items: newItems});
    }

    handleEdit(i){
      
      console.log(this.state.edit);
      if(this.state.items.find(quote => quote.id==i)){      
          this.state.edit=this.state.items.filter(quote=>quote.id==i);
          console.log(this.state.items.filter(quote=>quote.id==i));
          alert(this.state.edit);
        return this.state.edit;
      }
    }
    
    handleIncrement(){
      alert("Thank you");
    }

    handleChange(e) {
      this.setState({ quotes: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.quotes.length) {
        return;
      }
      const newItem = {
        quotes: this.state.quotes,
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        quotes: ''
      }));
    }
  }

 ReactDOM.render(<QuoteApp/>, root);








