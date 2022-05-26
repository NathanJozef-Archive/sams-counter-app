import EventEmitter from 'eventemitter3'

export const events = { stopCounter: 'STOP_COUNT', reset: 'APP_RESET' }

const eventEmitter = new EventEmitter()

export default eventEmitter