var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Tommy'
		var text = 'Hello'
		var message = generateMessage(from, text);
		expect(message).toInclude({from, text})
		expect(typeof message.createdAt).toBe('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Tommy';
		var latitude = 1;
		var longitude = 1;
		var url = 'https://www.google.com/maps?q=1,1';
		var locationMessage = generateLocationMessage(from, latitude, longitude);
		expect(locationMessage).toInclude({
			from,
			url
		});
	});
});