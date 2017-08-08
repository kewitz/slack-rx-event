'use strict'

/* eslint-disable no-console */

const init = adapter =>
  adapter.on('message')
    .filter(event => event.channel === '#general')
    .subscribe(({ body, user }) => {
      console.log(`${user} says: ${body}`)
    })

module.exports = init
