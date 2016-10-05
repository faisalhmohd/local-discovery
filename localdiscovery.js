'use strict'

const exec = require('child_process').exec,
    cmd = 'arp -lna',
    result = [];

module.exports = {
  getDevices : (cb) => {
    exec(cmd, (error, stdout, stderr) => {
        let data = stdout.split("\n");
        for (var i = 1; i <= data.length; i++) {
            if (i == data.length) {
                cb(null, result);
            } else {
                let deviceInfo = data[i].split(" ").filter(Boolean);
                result.push({
                    ip: deviceInfo[0],
                    macaddress: deviceInfo[1]
                })
            }
        }

    });
  }
}
