module.exports = {
  client: {
    includes: [__dirname + '/src/graphql/**/*'],
    addTypename: true,
    service: {
      name: 'platform',
      url: 'https://api.siroapp.com/graphql',
    },
  },
};
