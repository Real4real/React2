import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list.jsx';
import AppHeader from './components/app-header.jsx';
import SearchPanel from './components/search-panel.jsx';
import AppText from './components/app-text.jsx';
import StatusFilterList from "./components/item-status-filter-list.jsx";
import AddButton from "./components/add-form.jsx";

export default class App extends Component {
    maxId = 1;
    buttonId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Have a lunch'),
        ],
        buttonsArray: [
            this.createButtonItem('All'),
            this.createButtonItem('Active'),
            this.createButtonItem('Done'),
        ],
        term: ''

    };
    createTodoItem(label) {
        return {
            label,
            important: false,
            id: this.maxId++,
            done: false
        }
    };
    createButtonItem(label) {
        return {
            label,
            active: false,
            id: this.buttonId++,
        }
    };
    deleteItem = (id) => {
        this.setState(({todoData})=> {
            const idx = todoData.findIndex((el)=> el.id === id);

            const before = todoData.slice(0,idx);
            const after = todoData.slice(idx + 1);

            const newArray = [...before, ...after];
            return {
                todoData: newArray
            };
        })
    };
    addItem = (text) => {
      const newItem = this.createTodoItem(text);
      //   console.log("added", text)
      this.setState(({todoData})=> {
          const newArr = [...todoData, newItem];
          // const newAr = todoData.push(newItem);
          return {
              todoData: newArr
          }
      });

    };
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el)=> el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        const before = arr.slice(0,idx);
        const after = arr.slice(idx + 1);

        return [
            ...before,
            newItem,
            ...after];
    };
    toggleProperty2(arr, id, propName) {
        const idx = arr.findIndex((el)=> el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        const before = arr.slice(0,idx);
        const after = arr.slice(idx + 1);

        return [
            ...before,
            newItem,
            ...after];
    };
    onToggleDone = (id) => {
        this.setState(({todoData})=> {
             return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
        // console.log("Done", id)
    };
    onToggleImportant = (id) => {
        this.setState(({todoData})=> {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };
    onChangeStatusButton= (id) => {
        this.setState(({buttonsArray})=>{
           return {
                buttonsArray: this.toggleProperty2(buttonsArray, id, 'active')
           };
        });
    };
    search = (items, term) => {
        if (term.length === 0){
            return items;
        }
        return items.filter((item)=>{
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    };
    onSearchChange = (term) => {
        this.setState({term});
    };
    render() {
        const {term, todoData} = this.state;
        const visibleItems = this.search(todoData, term);
        const doneCount = this.state.todoData.filter((el)=> el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        return (
            <div>
                <AppText/>
                <AppHeader
                    done={doneCount}
                    toDo={todoCount}/>
                <SearchPanel
                    onSearchChange={this.onSearchChange}
                />
                <StatusFilterList
                    buttonsArray={this.state.buttonsArray}
                    onChangeStatusButton={this.onChangeStatusButton}
                />
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <AddButton
                    addItem={this.addItem}
                />
            </div>
        );
    }
};
ReactDOM.render(<App/>, document.getElementById('root'));