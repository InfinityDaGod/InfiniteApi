var express = require('express');
const wrapText = require('word-wrap');
var router = express.Router();
const { registerFont } = require('canvas');
registerFont('Uni.ttf', { family: 'Uni' }); 
const { Canvas } = require('canvas-constructor/cairo')
const canvas = require('canvas')

module.exports = {
  name: "meme/gravity-falls/worthless",
  run: async(req, res) => {
    const img = await canvas.loadImage('https://media.discordapp.net/attachments/783141895408320525/894935648593649745/d05d367a5e0153bbd104805868d080a1.png?width=444&height=498')
    let image = new Canvas(444,498)
    .printImage(img, 0, 0, 444, 498)
    .setTextFont('30px Uni')
    .printText(wrapText(req.query.text, {width: 20}), 100, 150)
    .toBuffer();

    res.set({'Content-Type': 'image/png'})
    res.send(image)
  }
}