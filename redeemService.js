constants = require('./constants');

function rewardsService(options) {
    eligibilityService = options.eligibilityService;
    channelNames = constants.channels;
    rewards = constants.rewards;
    portfolio = options.portfolio;
    customerAccountNumber = options.customerAccountNumber;
    eligibilityServiceOutput = constants.eligibilityServiceOutput;
    //  { customerAccountNumber, portfolio, eligibilityService } = options;
// ...amazing code
       eligibleRewards = [];
    try {
        eligibilityResponse = eligibilityService(customerAccountNumber)
        switch (eligibilityResponse) {
            case eligibilityServiceOutput[0]:
                eligibleRewards =  portfolio.channels.reduce(function (acc, channel) {
                    currentReward = rewards[channelNames[channel]];
                    if (currentReward !== false) {
                        acc.push(currentReward);
                    }
                    return acc;
                }, []);
                break;
            case eligibilityServiceOutput[3]:
                throw new Error('INVALID_ACCOUNT');
                break;
        }
    }
    catch (e) {
        console.log(e);
        if(e.message == 'INVALID_ACCOUNT')
        {
            throw e;
        }
    }
    return {
        data: eligibleRewards,
    }
}

module.exports = rewardsService;