Accounts.oauth.registerService("naver");

if (Meteor.isClient) {
    Meteor.loginWithNaver = function (options, callback) {
        // support a callback without options
        if (! callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        var credentialRequestCompleteCallback =
            Accounts.oauth.credentialRequestCompleteHandler(callback);
        Naver.requestCredential(options, credentialRequestCompleteCallback);
    };
} else {
    Accounts.addAutopublishFields({
        // publish all fields including access token, which can legitimately be used
        // from the client (if transmitted over ssl or on localhost).
        forLoggedInUser: ['services.naver'],
        forOtherUsers: [
            'services.naver.username'
        ]
    });
}