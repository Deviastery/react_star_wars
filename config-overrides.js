const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@styles': 'src/styles',
        '@containers': 'src/containers',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@utils': 'src/utils',
    })(config);

    return config;
}