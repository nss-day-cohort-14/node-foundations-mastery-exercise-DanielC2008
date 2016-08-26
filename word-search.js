#!/bin/sh
":" //# comment; exec /usr/bin/env node --harmony "$0" "$@"
"use strict";

const { createReadStream } = require('fs')
const es  = require('event-stream')
const transform = require('./limit-ten')
const readStream = createReadStream('en.txt')

let [,,searchWord] = process.argv
searchWord === undefined ?
	console.log("Usage: [word-search]")
	:
		readStream
			.pipe(es.split())
  		.pipe(es.map((word, cb) => {
  			let check = searchWord.toLowerCase()
  			if (word.includes(check) && word.startsWith(check)) {
  				cb(null, `${word}\n`);
  			} else {
  				cb()
  			}
  		}))
			.pipe(process.stdout)

	// .pipe(transform).pipe(process.stdout);


