import React from 'react';

function NewCharSkill (props){

return (
    <React.Fragment>
        <input type="checkbox" name="" id=""/>
        <span className="field_title larger">{props.skillName}</span>
        <input type="number" name="" id=""/>
        <span className="field_title larger">={props.skillAttr}</span>
        <input type="number" name="" id=""/>
        <span className="field_title larger">+</span>
        <input type="number" name="" id=""/>
        <span className="field_title larger">+</span>
        <input type="number" name="" id=""/>
    </React.Fragment>
    
);
}
export default NewCharSkill;
