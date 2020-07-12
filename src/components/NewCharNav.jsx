
import React from 'react';
import { Link } from "react-router-dom";
import { Drawer } from 'antd';
import Modlist from './Modlist'

function NewCharNav (props){
    const [visible, setVisible] = React.useState(false);
    const showDrawer = () => {
    setVisible(true);
    
    };
    const onClose = () => {
    setVisible(false);
    };

return (
    <React.Fragment>
        <li><Link class="purple" onClick={showDrawer}>Character Modifiers</Link></li>
        <li><a class="orange" href="#ac">AC</a></li>
        <li><a class="cyan" href="#base_saves">Saves</a></li>
        <li><a class="red" href="#bab">B.A.B</a></li>
        <li><a class="green" href="#speed">Speed</a></li>
        <li><a class="blue" href="#skills">Skills</a></li>
        <Drawer
        title="Caster Level check to overcome SR "
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="40vw"
      >
        <Modlist/>
      </Drawer>
      
    </React.Fragment>
);
}
export default NewCharNav;
