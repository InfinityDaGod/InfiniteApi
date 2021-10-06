var express = require('express');
var router = express.Router();
const wrapText = require('word-wrap');
const { registerFont } = require('canvas');
registerFont('Uni.ttf', { family: 'Uni' }); 
const { Canvas } = require('canvas-constructor/cairo')
const canvas = require('canvas')

module.exports = {
  name: "basement/snoozeds",
  run: async(req, res) => {
    const img = await canvas.loadImage('https://media.discordapp.net/attachments/877714092977168444/895294379743408188/unknown.png')
    let image = new Canvas(1000,150)
    .printImage(img, 0, 0, 1000, 150)
    .setTextFont('30px Uni')
    .printText(wrapText(req.query.text, {width: 20}), 110, 100)
    .toBuffer();

    res.set({'Content-Type': 'image/png'})
    res.send(image)
  }
}