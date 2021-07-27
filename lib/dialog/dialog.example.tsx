import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "./dialog";

const DialogExample: React.FunctionComponent = () => {
	const [x, setX] = useState(false);
	const openModal = () => {
		const close = modal(
			<h1>
				你好
				<button onClick={() => close()}>close</button>
			</h1>
		);
	};
	return (
		<div>
			<div>
				<h1>example1</h1>
				<button onClick={_ => setX(!x)}>click</button>
				<Dialog
					visible={x}
					children={"xxx"}
					buttons={[<button>1</button>, <button>2</button>]}
					onClose={_ => setX(false)}
					closeOnClickMask={false}
				/>
			</div>
			<div>
				<h1>example 2</h1>
				<button onClick={_ => alert("1")}>alert</button>
				<button
					onClick={() =>
						confirm(
							"1",
							() => {
								console.log("你点击了yes");
							},
							() => {
								console.log("你点击了no");
							}
						)
					}
				>
					confirm
				</button>
				<button onClick={openModal}>modal</button>
			</div>
		</div>
	);
};

export default DialogExample;
