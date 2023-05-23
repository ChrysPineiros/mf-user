
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

 const moduleFederationConfig = withModuleFederationPlugin({

    name: 'mfUser',

    exposes: {
        './UserModule': './src/app/user/user.module.ts',
    },

    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },

});

//moduleFederationConfig.output.publicPath = 'http://localhost/mf-user/';
moduleFederationConfig.output.publicPath = 'http://localhost:4201/';
module.exports = moduleFederationConfig;