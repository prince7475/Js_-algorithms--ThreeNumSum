const chai = require('chai')
const program = require('./threeNumberSum')

describe('Three sums', function () {

    it('Test #1', function() {
        chai.expect(program.threeNumberSum([1, 2, 3], 6)).to.deep.equal([[1, 2, 3]]);
    });

    it('Test #2', function() {

        chai.expect(program.threeNumberSum([1, 2, 3], 7)).to.deep.equal([]);
    });

    it('Test #3', function() {
        chai.expect(program.threeNumberSum([8, 10, -2, 49, 14], 57)).to.deep.equal([[-2, 10, 49]]);
    });

    
    it('Test #4', function() {
        chai.expect(program.threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).to.deep.equal([[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]);
    });

    it('Test #5', function() {
        
  chai.expect(program.threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0)).to.deep.equal([[-8, 3, 5], [-6, 1, 5], [-1, 0, 1]]);
    });


});