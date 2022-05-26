import React, { useEffect, useState } from 'react';
import eventEmitter, { events } from '../events/eventEmitter';
import './counter-component.scss';

interface CounterComponentProps {
	id: number;
}

const CounterComponent = (props: CounterComponentProps) => {
	const [count, setCount] = useState<number>(0);
	const [counterEnabled, setCounterEnabled] = useState<boolean>(false);
	const [numberOfStarts, setNumberOfStarts] = useState<number>(0);

	const counterClicked = () => {
		eventEmitter.emit(events.stopCounter);
		setNumberOfStarts(numberOfStarts + 1);
		setCounterEnabled(true);
	};

	const runCount = () => {
		if (counterEnabled) {
			setTimeout(() => {
				setCount(count + 0.1);
			}, 100);
		}
	};

	const convertCountToTime = (): string => {
		var date = new Date(0);
		date.setSeconds(Math.floor(count));
		var timeString = date.toISOString().substr(11, 8);
		return timeString;
	};

	const onStopCounter = () => {
		setCounterEnabled(false);
	};

	const onReset = () => {
		setCounterEnabled(false);
		setCount(0);
		setNumberOfStarts(0);
	};

	const addListeners = () => {
		eventEmitter.addListener(events.stopCounter, () => onStopCounter());
		eventEmitter.addListener(events.reset, () => onReset());
	};

	const removeListeners = () => {
		eventEmitter.removeListener(events.stopCounter, () => onStopCounter());
		eventEmitter.removeListener(events.reset, () => onReset());
	};

	useEffect(() => {
		addListeners();

		if (counterEnabled) {
			document.getElementById(`counter-${props.id}`)!.className = 'counter-component-container-selected'
			runCount();
		} else {
			document.getElementById(`counter-${props.id}`)!.className = 'counter-component-container'
		}

		return () => {
			removeListeners();
		};
	}, [counterEnabled, count, numberOfStarts]);

	return (
		<div id={`counter-${props.id}`} className="counter-component-container" onClick={() => counterClicked()}>
			<h2 className='no-select' unselectable='off'>{props.id}</h2>
			<input className="name-input-label" type="text" defaultValue={props.id} onClick={(ev)=>{ev.stopPropagation()}} />
			<h2 className='no-select'>{convertCountToTime()}</h2>
			<h2 className='no-select'>{numberOfStarts}</h2>
		</div>
	);
};

export default CounterComponent;
