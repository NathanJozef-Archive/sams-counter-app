import EventEmitter from 'eventemitter3'

export const events = { stopCounter: 'STOP_COUNT' }

const eventEmitter = new EventEmitter()

export default eventEmitter