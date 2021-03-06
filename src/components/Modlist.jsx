import React from "react";
import CasterMods from "./CasterMods";
import { Collapse, Card, Typography, Input, Button } from "antd";
import axios from "../axios";

const { Title } = Typography;
const { TextArea } = Input;

function Modlist() {
  const [externalMods, changeState] = React.useState([]);
  const [modifier, editModifier] = React.useState({
    name: "",
    mod: 0,
    sum: true,
    descr: "",
  });

  const fetchFromServer = () => {
    axios.get("/casterModsSR.json").then(response => {
      const fetchedMods = [];
      for (let key in response.data) {
        fetchedMods.push({
          ...response.data[key],
          id: key,
        });
      }
      changeState(fetchedMods);
    });
  };

  React.useEffect(function () {
    fetchFromServer();
  }, []);

  const handleSwitchChange = (modId, modName, modValue, modDesc) => {
    return function (e) {
      axios
        .put(`casterModsSR/${modId}.json`, {
          name: modName,
          mod: modValue,
          descr: modDesc,
          sum: e,
        })
        .then(() => {
          fetchFromServer();
        });
    };
  };
  const handleDelete = modId => {
    return function () {
      axios.delete(`casterModsSR/${modId}.json`).then(() => {
        fetchFromServer();
      });
    };
  };

  let renderModifiers = null;
  if (externalMods) {
    renderModifiers = externalMods.map(mods => {
      return (
        <CasterMods
          modName={mods.name}
          modValue={mods.mod}
          modDesc={mods.descr}
          modSum={mods.sum}
          modId={mods.id}
          onChange={handleSwitchChange}
          onClick={handleDelete}
          key={mods.id}
        />
      );
    });
  }

  let sumTotal = function () {
    return externalMods.reduce(function (previousValue, currentValue) {
      if (currentValue.sum) {
        return previousValue + parseInt(currentValue.mod);
      } else {
        return previousValue;
      }
    }, 0);
  };
  const sendForm = function (event) {
    event.preventDefault();
    if (!modifier.name || !modifier.mod) {
      console.error("Missing data");
    } else {
      const modData = {
        name: modifier.name,
        mod: modifier.mod,
        sum: modifier.sum,
        descr: modifier.descr,
      };
      axios
        .post("/casterModsSR.json", modData)
        .then(() => {
          fetchFromServer();
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  const handleChangename = function (event) {
    editModifier({ ...modifier, name: event.target.value });
  };
  const handleChangemod = function (event) {
    editModifier({ ...modifier, mod: event.target.value });
  };
  const handleChangedescr = function (event) {
    editModifier({ ...modifier, descr: event.target.value });
  };
  return (
    <div>
      <Card size="small">
        <Title level={4}>
          Your total Caster Level modifier is: {sumTotal()}
        </Title>
      </Card>
      <Collapse>{renderModifiers}</Collapse>
      <form onSubmit={sendForm} className="addnew">
        <div>
          <Input
            allowClear
            placeholder="Add modifier"
            onChange={handleChangename}
            value={modifier.name}
          />
          <div className="ant-input-number">
            <div className="ant-input-number-input-wrap">
              <input
                type="number"
                placeholder="0"
                onChange={handleChangemod}
                value={modifier.mod}
                className="ant-input-number-input"
              />
            </div>
          </div>
          <Button htmlType="submit">Add</Button>
        </div>
        <TextArea
          allowClear
          rows={2}
          value={modifier.descr}
          onChange={handleChangedescr}
          placeholder="A description if you'd like"
        />
      </form>
    </div>
  );
}
export default Modlist;
