const assert = require('assert');
const timeOut = require('../timeout');


describe( 'timeOut', async function() {
    await it(' time in timeout less 100', (done) => {

        let time = timeOut.timeout(timeOut.sleep(100), 20);

        time.catch( result => { assert.equal( result ); done()});

        //assert.equal( timeOut.timeout(timeOut.sleep(100), 20).catch(() => 'fail') );
    });

    await it('time in timeout more 100', (done) => {

        let time = timeOut.timeout(timeOut.sleep(100), 200);

        time.then( result => { assert.equal( result ); done()});

        //assert.equal( timeOut.timeout(timeOut.sleep(100), 200).then(() => 'ok') );
    });
});