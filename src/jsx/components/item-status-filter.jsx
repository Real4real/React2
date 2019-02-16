import React,{Component} from "react";

export default class StatusFilterClass extends Component{
    render() {
        const {label, active, onChangeStatusButton} = this.props;
        let classN = 'mdl-button mdl-js-button mdl-button--raised';

        if (active) {
            classN += ' mdl-button--colored';
        }

        return (
            <div>
                <button className = {classN}
                        onClick={onChangeStatusButton}
                >
                    {label}
                </button>

            </div>
        );
    };
}
