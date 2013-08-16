/* MVC∫Õ¿‡*/
var Class = function(parent){
    var klass = function(){
        this.init.apply(this,arguments);
    };
    if(parent){
        var subclass = function(){};
        subclass.prototype = parent.prototype;
        klass.prototype = new subclass;
    }
    klass.prototype.init = function(){};
    klass.fn = klass.prototype;
    klass.fn.parent = klass;
    klass._super = klass.__proto__;
    klass.extend = function(obj){
        var extended = obj.extended;
        for(var i in obj){
            klass[i] = obj[i];
        }
        if(extended) {
            extended(klass);
        }
    }
    klass.include = function(obj){
        var included = obj.included;
        for(var i in obj){
            klass.fn[i] = obj[i];
        }
        if(included){
            included(klass);
        }
    }
    klass.proxy = function(func){
        var self = this;
        return (function(){
            return func.apply(self,arguments);
        })
    }
    klass.fn.proxy = klass.proxy;
    return klass;
};
//
//var Person = function(){};
//(function(){
//    var findById = function(str){console.log(str+" 11111111111")};
//    Person.find = function(id){
//        if(typeof id == 'string'){
//            return findById(id);
//        }
//    }
//})();

//Person.find('integer')


//
//var test = {
//    name:'test',
//    click:function(str){
//        console.log(this.name+" :: "+str);
//    }
//}
//var Button = new Class;
//Button.include({
//    init:function(element,str){
////        this.element = jQuery(element);
//        this.element = element;
////        this.element.click(this.proxy(this.click));
//        this.element.click(str);
//    },
//    click:function(){
//        //.........
//    }
//})
//
//var bbbb = new Button(test,'2222222222')
//bbbb.name = 'tom';
//bbbb.proxy(test.click)('0000')

//
//var Person = new Class;
//Person.prototype.init = function(name,age){
//    this.name = name;
//    this.age = age;
//}
//Person.extend({
//    find:function(){},
//    exists:function(){}
//})
//Person.include({
//    save:function(){console.log('aaaaaaaaaaaaa');},
//    destroy:function(){}
//})
//
////var a = new Person('tom',30);
////
//var Animal = new Class(Person);
////console.log(Animal)
////console.log(Animal.fn)
////console.log(Animal.fn.__proto__)
//var b = new Animal();
////console.log(b.save())
//
//var aaaaaa ={
//    name:'adfasdfasfaf',
//    proxy : function(func){
////        var self = this;
//        return (function(){
////            console.log(this);
//            return func.apply(this,arguments);
//        })
//    }
//}
//var aaaa = {
//    name:'tom',
//    a:function(str){
//        console.log(this.name+" ::: "+'aaaaa'+" :: "+str)
//    }
//}
//var bbbb = {
//    name:'jack',
//    a:function(){
//        console.log(this.name+" ::: "+'aaaaa11111111111')
//    }
//}
//var cccc = {
//    name:'tomJack',
//    click:function(){
//        aaaaaa.proxy(aaaa.a)('nameasfdaf')
//    }
//}
//cccc.click()


var PubSub = {
    subscribe:function(ev,callback){
        var calls = this._callbacks || (this._callbacks = {});
        (this._callbacks[ev] || (this._callbacks[ev] = [])).push(callback);
        return this;
    },
    publish:function(){
        var args = Array.prototype.slice.call(arguments,0);
        var ev = args.shift();
        var list,calls, i,l;
        if(!(calls = this._callbacks)) return this;
        if(!(list = this._callbacks[ev])) return this;
        for(i=0,l=list.length;i<l;i++){
            list[i].apply(this,args);
        }
        return this;
    }
}

//PubSub.subscribe('user:creat',function(str){
//    console.log('user creat : 111111 '+str)
//})
//PubSub.publish('user:creat',222222222)

var testA = new Class();
//console.log(testA)
testA.extend(PubSub)
//console.log(testA)
testA.subscribe('user:creat',function(str){
    console.log('user creat : 111111 '+str)
})
console.log(testA)

/*
//jquery
(function($){
    var o = $({});
    $.subscribe = function(){
        o.bind.apply(o,arguments);
    }
    $.unsubscribe = function(){
        o.unbind.apply(o,arguments);
    }
    $.publish = function(){
        o.trigger.apply(o,arguments);
    }
})(jQuery)
*/






