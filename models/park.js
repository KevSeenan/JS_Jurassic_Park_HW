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

module.exports= Park;
