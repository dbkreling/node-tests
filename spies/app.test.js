const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Daniel', 25);
        expect(spy).toHaveBeenCalledWith('Daniel', 25);
    });

    it('should call sevaUser with user object', () => {
        var email = 'dan@example.com';
        var password = 'abc123';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});
