/*面向对象编程*/
/*遍历对象内部内容*/
function forEachIn(object,action){
    for(var property in object){
        if(object.hasOwnProperty(property)){
            action(property,object[property]);
        }
    }
}
/*遍历对象所有内容*/
function forEachOut(object,action){
    for(var property in object){
        action(property,object[property]);
    }
}
/*继承*/
function clone(object){
    function OneShotConstructor(){};
    OneShotConstructor.prototype = object;
    return new OneShotConstructor();
}
/*创建一个实例*/
Object.prototype.creat = function(){
    var object = clone(this);
    if(object.constructor!=undefined){
        object.constructor.apply(object,arguments);
    }
    return object;
}
/*继承通过克隆返回一个实例*/
Object.prototype.extend = function(properties){
    var object = clone(this);
    forEachIn(properties,function(name,value){
        object[name] = value;
    })
    return object;
}
/*instanceof 指向*/
Object.prototype.isA = function(prototype){
    function DummyConstructor(){};
    DummyConstructor.prototype = prototype;
    return this instanceof DummyConstructor;
}
var Item = {
    constructor:function(name){
        this.name = name;
    },
    inspect:function(){
        console.log('it is '+ this.name +' .')
    },
    kick:function(){
        console.log('klunk!');
    },
    take:function(){
        console.log('you cannot lift '+ this.name+' .');
    }
}
var TestObject = {
    constructor :function(name,details){
        Item.constructor.call(this,name);
        this.details = details;
    },
    inspect : function(){
        console.log('you see '+this.name+' . '+this.details+' .');
    }
}
var DetailedItem = Item.extend(TestObject);
var giantSloth = DetailedItem.creat('the giant sloth','it is quietly hanging from a tree,munching leaves');
//giantSloth.inspect();
/*混合类型多重继承*/
function mixInto(object,minIn){
    forEachIn(minIn,function(name,value){
        object[name] = value;
    })
}
var SmallItem = Item.extend({
    kick:function(){
        console.log(this.name+' flies across the room.');
    },
    take:function(){
        console.log('you take '+this.name+' .');
    }
})
var SmallDetailedItem = clone(DetailedItem);
mixInto(SmallDetailedItem,SmallItem);
var deadMouse = SmallDetailedItem.creat('Fred the mouse','he is dead');
deadMouse.inspect();
deadMouse.kick();














