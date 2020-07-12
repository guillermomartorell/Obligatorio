import React from "react";
import CasterMods from "./CasterMods";
import { Collapse, Card, Typography, Input, Button } from "antd";
const { Title } = Typography;

function Modlist() {
	const [externalMods, changeState] = React.useState([]);
	const [modifier, editModifier] = React.useState({
		id: "",
		name: "",
		mod: 0,
		sum: true,
		descr: "",
	});

	let fetchFromServer = () => {
		fetch("http://localhost:4000/casterModsSR")
			.then(function (response) {
				return response.json();
			})
			.then(function (responseJSON) {
				changeState(responseJSON);
			});
	}

	React.useEffect(function () {
		fetchFromServer();
	}, []);

	const handleSwitchChange = (modId, modName, modValue, modDesc) => {
		return function (e) {
			fetch(`http://localhost:4000/casterModsSR/${modId}`, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "PUT",
				body: JSON.stringify({
					'id': modId,
					'name': modName,
					'mod': modValue,
					'sum': e,
					'descr': modDesc,
				})
			})
				.then(() => {
					fetchFromServer()
				}
				);
		}
	}
	const renderModifiers = externalMods.map(function (mods) {
		return (
			<CasterMods
				modName={mods.name}
				modValue={mods.mod}
				modDesc={mods.descr}
				modSum={mods.sum}
				modId={mods.id}
				onChange={handleSwitchChange}
			/>
		);

	});
	let sumTotal = function () {
		return externalMods.reduce(function (previousValue, currentValue) {
			if (currentValue.sum) {
				return previousValue + parseInt(currentValue.mod)
			} else { return previousValue; }
		}, 0)
	}
	const sendForm = function (event) {
		event.preventDefault();
		if (!modifier.name || !modifier.mod) {
			console.error("Missing data");
		} else {

			fetch("http://localhost:4000/casterModsSR", {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(modifier),
			});
			changeState([...externalMods, modifier])
		}
	};
	const handleChangename = function (event) {
		editModifier({ ...modifier, name: event.target.value });
	};
	const handleChangemod = function (event) {
		editModifier({ ...modifier, mod: event.target.value });
	};
	return (
		<div>
			<Card size="small">
				<Title level={4}>Your total Caster Level modifier is: {sumTotal()}</Title>
			</Card>
			<Collapse>{renderModifiers}</Collapse>
			<form onSubmit={sendForm} className="addnew">
				<Input
					allowClear
					placeholder="Add modifier"
					onChange={handleChangename}
					value={modifier.name}
				/>
				<div className="ant-input-number">
					<div className="ant-input-number-input-wrap">
						<input
							allowClear
							type="number"
							placeholder="0"
							onChange={handleChangemod}
							value={modifier.mod}
							class="ant-input-number-input"
							autocomplete="off"
						/>
					</div>
				</div>
				<Button htmlType="submit">Add</Button>
			</form>
		</div>
	);
}
export default Modlist;