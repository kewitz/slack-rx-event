'use strict'

const glob = require('glob')
const slackRx = require('~/index.js')

const adapter = slackRx.createSlackEventAdapter('Believe me, this is a token.')
const handlers = glob.sync('./handlers/*.js', { cwd: __dirname })

handlers.forEach(handler => {
  require(handler)(adapter)
})

adapter.emit('message', {
  body: 'What are you trying to say? Just say it already.',
  channel: '#general',
  user: 'Joe',
})

for (let i = 0; i < 3; i++) {
  adapter.emit('reaction', {
    emoji: '¯\\_(ツ)_/¯',
    user: 'Silent Bob',
  })
}
