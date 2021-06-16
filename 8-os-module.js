var os = require('os');

// info about the current user
var user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

var currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(), // in bytes
  freeMem: os.freemem(),
};
console.log(currentOS);
