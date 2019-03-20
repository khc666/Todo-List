import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       list: ['html','css','javascript'],
       inputValue: ''
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
    // this.onHandelDeleteClick = this.onHandelDeleteClick.bind(this);
  }

  onHandleChange(e){
      this.setState({
        inputValue: e.target.value
      });
  }

  onHandleClick(){
      // let list = this.state.list;
      // list.push(this.state.inputValue);
      const list = [...this.state.list, this.state.inputValue];

      this.setState({
        list,
        inputValue: ''
      });
  }

  onHandelDeleteClick(index){
     let list = [...this.state.list];
     list.splice(index,1);
     this.setState({list});
  }
 
  getToListItem(){
     return this.state.list.map( (item,index) =>{
        // 子组件与父组件通讯, 定义一个方法属性，如：delete并绑定对应事件处理函数(onHandelDeleteClick)，当delete事件触发时回调执行事件处理函数(onHandelDeleteClick)
        return <TodoItem key={index} index={index} item={item} delete={this.onHandelDeleteClick.bind(this,index)}/>
      } )
  }

  render() {
    return (
      <div>
          <input  type='text' value={this.state.inputValue} onChange={this.onHandleChange}/><button onClick={this.onHandleClick}>添加</button>
          <ul>
            {this.getToListItem()}
          </ul>
      </div>
    );
  }
}

export default TodoList;
