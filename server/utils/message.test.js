var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'phil';
        var text = 'some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});

    });
});

describe('generateLocationMessage', () => {
    it('should generate location object', function () {
        var from = 'Admin';
        var latitude = 1;
        var longitude = 2;
        var url = `https://www.google.ca/maps?q=1,2`;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});