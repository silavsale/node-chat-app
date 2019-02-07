const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string value', () => {
        var message = isRealString(1111);
        expect(message).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var message = isRealString("    ");
        expect(message).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var message = isRealString("  Mark  ");
        expect(message).toBe(true);
    });
});