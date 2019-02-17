import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const getResource = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
};
getResource('https://swapi.co/api/people/1/')
    .then((body)=>{
       console.log(body);
    });

export default class App extends Component {

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary">Primary</button>
            </div>
        );
    }
};
ReactDOM.render(<App/>, document.getElementById('root'));