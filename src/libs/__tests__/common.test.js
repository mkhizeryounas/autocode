const { expect } = require('chai');
const { add, convertToNumber } = require('../common');

describe('Common module', function () {
  describe('add', function () {
    it('Should add 2 numbers', () => {
      expect(add(1, 1)).to.eq(2);
    });

    it('Should not add 2 non-numbers', () => {
      expect(add('a', 'a')).to.be.NaN;
    });
  });

  describe('convertToNumber', function () {
    it('Should convert to number', () => {
      expect(convertToNumber('1')).to.eq(1);
    });

    it('Should convert to NaN', () => {
      expect(convertToNumber('a')).to.be.NaN;
    });
  });
});
