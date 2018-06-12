'use strict';

const GrovePi = require('../../vendors/GrovePi/Software/NodeJS/libs').GrovePi;
const Board = GrovePi.board;

const board = new Board({
    debug: true,
    onError: (err) => { console.log(err) },
    onInit: (res) => {
        if (res) {
            console.log('GrovePi Version :: ' + board.version());
        }
    }
});

board.init()

module.exports = board;
