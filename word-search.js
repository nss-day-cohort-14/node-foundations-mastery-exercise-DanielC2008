#!/bin/sh
":" //# comment; exec /usr/bin/env node --harmony "$0" "$@"
"use strict";

const { createReadStream } = require('fs')
const es  = require('event-stream')
const transform = require('./limit-ten')
const match = require('./match')
const readStream = createReadStream('en.txt')

let [,,...rest] = process.argv
rest[0] === undefined ?
	console.log("Usage: [word-search]")
	:
		readStream
			.pipe(es.split())
  		.pipe(es.map((word, cb) => {
  			if (match(word, rest[0]) === true) {
  				cb(null, word);
  			} else {
  				cb()
  			}
  		}))
			.pipe(process.stdout)

	// .pipe(transform).pipe(process.stdout);


