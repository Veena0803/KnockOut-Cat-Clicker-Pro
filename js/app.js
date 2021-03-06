var Cat = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable("Tabby");
  this.imgSrc = ko.observable("images/cat1.jpg");
  this.nicknames = ko.observableArray(["Tab","Tabbyby","T","Catty"]);
  
  this.title = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if(clicks < 10){
      title = 'Newborn';
    } else if(clicks < 50){
      title = 'Infant';
    } else if(clicks < 100){
      title = 'Child';
    } else if(clicks < 200){
      title = 'Teen';
    } else if(clicks < 500){
      title = 'Adult';
    } else {
      title = 'Ninja';
    }
    return title;
  },this);
}

var ViewModel = function(){
  this.currentCat = ko.observable(new Cat());
  
  this.incrementCounter = function(){
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  }
}

ko.applyBindings(new ViewModel());