
 //console.log(typeof Object.create)
 if(typeof Object.create !== 'function'){
 Object.create = function(o){
 function F(){};
 F.prototype = o;
 return new F();
 }
 }


 var Model = {
 inherited:function(o){
 for(var i in o){
 console.log(i +" ::: "+ o[i])
 }
 },
 created:function(){
 console.log('\ncreated 111111111....\n')
 },

 prototype:{
 init:function(name,age){
 this.name = name;
 this.age = age;
 }
 },

 create:function(){
 var object = Object.create(this);
 object.parent = this;
 object.prototype = object.fn = Object.create(this.prototype);

 object.created();
 this.inherited(object);
 return object;
 },

 init:function(){
 var instance = Object.create(this.prototype);
 instance.parent = this;
 instance.init.apply(instance,arguments);
 return instance;
 }
 }
 console.log(Model)

 //var Asset = Model.create();
 var User = Model.create();
 var user = User.init('tom',30);
 console.log(User)
 console.log(User.prototype.__proto__)
 console.log(user)