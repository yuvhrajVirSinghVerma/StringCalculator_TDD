import assert from 'assert'
import { calculator } from '../index.js';
describe('Calculator', () => {
    it('should return 0 for an empty string', () => {
        assert.strictEqual(calculator(''), 0);
    });
})
