/**
 * Created by krzysztof on 30.09.16.
 */
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1778427852446994', // your App ID
        'clientSecret'  : '85b4266138d88d2994f610e863b7b97c', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
