import React, { useState } from "react";
import "../App.css";

const Counter = () => {
	const [count, setCount] = useState<number>(0);

	const lesserCountHandler = () => {
		setCount((prevCounter: number) => prevCounter - 1);
	};

	const increaseCountHandler = () => {
		setCount((prevCounter: number) => prevCounter + 1);
	};

	return (
		<div>
			<div className="counter">
				<button onClick={lesserCountHandler} type="button">
					-
				</button>

				<h2>{count}</h2>
				<button onClick={increaseCountHandler} type="button">
					+
				</button>
			</div>

			<div className="reset">
				<button
					onClick={() => {
						setCount(0);
					}}
					type="button"
				>
					Reset to 0
				</button>
			</div>
		</div>
	);
};

export default Counter;
