var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Tommy'
		var text = 'Hello'
		var message = generateMessage(from, text);
		expect(message).toInclude({from, text})
		expect(typeof message.createdAt).toBe('number');
	});
});