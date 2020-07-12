import React from 'react';
import { Collapse, Switch, Button } from 'antd';

const { Panel } = Collapse;

function CasterMods (props){
    return (
        <Collapse expandIconPosition = {'right'}>
        <Panel header={props.modName} extra={<span onClick={event => {event.stopPropagation();}}>
            <Switch id={props.modId} onChange={props.onChange(props.modId, props.modName, props.modValue, props.modDesc)} defaultChecked={props.modSum} checkedChildren={props.modValue} unCheckedChildren={props.modValue}></Switch></span>}>
            <div>{props.modDesc} <div><Button>Remove</Button></div></div>
        </Panel>
        </Collapse>
    );
}

export default CasterMods;