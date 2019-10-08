import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
//import uuid from 'uuid';
import axios from 'axios';



class App extends React.Component {
  state = {
    todos: [
      /*{
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with five',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }*/
    ]
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}));
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id ){
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  // Delete Item 
  deleteTodo = (id) => {
    
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    //this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  
  // Add item 
  addTodo = (title) => {
    /*const newTodo = {
      id: uuid.v4(), 
      title,
      complete: false
    }
    this.setState({todos: [...this.state.todos, newTodo] });*/
    axios.post('https://jsonplaceholder.typicode.com/todos', { 
      title, 
      completed: false
    })
      .then(res => this.setState({todos: [...this.state.todos, res.data] }));
  }

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <div className="content-area row">
                <div className="col-xs-8 col-xs-offset-2">  
                  <h2>To-do List</h2>
                  <div className="App">
                  <AddTodo addTodo={this.addTodo} />
                    <ul className="list-group" id="taskList">
                      <Todos todos={this.state.todos} 
                        markComplete={this.markComplete}
                        deleteTodo={this.deleteTodo}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
        </Router>
    );
  }
}

export default App;
