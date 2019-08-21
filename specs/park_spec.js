const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Jurassic Park', 70);
    dinosaur1 = new Dinosaur('Velociraptor', 'carnivore', 75);
    dinosaur2 = new Dinosaur('Brachiosaurus', 'herbivore', 40);
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

      it('should be able to add a dinosaur to its collection', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        const actual = park.collectionOfDinosaurs();
        assert.strictEqual(actual, 2);
      });

      it('should be able to remove a dinosaur from its collection', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.removeDinosaur(dinosaur1);
        const actual = park.dinosaurs;
        assert.deepStrictEqual(actual, [dinosaur1]);
      });

      it('should be able to find the dinosaur that attracts the most visitors', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        const actual = park.mostVisitedDinosaur();
        assert.deepStrictEqual(actual, dinosaur1);
      });

      it('should be able to find all dinosaurs of a particular species', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        const actual = park.findBySpecies('Velociraptor');
        assert.deepStrictEqual(actual, [dinosaur1]);
      });

      it('should calculate the total number of visitors per day', function(){
        const actual = park.dailyVisitors();
        assert.strictEqual(actual, 0);
      });

      it('should calculate the total number of visitors per year', function(){
        const actual = park.annualVisitors();
        assert.strictEqual(actual, 0);
      });

      it('calculate the total revenue from ticket sales for one year', function(){
        const actual = park.totalRevenue();
        assert.strictEqual(actual, 0);
      });

      it('should be able to remove all dinosaurs of a particular species');
    });


});
