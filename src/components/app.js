// import React from 'react'
// import ReactDOM from 'react-dom'


// export class AddQuote extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { quotes: [],items:'' }
    
//     this.handleAdd=this.handleAdd.bind(this);
//   }

//   handleAdd() {

//     // const 
//     this.setState({
//         quotes: [
//         ...this.state.quotes,
        
//       ]
//     });
//   }

//   handleRemove(i) {
//     let newItems = this.state.quotes.slice();
//     newItems.splice(i, 1);
//     this.setState({ quotes: newItems});
//   }
  
//   render() {
//     return (
//       <div className='container'>
//         <div>  
//         <input type="text" placeholder="Quote" id="field" name="quotes" 
//                  value={this.state.items} onChange={this.handleAdd}
//                  />
//             <button onClick={() => this.handleAdd()}>Add Item</button>
//         </div>
        
//         <div>
//           {this.state.quotes.map((item, i) => (
//             <div key={item}>
//               <div>
//                 {`${item} `}
//                 <button onClick={() => this.handleRemove(i)}>
//                   &times;
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
          
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//     <AddQuote />,
//      document.getElementById('root')
//     )