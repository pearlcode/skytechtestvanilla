redeemService = require('./redeemService');
constants = require('./constants');


rewardTest = function (accountNumber, profile) {
    return redeemService({
        customerAccountNumber: accountNumber,
        portfolio: portfolios[profile],
        eligibilityService: eligibilityService
    })
}


describe('rewards service', function () {

    it('returns rewards with elibigle account', function () {

        eligibilityService = constants.eligibilityService;
        portfolios = constants.portfolios;
        accountNumber = 1;
        for (var i = 0; i < 5; i++) {
            expect(rewardTest(accountNumber, i)).toEqual({
                data: portfolios[i].rewards.reduce(function (acc, reward) {
                    if (reward !== false) {
                        acc.push(reward);
                    }
                    return acc;
                }, [])
            });

        }

    });

    it('returns no rewards with non-elibible account', function () {

        eligibilityService = constants.eligibilityService;
        portfolios = constants.portfolios;
        accountNumber = 2;
        for (var i = 0; i < 5; i++) {
            expect(rewardTest(accountNumber, i)).toEqual({data: []});

        }

    });

    it('returns no rewards with technical failure', function () {

        eligibilityService = constants.eligibilityService;
        portfolios = constants.portfolios;
        accountNumber = 3;
        for (var i = 0; i < 5; i++) {
            expect(rewardTest(accountNumber, i)).toEqual({data: []});

        }

    });


    it('returns no rewards with invalid account', function () {

        /*
        eligibilityService = constants.eligibilityService;
        portfolios = constants.portfolios;
        accountNumber = 4;
        for (var i = 0; i < 5; i++) {
            expect(rewardTest(accountNumber, i)).toThrowError('INVALID_ACCOUNT');

        }
        */
    });

});