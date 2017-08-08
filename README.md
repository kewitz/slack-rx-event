# slack-rx-event
This is a Slack Events API wrapper that implements RxJS.

### Install
```
yarn add slack-rx-event
```

### Usage
You can use the same way you're using the default library, just keep in mind that the `adapter.on()` method will return an `Rx.Observable` object.

```js
const createSlackEventAdapter = require('slack-rx-event').createSlackEventAdapter
const slackEvents = createSlackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN)

// Attach listeners to events by Slack Event "type".
// See: https://api.slack.com/events/message.im
slackEvents.on('message')
  .filter(event => event.user === 'Bob')
  .subscribe(event => {
    console.log(`Bob said ${event.text} on ${event.channel}`)
  })

// Normal callback method also works.
slackEvents.on('error', console.error)

// Start a basic HTTP server
slackEvents.start(process.env.PORT).then(() => {
  console.log(`server listening on port ${port}`)
})
```