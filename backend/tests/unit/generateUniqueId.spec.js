const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Gererate Unique ID', () => {
	it('should gererate an unique ID', () => {
		const id = generateUniqueId();

		expect(id).toHaveLength(8);
	});
});