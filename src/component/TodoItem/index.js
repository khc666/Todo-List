import React from 'react';

class TodoItem extends React.Component{
    constructor(props) {
        super(props);
        this.onDeleteItemClick = this.onDeleteItemClick.bind(this);
    }

    onDeleteItemClick(index){
        this.props.delete(index); // 触发执行delete函数
    }

    render(){
        return(
            <li className='list-item' key={this.props.index} onClick={this.onDeleteItemClick}>{this.props.item}</li>
        )
    }
}

export default TodoItem;