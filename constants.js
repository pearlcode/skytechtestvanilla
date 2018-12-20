channels = ['SPORTS', 'KIDS', 'MUSIC', 'NEWS', 'MOVIES'];

rewards = {
    SPORTS: "CHAMPIONS_LEAGUE_FINAL_TICKET",
    KIDS: false,
    MUSIC: "KARAOKE_PRO_MICROPHONE",
    NEWS: false,
    MOVIES: "PIRATES_OF_THE_CARIBBEAN_COLLECTION"
};

eligibilityServiceOutput = ['CUSTOMER_ELIGIBLE', 'CUSTOMER_INELIGIBLE', 'Technical failure exception', 'Invalid account number exception'];

accountToEligibility = {1: 0, 2: 1, 3: 2, 4: 3};

eligibilityService = jest.fn(function (accountNumber) {
    return eligibilityServiceOutput[
        accountToEligibility[accountNumber]
        ];
});


portfolios = {
    0: {channels: [0], rewards: [rewards[channels[0]]]},
    1: {channels: [1], rewards: [rewards[channels[1]]]},
    2: {channels: [2], rewards: [rewards[channels[2]]]},
    3: {channels: [3], rewards: [rewards[channels[3]]]},
    4: {channels: [4], rewards: [rewards[channels[4]]]},
    5: {channels: [0, 2], rewards: [rewards[channels[0]], rewards[channels[2]]]},
    6: {channels: [1,3], rewards: [rewards[channels[1]],rewards[channels[3]]]},
    7: {channels: [0, 2, 4], rewards: [rewards[channels[0]], rewards[channels[2]], rewards[channels[4]]]},
};

module.exports = {
    rewards: rewards,
    channels: channels,
    eligibilityServiceOutput: eligibilityServiceOutput,
    eligibilityService: eligibilityService,
    portfolios:portfolios,
};