import assert from 'assert'

describe('Calculator', () => {
    it('should return 0 for an empty string', () => {
        assert.strictEqual(calculator(''), 0);
    });
})
