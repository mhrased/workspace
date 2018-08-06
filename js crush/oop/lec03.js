var people = {
   name : 'Hasan Rased',
   func : function(){
      setTimeout(function(){
            console.log(this);
            
            console.log('This is '+ this.name);
            
      }.bind(this),2000);
   }
};

people.func();