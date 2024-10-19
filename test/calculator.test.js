import assert from 'assert'
import { calculator } from '../index.js';
describe('Calculator', () => {
    it('should return 0 for an empty string', () => {
        assert.strictEqual(calculator(''), 0);
    });

    it('should return the number for a single number', () => {
        assert.strictEqual(calculator('1'), 1);
    });

    it('should return the sum of two numbers', () => {
        assert.strictEqual(calculator('1,2'), 3);
    });

    it('should handle new lines between numbers', () => {
        assert.strictEqual(calculator('1\n2,3'), 6);
    });

    it('should handle custom delimiters', () => {
        assert.strictEqual(calculator('//;\n1;2'), 3);
    });
})
