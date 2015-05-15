Meteor.publish('providers', function () {
  return providers.find();
});
