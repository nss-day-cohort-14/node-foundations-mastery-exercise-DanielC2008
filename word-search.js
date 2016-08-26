#!/bin/sh
":" //# comment; exec /usr/bin/env node --harmony "$0" "$@"
"use strict";

let [,,...rest] = process.argv
console.log(rest);
