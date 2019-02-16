import React from "react";
import StatusFilterClass from './item-status-filter.jsx';


const StatusFilterList = ({buttonsArray,onChangeStatusButton}) => {
    const elements = buttonsArray.map((item) =>{
        const {id, ...itemProps} = item;
        return (
            <li className="mdl-list__item" key={id}>
                <StatusFilterClass
                    {...itemProps }
                    onChangeStatusButton={()=> onChangeStatusButton(id)}
                />
            </li>
        );
    });
    return (
        <div className="">
            {elements}
        </div>
    );
};

export default StatusFilterList;