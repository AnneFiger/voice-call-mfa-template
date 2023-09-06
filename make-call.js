

var accountSid = "XXXXXX";
var authToken = "XXXXXXX";

var client = require('twilio')(accountSid, authToken);

    const from = '+44XXXXXXXXXX';
    const to = '+44XXXXXXXXXX';
    const twiml = '<Response><Say>1234</Say></Response>';

    client.calls
    .create({ to, from, twiml })
    .then((call) => {
      console.log('Call successfully placed');
      console.log(call.sid);
    })
    .catch((error) => {
      console.error(error);
      return callback(error);
    });