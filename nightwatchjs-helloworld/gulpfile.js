const {exec} = require("child_process");
const chai = require("chai");

function helloworldTask(cb) {
  // place code for your default task here

  exec("hostname", (err, stdout, stderr) => {
    console.log(stdout)
  })

  cb();
}

function testTask(cb){
  exec("nightwatch index.js --headless", (err, stdout, stderr)=>{
    console.log(stdout)
    // console.log(chai)
    // chai.assert.match(stdout,/.*Hello, World!.*/)
  })

  cb();
}

exports.helloworld_task = helloworldTask
exports.test_task = testTask