var express = require('express');
var router = express.Router();
const wrapText = require('word-wrap');
const { registerFont } = require('canvas');
registerFont('Uni.ttf', { family: 'Uni' }); 
const { Canvas } = require('canvas-constructor/cairo')
const canvas = require('canvas')

module.exports = {
  name: "basement/stones",
  run: async(req, res) => {
    const img = await canvas.loadImage('https://media.discordapp.net/attachments/783141895408320525/895109141834653706/unknown.png')
    let image = new Canvas(1000,170)
    .printImage(img, 0, 0, 1000, 170)
    .setTextFont('30px Uni')
    .printText(wrapText(req.query.text, {width: 20}), 110, 100)
    .toBuffer();

    res.set({'Content-Type': 'image/png'})
    res.send(image)
  }
}