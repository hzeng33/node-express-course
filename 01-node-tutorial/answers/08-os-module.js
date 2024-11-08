//OS built-in module.
const os = require("os");

//info about current user
const user = os.userInfo();
//console.log(user);

//method return the system uptime in seconds, total memory of the machine.
console.log(`The System Uptime is ${os.uptime()} seconds.}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
