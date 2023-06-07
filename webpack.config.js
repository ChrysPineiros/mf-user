
const { shareAll, share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

 const moduleFederationConfig = withModuleFederationPlugin({

    name: 'mfUser',

    exposes: {
        './UserModule': './src/presentation/app/user/user.module.ts',
    },

    /* shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    }, */
    shared: share({
        "@angular/core": { singleton: true, strictVersion: true },
        //"@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        "@angular/common/http": { singleton: true, strictVersion: true },
        "@mycne/lib-design-system":  { singleton: true, strictVersion: true, requiredVersion: '0.0.11' },
      }),

});

//moduleFederationConfig.output.publicPath = 'http://localhost/mf-user/';
moduleFederationConfig.output.publicPath = 'http://localhost:4201/';
module.exports = moduleFederationConfig;