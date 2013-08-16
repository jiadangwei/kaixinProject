/*constructor构造模式*/
/*
function Car(model,year,miles){
    this.model =model;
    this.year = year;
    this.miles = miles;
}
Car.prototype.toString = function(){
    return this.model + ' : ' + this.year + ' : ' + this.miles;
}
var civic = new Car("honda civic",2009,20000);
var mondeo = new Car("Ford Mondeo",2010,5000);
console.log(civic.toString())
console.log(mondeo.toString())
 */
/*Module模块模式*/
/*
var myModule = {
    myProperty : 'someValue',
    myConfig : {
        useCaching : true,
        language : 'en'
    },
    myMethod : function(){
        console.log('Where in the world is Paul Irish today?');
    },
    myMethod2 : function(){
        console.log('Caching is : '+ ((this.myConfig.useCaching) ? 'enabled' : 'disabled'));
    },
    myMethod3 : function(newConfig){
        if(typeof newConfig == 'object') {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
}
myModule.myMethod3({
    useCaching : false,
    language : 'fr'
});
myModule.myMethod2()

var myNamespace = (function(){
    var myPrivateVar = 0;
    var myPrivateMethod = function(foo){
        console.log(myPrivateVar + ' : ' + foo);
    };
    return {
        myPublicVar : 'testtest',
        myPublicFunction : function(bar){
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    }
})();

console.log(myNamespace.myPublicVar);
myNamespace.myPublicFunction('112243535')
myNamespace.myPublicFunction('112243535')
myNamespace.myPublicFunction('112243535')

var basketModule = (function(){
    var basket = [];
    function doSomethingPrivate(){

    };
    function doSomethingElsePrivate(){

    };
    return {
        addItem : function(values){
            basket.push(values);
        },
        getItemCount : function(){
            return basket.length;
        },
        doSomething : doSomethingPrivate,
        getTotal : function(){
            var itemCount = this.getItemCount(),
                total = 0;
            while(itemCount--){
                total += basket[itemCount].price;
            }
            return total;
        }
    }
})();
basketModule.addItem({
    item:'bred',
    price:0.5
});
basketModule.addItem({
    item:'butter',
    price:0.3
})
console.log(basketModule.getItemCount())
console.log(basketModule.getTotal())

var a = {
    a1 :function(){
        return 'asfdasfdasfdaf1223'
    }
}

var myModule = (function(){
    var module = {},
        privateVar = 'Hello world';
    function privateMethod(){
        console.log('1111111111');
    };
    module.publicProperty = 'Foobar';
    module.publicMethod = function(){
        privateMethod();
        console.log(privateVar);
    }
    return module;
})();

var myModule1 = (function(jQ,_){
    function privateMethod(){
        jQ.publicMethod();
        console.log(jQ.publicProperty + " : " + _  +" : ")
    };
    function privateMethod2(){
        console.log(_.min([10,5,100,2,1000]))
    };
    return {
        publicMethod : function(){
            privateMethod();
        }
    }
});
myModule1(myModule,'9999999').publicMethod()
 */
/*Revealing Module揭示模式*/
/*var a = (function(){
    var b = 100;
    return {
        method:function c(){
            console.log(b);
        }
    }
})();
var M1 = (function(){
    var a = 300;
    function me(str){
        console.log(str)
    };
    return {
        getVal :function(){
            return a;
        },
        method:me
    }
})();
var a = M1.getVal();
var b = M1.getVal();
console.log(M1)
 */
/*singleton单例模式*/
/*
var M2 = (function(){
    var varval;
    function init(){
        var a = 300,
            randomNum = Math.random();
        function me(str){
            console.log(str)
        };
        function randomFun(){
            return randomNum;
        }
        return {
            getVal :function(){
                return a;
            },
            getRandom : randomFun,
            method:me
        }
    };
    return {
        getInt:function(){
            if(!varval){
                varval = init();
            }
            return varval;
        }
    }
})();
console.log(M2)
var a = M2.getInt();
var b = M2.getInt();
console.log(a)
console.log(b)
console.log(a.getRandom())
console.log(b)
console.log(a.getRandom() === b.getRandom())

var SingletonTester = (function(){
    function Singleton(options){
        options = options || {};
        this.name = 'SingletonTest12345';
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
        this.func = function(){
            console.log('aaa');
        }
    };
    var instance;
    var _static = {
        name : 'SingletonTester',
        getInstance : function(options){
            if(!instance){
                instance = new Singleton(options);
            }
            return instance;
        }
    }
    return _static;
})();
var singletonTest = SingletonTester;
console.log(singletonTest);
console.log(singletonTest.name);
var a = singletonTest.getInstance({
    pointX:5
})
var b = singletonTest.getInstance({
    pointX:5
})
console.log(a.name)
console.log(b.name)
console.log(a.name === b.name)
console.log(a)
console.log(b)
console.log(a.func=== b.func)
 */
/*Observer观察者模式*/
/*
function ObserverList(){
    this.observerList = [];
};
ObserverList.prototype.Add = function(obj){
    return this.observerList.push(obj);
};
ObserverList.prototype.Empty = function(){
    this.observerList = [];
};
ObserverList.prototype.Count = function(){
    return this.observerList.length;
};
ObserverList.prototype.Get = function(index){
    if(index>-1 && index<this.observerList.length){
        return this.observerList[index];
    }
};
ObserverList.prototype.Insert = function(obj,index){
    var pointer = -1;
    if(index === 0){
        this.observerList.unshift(obj);
        pointer = index;
    }else if(index === this.observerList.length){
        this.observerList.push(obj);
        pointer = index;
    }
    return pointer;
};
ObserverList.prototype.IndexOf = function(obj,startIndex){
    var i = startIndex,
        pointer = -1;
    while(i<this.observerList.length){
        if(this.observerList[i]===obj){
            pointer = i;
        }
        i++;
    }
    return pointer;
};
ObserverList.prototype.RemoveIndexAt = function(index){
    if(index === 0){
        this.observerList.shift();
    }else if(index === this.observerList.length-1){
        this.observerList.pop();
    }else{
//        Tlmis observerList spLiceind
    }
};
function extend(obj,extension){
    for(var key in obj){
        extension[key] = obj[key];
    }
};
function Subject(){
    this.observers = new ObserverList();
};
Subject.prototype.AddObserver = function(observer){
    this.observers.Add(observer);
};
Subject.prototype.RemoveObserver = function(observer){
    this.observers.RemoveIndexAt(this.observers.IndexOf(observer,0));
};
Subject.prototype.Notify = function(context){
    var observerCount = this.observers.Count();
    for(var i= 0,l=this.observers.length;i<l;i++){
        this.observers.Get[i].Update(context);
    }
};
function Observer(){
    this.Update = function(){

    }
};
 */
/*

var myApp = myApp || {};
myApp.utils = {};
(function(){
    var val = 5;
    this.getValue = function(){
        return val;
    };
    this.setValue = function(value){
        val = value;
    };
    this.tools = {};
}).apply(myApp.utils);
(function(){
    this.diagnose = function(){
        return 'diagnose';
    }
}).apply(myApp.utils.tools)
console.log(myApp)
*/
/*

var myApp = myApp || {a:'10'};
function extend(ns,ns_string){
    var parts = ns_string.split('.'),
        parent = ns,
        pl;
    pl = parts.length;
    for(var i = 0;i<pl;i++){
        if(typeof parent[parts[i]] == 'undefined'){
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};
extend(myApp,'modules.modules2');
extend(myApp,'modulesA.modulesB.modulesC');
console.log(myApp);

function extend(destination,source){
    var toString = Object.prototype.toString,
        objTest = toString.call({});
    for(var property in source){
        if(source[property] && toString.call(source[property]) === objTest){
            destination[property] = destination[property] || {};
            extend(destination[property],source[property]);
        }else{
            destination[property] = source[property];
        }
    }
    return destination;
}

function extend1(a,b){
    for(var property in b){
        a[property] = b[property];
    }
    return a;
}
var myNs = myNs || {a:true};
extend(myNs,{
    hello:{
        world:{
            wave:{
                test:function(){

                }
            }
        }
    }
})
myNs.hello.test1 = 'this ia a test';
myNs.hello.world.test2 = 'asfsdafafd';
myNs.library = {
    foo:function(){}
}
extend(myNs,{
    library:{
        bar:function(){}
    }
})
console.log(myNs)
*/
/*

var a = {
    x:10,
    y:20,
    z:function(){
        this.x1 = 30;
        this.y1 = this.y;
    }
}
Object.prototype.creat = function(obj,obj1){
    function F(){};
    F.prototype = obj;
    var f = new F();
    if(arguments.length>1){
        for(var property in obj1){
            if(obj1.hasOwnProperty(property)){
                f[property] = obj1[property];
            }
        }
    }
    return f;
}
var b = Object.creat(a);
b.z();
console.log(b)
var c = Object.creat(a,{
    x2:50,
    y2:60
});
c.z()
console.log(c)

var a = {
    x:function(par1){
        console.log(par1);
    },
    y:function(par1,par2){
        this.par1 = par1;
        this.par2 = par2;
    }
}
a.x(10)
var b = new a.y(20,30);
console.log(b)
a.excan = function(name){
     a[name] && a[name].apply(a,[].slice.call(arguments,1));
}
a.excan('y',150,300);
console.log(a)
 */

/*

var a = function(){
    this.x=10;
    this.yx = 50;
}
a.prototype.abc = '2300'
var b = new a();


var s = [1,2,3];
var s = 'safdsaf';
console.log(s instanceof String)

console.log('sdff   '+ ((Object.prototype.toString.call(s)) ==='[object Array]'))


console.log('sadasf' instanceof String)

//var a ={};
var a;
function f(){};
var f1 = new f();
console.log(Object.prototype.toString.call(a))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(f1))
console.log(Object.prototype.toString.call({}))
console.log(f1)
console.log(f1 == null)
console.log(a == null)
console.log(a == undefined)
console.log(a === null)
console.log(a === undefined)


var a = 'sadfasf';
console.log(a.name = 'sdfas2222');
console.log(a)
console.log(a.name)
 */
/*

var a = {
    b:function(pars){
        var args = pars.split('.'),
            object = this,
            i,len;

        for(i=0,len=args.length;i<len;i++){
            if(!object[args[i]]){
                object[args[i]] = {};
            }
            object = object[args[i]];
        }
        return object;
    }
}
a.b('c.d.e.f');
a.b('h.k.l');
a.b('A.B.C.D');
console.log(a)
var ccc;
console.log(typeof null)
*/
/*

var a = (function(){
    var a1;
    function int(){
        var a2 = 10;
        return {
            geta2 : function(){
                console.log(a2);
            }
        }
    }
    return {
        getMethod:function(){
            if(!a1){
                a1 = int();
            }
            return a1;
        }
    }
})()
*/

/*单例模式*/
/*

var singletonTester = (function(){
    function Singleton(options){
        options = options || {};
        this.name = 'SingletonTester';
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }
    var instance;
    var _static = {
        name:'SingletonTester',
        getInstace:function(options){
            if(!instance){
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();
var singletonTest = singletonTester.getInstace({
    pointX:5,
    pointY:5
})
console.log(singletonTest)
*/
/*观察者模式*/
/*

function ObserverList(){
    this.observerList = [];
}
ObserverList.prototype.Add = function(obj){
    return this.observerList.push(obj);
}
ObserverList.prototype.Empty = function(){
    this.observerList = [];
}
ObserverList.prototype.Count = function(){
    return this.observerList.length;
}
ObserverList.prototype.Get = function(index){
    if(index>-1 && index<this.observerList.length){
        return this.observerList[index];
    }
}
ObserverList.prototype.Insert = function(obj,index){
    var pointer = -1;
    if(index===0){
        this.observerList.unshift(obj);
        pointer = index;
    }else if(index === this.observerList.length){
        this.observerList.push(obj);
        pointer = index;
    }
    return pointer;
}
ObserverList.prototype.IndexOf = function(obj,startIndex){
    var i = startIndex, pointer = -1;
    while(i<this.observerList.length){
        if(this.observerList[i] === obj){
            pointer = i;
        }
        i++;
    }
    return pointer;
}
ObserverList.prototype.RemoveIndexAt = function(index){
    if(index === 0){
        this.observerList.shift();
    }else if(index === this.observerList.length){
        this.observerList.pop();
    }
}
function extend(obj,extension){
    for(var key in obj){
        extension[key] = obj[key];
    }
}
function Subject(){
    this.observers = new ObserverList();
}
Subject.prototype.AddOserver = function(observer){
    this.observers.Add(observer);
}
Subject.prototype.RemoveObserver = function(observer){
    this.observers.RemoveIndexAt(this.observers.IndexOf(observer,0))
}
Subject.prototype.Notify = function(context){
    var observerCount = this.observers.Count();
    for(var i=0;i<observerCount;i++){
        this.observers.Get(i).Update(context);
    }
}
function Observer(){
    this.Update = function(){
        //.........
    }
}


var controlCheckbox = document.getElementById('mainCheckbox'),
    addBtn = document.getElementById('addNewObserver'),
    container = document.getElementById('observersContainer');


extend(new Subject(),controlCheckbox);

controlCheckbox['onclick'] = new Function("controlCheckbox.Notify(controlCheckbox.checked)");

addBtn['onclick'] = AddNewObserver;
function AddNewObserver(){
    var check = document.createElement('input');
    check.type = 'checkbox';
    extend(new Observer(),check);
    check.Update = function(value){
        this.checked = value;
    }
    controlCheckbox.AddOserver(check);
    container.appendChild(check);
}
*/

/*发布/订阅模式*/
/*

var pubsub = {};
(function(q){
    var topics = {},
        subUid = -1;

    q.publish = function(topic,args){
        if(!topics[topic]){
            return false;
        }
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
        while(len--){
            subscribers[len].func(topic,args);
        }
        return this;
    }

    q.subscribe = function(topic,func){
        if(!topics[topic]){
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token : token,
            func : func
        });
        return token;
    }

    q.unsubscribe = function(token){
        for(var m in topics){
            if(topics[m]){
                for(var i = 0,j=topics[m].length;i<j;i++){
                    if(topics[m][i].token === token){
                        topics[m].splice(i,1);
                        return token;
                    }
                }
            }
        }
        return this;
    }
})(pubsub);

var messageLogger = function(topics,data){
    console.log("logging: "+topics+" : " +data.sender +" : "+data.body);
}
var subscription = pubsub.subscribe("index/newMessage",messageLogger);
pubsub.publish('index/newMessage',"hello world");
pubsub.publish('index/newMessage',['test','a','b','c']);
pubsub.publish('index/newMessage',{
    sender : "hellow@google.com",
    body:"hey again!"
});
*/

/*中介模式*/

var mediator = (function(){
    var topics = {};
    var subscribe = function(topic,fn){
        if(!topics[topic]){
            topics[topic] = [];
        }
        topics[topic].push({
            context:this,
            callback:fn
        })
        return this;
    }
    var publish = function(topic){
        var args;
        if(!topics[topic]){
            return false;
        }
        args = Array.prototype.slice.call(arguments,1);
        for(var i= 0,l=topics[topic].length;i<l;i++){
            var subscription = topics[topic][i];
            subscription.callback.apply(subscription.context,args);
        }
        return this;
    }
    return {
        Subscribe:subscribe,
        Publish:publish,
        installTo:function(obj){
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    }
})();

mediator.Subscribe('abc/def',function(a,b,c,d){
    console.log(a+' : '+b+' : '+c+' : '+d);
})
mediator.Subscribe('abc1/def',function(a,b,c,d){
    console.log(a+' : '+d);
})
mediator.Publish('abc1/def','a','b','c','d')

































































