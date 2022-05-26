import React, { useEffect, useState } from 'react';
import eventEmitter, { events } from '../events/eventEmitter';
import './counter-component.scss';

interface CounterComponentProps {
	name: string;
}

const CounterComponent = (props: CounterComponentProps) => {
	const [count, setCount] = useState<number>(0);
	const [counterEnabled, setCounterEnabled] = useState<boolean>(false);

	const counterClicked = () => {
		eventEmitter.emit(events.stopCounter);
		setCounterEnabled(true);
	};

	const runCount = () => {
		if (counterEnabled) {
			setTimeout(() => {
				setCount(count + 0.1);
			}, 100);
		}
	};

	useEffect(() => {
		eventEmitter.addListener(events.stopCounter, () => {
			setCounterEnabled(false);
		});

		if (counterEnabled) {
			runCount();
		}

		return () => {
			eventEmitter.removeListener(events.stopCounter);
		};
	}, [counterEnabled, count]);

	return (
		<div className="counter-component-container" onClick={() => counterClicked()}>
			<h2>{props.name}</h2>
			<h2>{Math.floor(count)}</h2>
		</div>
	);
};

export default CounterComponent;
