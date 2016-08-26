#!/bin/sh
":" //# comment; exec /usr/bin/env node --harmony "$0" "$@"
"use strict";

let [,,...rest] = process.argv
rest[0] === undefined ? console.log("Usage: word-search req1 [args <= 10]") : console.log("hello");

