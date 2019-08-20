const Park = function (name, price, dinosaur){
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
  this.dinosaur = dinosaur;
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

module.exports= Park;
