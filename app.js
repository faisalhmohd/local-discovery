const ld = require('./localdiscovery.js');

ld.getDevices((err, data) => {
  console.log(data);
})
