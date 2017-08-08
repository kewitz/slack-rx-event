'use strict'

const assert = require('assert')
const Rx = require('rx-lite')
const slackRx = require('~/index.js')

const TOKEN = 'FAKE'

describe('Reactive interface', () => {
  it('should return an Rx.Observable from the EventEmitter', () => {
    const adapter = slackRx.createSlackEventAdapter(TOKEN)

    const osbervable = adapter.on('error')

    assert(osbervable instanceof Rx.Observable, 'Should be an instance of Rx.Observalble')
  })

  it('should subscribe the event normally if a Callback is supplied', done => {
    const adapter = slackRx.createSlackEventAdapter(TOKEN)

    adapter.on('event', done)

    adapter.emit('event')
  })
})
