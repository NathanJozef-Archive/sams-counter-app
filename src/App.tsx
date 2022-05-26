import React from 'react';
import CounterComponent from './components/counter-component';
import eventEmitter, { events } from './events/eventEmitter';

import './App.scss';

function App() {
	const stopAll = () => {
		eventEmitter.emit(events.stopCounter);
	};

	return (
		<div className="app-container">
			<div className="title-container">
				<h1>Sam's Counter App</h1>
				<h3>by his good mate Nathan</h3>
				<h4 className='instruction-container'>Just click on the grey box to start a counter</h4>
			</div>
			<div className="counter-container">
				<CounterComponent name={'Alpha'}></CounterComponent>
				<CounterComponent name={'Bravo'}></CounterComponent>
				<CounterComponent name={'Charlie'}></CounterComponent>
				<CounterComponent name={'Delta'}></CounterComponent>
				<CounterComponent name={'Echo'}></CounterComponent>
				<CounterComponent name={'Foxtrot'}></CounterComponent>
				<CounterComponent name={'Golf'}></CounterComponent>
				<CounterComponent name={'Hotel'}></CounterComponent>
				<CounterComponent name={'India'}></CounterComponent>
				<CounterComponent name={'Juliet'}></CounterComponent>
				<CounterComponent name={'Kilo'}></CounterComponent>
				<div className="stop-all-div" onClick={() => stopAll()}>
					<h1 className="stop-all-text">Stop All</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
