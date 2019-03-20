import React from 'react';

class TodoItem extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    onDeleteItemClick(index){
        this.props.delete(index); // 触发执行delete函数
    }

    render(){
        return(
            <li key={this.props.index} onClick={this.onDeleteItemClick.bind(this,this.props.index)}>{this.props.item}</li>
        )
    }
}

export default TodoItem;