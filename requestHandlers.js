function start() {
  console.log("Request handler 'start' was called.");

  function sleep(milliseconds) {
    var curTime = new Date().getTime();
    while(new Date().getTime() < curTime + milliseconds);
  }
  
  sleep(3000);
  return 'Hello Start';
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;