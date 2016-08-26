const { Transform } = require('stream')
let i = 0
module.exports = Transform({
	transform(buffer, encoding, cb) {
		i >= 10 ? cb(null) : (i++, cb(null, buffer))
	}
})


