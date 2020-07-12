
import React from 'react';
import { Drawer } from 'antd';
import Modlist from './Modlist'

function NewCharNav(props) {
  const [visible, setVisible] = React.useState(false);
  const showDrawer = () => {
    setVisible(true);

  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <React.Fragment>
      <li><a className="purple"  href="#character_sheet_details" onClick={showDrawer}>Character Modifiers</a></li>
      <li><a className="orange" href="#ac">AC</a></li>
      <li><a className="cyan" href="#base_saves">Saves</a></li>
      <li><a className="red" href="#bab">B.A.B</a></li>
      <li><a className="green" href="#speed">Speed</a></li>
      <li><a className="blue" href="#skills">Skills</a></li>
      <Drawer
        title="Caster Level check to overcome SR "
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="33vw"
      >
        <Modlist />
      </Drawer>

    </React.Fragment>
  );
}
export default NewCharNav;
