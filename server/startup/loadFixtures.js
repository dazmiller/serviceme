/**
 * [loadFixture description]
 * @param  {[type]} fixtures   [description]
 * @param  {[type]} collection [description]
 * @return {[type]}            [description]
 */
function loadFixture(fixtures, collection) {
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  //loadFixture(Fixtures['dummyFixture'], DummyCollection);
});
