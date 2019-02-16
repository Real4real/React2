import React,{Component} from "react";

export default class AddButton extends Component{
    state = {
        label: ''
    };
    onLabelChange = (e)=> {
        this.setState({
           label: e.target.value
        });
    };
    onSubmit = (e)=> {
      e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        });
    };
    render (){
        return (
            <div>
                <form
                    className=""
                    onSubmit={this.onSubmit}
                >
                    <button
                        className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                        <i className="material-icons">add</i>
                    </button>
                    <div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="sample1"
                                   onChange={this.onLabelChange}
                                   value={this.state.label}
                            />
                            <label className="mdl-textfield__label" htmlFor="sample1">Name of new item</label>
                        </div>
                    </div>
                </form>
            </div>

        );
    };
}
