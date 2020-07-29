import React, {Component} from 'react'

class TodoEntry extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { active : this.props.active };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active : !this.state.active
        })
    }

    render() {
        return (
            <li className={`${this.state.active ? "" : "completed"}`}>
                <div className={"view"}>
                    <input type={"checkbox"} className={"toggle"} value={"checked"} defaultChecked={!this.state.active} onClick={()=>this.handleClick()}/>
                    <label>{this.props.title}</label>
                    <button className={"destroy"} />
                </div>
            </li>
        );
    }
}

export default TodoEntry