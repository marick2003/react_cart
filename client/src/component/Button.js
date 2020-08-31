import React from "react";
export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:this.props.list,
        }
    }
    handleClick(){

    };
    render(){
        const className = [
            "component-button",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : "",
          ];
        return (
            <div className={className.join(" ").trim()}>
              <button onClick={this.handleClick}>{this.props.list.title}</button>
            </div>
        );
    }
}