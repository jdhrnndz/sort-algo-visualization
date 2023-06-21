import React from 'react';

function renderOptions(options, setValue) {
    return Object.entries(options).map(([key, value]) => (
        <span className="dropdown__item" key={key} onClick={() => setValue(key)}>{value.title}</span>
    ));
}

function TextSelect(props) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className={`dropdown ${expanded && 'dropdown--expanded'}`}
            tabIndex={props.tabIndex}
            onClick={() => setExpanded(!expanded)}
            onBlur={() => setExpanded(false)}
        >
            <span className="dropdown__item--selected">{props.options[props.value].title}</span>
            {
                expanded
                &&
                <div className="dropdown__options">
                    {renderOptions(props.options, props.setValue)}
                </div>
            }
        </div>
    );
}

export default TextSelect;
