'use strict'

/* eslint-disable no-console */

const init = adapter =>
  adapter.on('reaction')
    .debounce(500)
    .subscribe(({ emoji, user }) => {
      console.log(`${user} reacted with ${emoji}`)
    })

module.exports = init
