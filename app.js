'use strict'

let exec = require('child_process').exec,
    cmd = 'arp -lna',
    result = [];

exec(cmd, function(error, stdout, stderr) {
    let data = stdout.split("\n");
    for (var i = 1; i <= data.length; i++) {
        if (i == data.length) {
            console.log(result);
        } else {
            let deviceInfo = data[i].split(" ").filter(Boolean);
            // console.log(deviceInfo);
            result.push({
                ip: deviceInfo[0],
                macaddress: deviceInfo[1]
            })
        }
    }

});
