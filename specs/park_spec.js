const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Jurassic Park', 70);
    dinosaur1 = new Dinosaur('Velociraptor');
    dinosaur2 = new Dinosaur('Brachiosaurus');
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 70);
  });

    describe('dinosaurs', function(){
      it('should have a collection of dinosaurs', function(){
        const actual = park.collectionOfDinosaurs();
        assert.deepStrictEqual(actual, 0);
      });

      it('should be able to add a dinosaur to its collection');

      it('should be able to remove a dinosaur from its collection');

      it('should be able to find the dinosaur that attracts the most visitors');

      it('should be able to find all dinosaurs of a particular species');

      it('should be able to remove all dinosaurs of a particular species');
    });


});