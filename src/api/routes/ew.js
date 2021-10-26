var express = require('express');
const wrapText = require('word-wrap');
var router = express.Router();
const { registerFont } = require('canvas');
registerFont('Uni.ttf', { family: 'Uni' }); 
const { Canvas } = require('canvas-constructor/cairo')
const canvas = require('canvas')

module.exports = {
  name: "meme/gravity-falls/ew",
  run: async(req, res) => {
    const img = await canvas.loadImage('https://cdn.discordapp.com/attachments/783141895408320525/894943579368210473/342308803033201.png')
    let image = new Canvas(443,498)
    .printImage(img, 0, 0, 443, 498)
    .setTextFont('30px Uni')
    .printText(wrapText(req.query.text, {width: 20}), 210, 120)
    .toBuffer();

    res.set({'Content-Type': 'image/png'})
    res.send(image)
  }
}