const { Timer } = require('./Timer');
const per = process.argv[2];

const timer = new Timer(per, 1000);

timer.once('start', () => console.log('start'));
timer.on('tick', tick => console.log(tick));
timer.once('end', () => console.log('End'));

timer.start();