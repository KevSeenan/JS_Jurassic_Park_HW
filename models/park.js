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
  let guests = 0;

    for (let dinosaur of this.dinosaurs){
      guests += dinosaur.guestsAttractedPerDay;
    };
    return guests;
};

Park.prototype.annualVisitors = function(){
  let guests = 0;

    for (let dinosaur of this.dinosaurs){
      guests += dinosaur.guestsAttractedPerDay;
    };
    return guests * 340;
};

Park.prototype.totalRevenue = function(){
  let revenue = 0;

    for(let price in this.price){
      revenue = annualVisitors() * this.price;
    };
    return revenue;
};


module.exports= Park;
