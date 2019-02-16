import React from "react";

export default class TodoListItemClass extends React.Component{
    render() {
        const {label, onDeleted,
                onToggleDone, onToggleImportant,
                done, important} = this.props;

        let classNames = '';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        return (
            <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-avatar">person</i>
                <span className={classNames}
                    onClick={onToggleDone}
                    >
                    {label}</span>
                    <div className="imgIcon3">
                        <svg
                            onClick={onDeleted}

                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path opacity=".3" d="M16 9H8v10h8V9zm-.47 7.12l-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12z"/><path d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>

                        <svg
                            onClick={onToggleImportant}
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path opacity=".3" d="M7 17.97l5-2.15 5 2.15V5H7z"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97l-5-2.14-5 2.14V5h10v12.97z"/></svg>
                    </div>
                </span>
        )
    };

}
