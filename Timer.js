const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor(total, interval) {
        super();
        this.total = total;
        this.interval = interval;
        this.ticks = 0;
    }

    _tick() {
        this.ticks++;
        if(this.ticks <= this.total) {
            this.emit('tick', this.ticks);
        }
        else {
            this.end();
        }
    }

    start() {
        this.intervalId = setInterval(() => this._tick(), this.interval);
        this.emit('start');
    }

    end() {
        clearInterval(this.intervalId);
        this.emit('end');
    }
}

module.exports = { Timer }