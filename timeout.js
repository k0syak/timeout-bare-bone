module.exports.sleep = sleep;
module.exports.timeout = timeout;

console.clear();
timeout(sleep(100), 20);

function timeout(p, t) {
  const failure = new Promise( (resolve, reject) => {
    setTimeout(() => reject('timed out'), t)
  });
  return Promise.race([failure, p])
      .catch( error => new Error(error));
}

function sleep(interval) {
  return new Promise(resolve => setTimeout(
      () => {
        console.log(`slept for ${interval} ms`);
        resolve();
      },
      interval
  ));
}
