Meteor.publish('servicelist', function () {
  return servicelist.find();
});
