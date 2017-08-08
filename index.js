'use strict'

const Rx = require('rx-lite')
const eventsAPI = require('@slack/events-api')

const wrapAdapter = adapter => new Proxy(adapter, {
  get(target, key) {
    if (key === 'on') {
      return (event, cb) => {
        if (cb) return Rx.Observable.fromEvent(target, event).subscribe(cb)
        else return Rx.Observable.fromEvent(target, event)
      }
    } else return target[key]
  },
})

const createSlackEventAdapter = token =>
  wrapAdapter(eventsAPI.createSlackEventAdapter(token))

module.exports = {
  createSlackEventAdapter,
}
