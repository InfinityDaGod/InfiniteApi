var express = require('express');
var router = express.Router();
const wrapText = require('word-wrap');
const { registerFont } = require('canvas');
registerFont('Uni.ttf', { family: 'Uni' }); 
const { Canvas } = require('canvas-constructor/cairo')
const canvas = require('canvas')

module.exports = {
  name: "basement/avon",
  run: async(req, res) => {
    const img = await canvas.loadImage('https://media.discordapp.net/attachments/783141895408320525/895383183477076018/unknown.png')
    let image = new Canvas(1000,150)
    .printImage(img, 0, 0, 1000, 150)
    .setTextFont('36px Uni')
    .printText(wrapText(req.query.text, {width: 150}), 120, 130)
    .toBuffer();

    res.set({'Content-Type': 'image/png'})
    res.send(image)
  }
}