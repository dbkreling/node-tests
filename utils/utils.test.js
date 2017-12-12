const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            // if (res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}`)
            // }
            expect(res).toBe(44).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    describe('#square', () => {
        it('should async square a number after 1 sec', (done) => {
            utils.asyncSquare(4, (res) => {
                expect(res).toBe(16).toBeA('number');
                done()
            });
        });

        it('should sqare a number', () => {
            var res = utils.square(3);

            expect(res).toBe(9).toBeA('number');
        });
    });
});



// it('should expect some values', () => {
//     var res = [utils.square(3), utils.square(4)];
//
//     expect(res).toEqual([9,16]).toBeA('object');
//     expect(res).toInclude(9);
//     expect({
//         name: 'Daniel',
//         age: '39',
//         location: 'Brazil'
//     }).toInclude({
//         location: 'Brazil'
//     })
// });

it('should set first and last names', () => {
    var user = {
        age: 39,
        location: 'Brazil'
    }
    var res = utils.setName(user, 'Daniel Kreling');

    expect(res).toBeA('object').toInclude({
        firstName: 'Daniel',
        lastName: 'Kreling'
    });
});
