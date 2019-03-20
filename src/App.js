import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       list: ['html','css','js','vue'],
       inputValue: ''
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleChange(e){
      this.setState({
        inputValue: e.target.value
      });
  }

  onHandleClick(){
      let list = this.state.list;
      list.push(this.state.inputValue);

      this.setState({
        list,
        inputValue: ''
      });
  }

  render() {
    return (
      <div>
          <input  type='text' value={this.state.inputValue} onChange={this.onHandleChange}/><button onClick={this.onHandleClick}>添加</button>
          <ul>
            {
              this.state.list.map( (item,index) =>{
                return <li key={index}>{item}</li>
              } )
            }
          </ul>
      </div>
    );
  }
}

export default App;
