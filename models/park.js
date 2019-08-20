const Park = function (name, price, dinosaur, visitor){
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
  this.dinosaur = dinosaur;
  this.visitors = [];
};

Park.prototype.collectionOfDinosaurs = function(){
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaurToRemove){
  let dinoObject;

  for (let dinosaur of this.dinosaurs){
    if (dinosaur.species === dinosaurToRemove){
      dinoObject = dinosaur;
    };
  };
  let index = this.dinosaurs.indexOf(dinoObject);
  this.dinosaurs.splice(index, 1);
};

Park.prototype.mostVisitedDinosaur = function(){
let dinoVisits = 0;
let visitedDinos;

  for (let dinosaur of this.dinosaurs){
    if(dinosaur.guestsAttractedPerDay > dinoVisits){
      visitedDinos = dinosaur;
      dinoVisits = dinosaur.guestsAttractedPerDay;
    };
  };
  return visitedDinos;
};

Park.prototype.findBySpecies = function(species){
const foundDinosaur = [];

  for (let dinosaur of this.dinosaurs){
    if(dinosaur.species === species){
      foundDinosaur.push(dinosaur);
    };
  };
  return foundDinosaur;
};

Park.prototype.dailyVisitors = function(){
  return this.visitors.length;
};

module.exports= Park;
