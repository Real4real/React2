import React from "react";

export default class AppText extends React.Component{
    state = {
        name: 'Vania'
    };
    onChangeState = (e) => {
        const newName = e.target.value;
        this.setState(()=>{
            return {
                name: newName
            };
        })
    };
    render() {
        return(
            <div>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" type="text" id="sample1"
                            onChange={this.onChangeState}
                    />
                    <label className="mdl-textfield__label" htmlFor="sample1">Text...</label>
                </div>
                <h2>Hello {this.state.name}</h2>
            </div>
        )
    };
}