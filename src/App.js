import React, {Component} from 'react';
import {observer} from 'mobx-react'
import './App.css';
import todoStore from "./stores/TodoStore";
import TodoEntry from './components/TodoEntry'

@observer
class App extends Component {
    render() {
        return (
            <div className={"todoapp"} id={"todoapp"}>
                <header className={"header"}>
                    <h1>todo</h1>
                    <input
                        type={"text"}
                        className={"new-todo"}
                        placeholder={"What need to be done?"}
                    />
                </header>
                <section className={"main"}>
                    <ul className={"todo-list"}>
                        <TodoEntry active={true} title={"new task"} />
                        <TodoEntry active={false} title={"old task"} />
                    </ul>
                </section>
            </div>
        );
    }
}


export default App;
