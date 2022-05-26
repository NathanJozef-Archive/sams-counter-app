import React, { useEffect, useState } from 'react';
import CounterComponent from './components/counter-component';
import eventEmitter, { events } from './events/eventEmitter';

import './App.scss';

function App() {
	const [numberOfCounters, setNumberOfCounters] = useState<number>(1);

	const stopAll = () => {
		eventEmitter.emit(events.stopCounter);
	};

	const resetAll = () => {
		var confirmation = window.confirm('Are you sure you want to reset all the counters?\nEither Ok or Cancel');
		if (confirmation) {
			eventEmitter.emit(events.reset);
		}
	};

	const makeCounters = (): JSX.Element[] => {
		var allCounters: JSX.Element[] = [];
		for (let i = 0; i < numberOfCounters; i++) {
			allCounters.push(<CounterComponent key={i} id={i} />);
		}
		return allCounters;
	};

	useEffect(() => {
	}, [numberOfCounters]);

	return (
		<div className="app-container">
			<div className="title-container">
				<h1>Sam's Counter App</h1>
				<h3>by his good mate Nathan</h3>
				<h4 className="instruction-container">Just click on the grey box to start a counter</h4>
			</div>
			<div className="control-div">
				<div className="counter-controls">
					<h1
						className="control-add"
						onClick={() => {
							if (numberOfCounters > 1) {
								setNumberOfCounters(numberOfCounters - 1);
							}
						}}
					>
						-
					</h1>
					<h1
						className="control-add"
						onClick={() => {
							setNumberOfCounters(numberOfCounters + 1);
						}}
					>
						+
					</h1>
				</div>
			</div>
			<div className="counter-container">
				{makeCounters()}
			</div>
			<div className="control-div">
				<h1 className="control-text" onClick={() => stopAll()}>
					Stop All
				</h1>
				<h1 className="control-text" onClick={() => resetAll()}>
					Reset All
				</h1>
			</div>
		</div>
	);
}

export default App;
