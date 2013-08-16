/*
var getRandomColor = {
    randomNum : function(val){
        return Math.floor(Math.random()*(val+1));
    },
    singleCl : function(colorNum){
        var singleColor = this.randomNum(colorNum).toString(16);
        if(singleColor.length<2) singleColor = '0' + singleColor;
        return singleColor;
    },
    colorVal : function(){
        var r = this.singleCl(255);
        var g = this.singleCl(255);
        var b = this.singleCl(255);
        var rgbColor = '#' + r + g + b;
        if(rgbColor!='#ffffff'){
            return rgbColor;
        }else{
            return '#cccccc';
        }
    }
};

var a = function(){
    var x = 0;
    var y = 1;
    var z = 2;
    return {x:x,y:y,z:z}
}
console.log(a);
console.log(a());

var map = {a:1,b:2};
for(var i in map){
    console.log(i);
}
var map = {b:1,a:2};
for(var i in map){
    console.log(i)
}
document.querySelector().addEventListener('click',function(e){
    if(e.target && e.target.tagName == 'LI'){
        //........
    }
})

(function(){
    var CarManager = {
        requestInfo:function(model,id){
            return "The information for "+ model+"with ID "+id+" is foobar";
        },
        buyVehicle:function(model,id){
            return "You have successfully purchased Item "+id+", a "+model;
        },
        arrangeViewing:function(model,id){
            return "You have successfully booked a viewing of "+model+" ( "+id+" ) ";
        }
    };
    CarManager.execute = function(name){
        return CarManager[name] && CarManager[name].apply(CarManager,[].slice.call(arguments,1));
    };
    CarManager.execute('arrangeViewing','Ferrari','123');
    CarManager.execute('requestInfo','Ford Mondeo','456');
    CarManager.execute('requestInfo','Ford Escort','2345');
    CarManager.execute('buyVehicle','Ford Esort','34566');
})();
function speak(line){
    console.log("The "+ this.adjective + " rabbit says ' " + line + "'");
}
var whiteRabbit = {
    adjective:'white',
    speak:speak
}
var fatRabbit = {
    adjective:'fat',
    speak:speak
}
function run(from,to){
    console.log(this.adjective+' : '+ from+' toto ' +to);
}
run.call(whiteRabbit,'A','B');
run.apply(whiteRabbit,['A','B']);

function Rabbit(name){
    this.name = name;
    this.speak = function(line){
        console.log("The "+this.name+" Rabbit says : "+line);
    }
}
console.log(Rabbit);
var tom = new Rabbit('jack');
tom.speak('jjjjjjjjjjjackack');
console.log(tom);

function Rabbit(name){
    return {
        name : name,
        speak : function(line){
            console.log("The "+this.name+" Rabbit says : "+line)
        }
    }
}
var a = Rabbit('Tom');
console.log(Rabbit);
console.log(a);

var a = {};
if('constructor' in a){
    console.log('sadfafs');
}
console.log(a);
var a = function(){
    return 'asfdasf'
}
var b = new a();
console.log(b.constructor === a)
var c = {};
console.log(c.constructor === Object)
Object.prototype.properties = function(){
    var result = [];
    for(var property in this){
        if(Object.hasOwnProperty.call(this,property)){
//        if(this.hasOwnProperty(property)){
            result.push(property);
        }
    }
    return result;
}
var a = {x:10,y:20};
var b = a.properties();
console.log(b);


function foreachin(object,action){
    for(var property in object){
        if(Object.prototype.propertyIsEnumerable.call(object,property)){
            action(property,object[property]);
        }
    }
};
function clone(object){
    function OneShotConstructor(){};
    OneShotConstructor.prototype = object;
    return new OneShotConstructor();
};
Object.prototype.extend = function(properties){
    var result = clone(this);
    foreachin(properties,function(name,value){
        result[name] = value;
    });
    return result;
};
var a = {
    method1:function(){},
    method2:function(){},
    method3:function(){}
};
var b = {
    name:'tom',
    age:30
};
function forIn(object,func){
    for(var property in object){
        func(property,object[property]);
    }
};
forIn(c,function(a,b){
    console.log(a+" : "+b)
})
var c = a.extend(b);


Object.prototype.inherit = function(baseConstructor){
    this.prototype = clone(baseConstructor.prototype);
    this.prototype.constructor = this;
};
Object.prototype.method = function(name,func){
    this.prototype[name] = func;
};
Object.prototype.create = function(){
    var object = clone(this);
    if(object.constructor != undefined){
        object.constructor.apply(object,arguments);
    };
    return object;
};

function StrangeArray(a,b){
    this.a = a;
    this.b = b;
};
StrangeArray.inherit(Array);
StrangeArray.method('push',function(value){
    Array.prototype.push.call(this,value);
    Array.prototype.push.call(this,value);
});

function Func1(x,y){
    this.x = x;
    this.y = y;
};
Func1.prototype = {
    constructor : Func1,
    prototypeMethod1 : function(){},
    prototypeMethod2 : function(){},
    prototypeMethod3 : function(){}
}



function Dictionary(startValues){
    this.values = startValues || {};
};
Dictionary.method('store',function(name,value){
    this.values[name] = value;
});
Dictionary.method('lookup',function(name){
    return this.values[name];
});
Dictionary.method('contains',function(name){
    return Object.prototype.propertyIsEnumerable.call(this.values,name);
});
Dictionary.method('each',function(action){
    foreachin(this.values,action);
});
Dictionary.method('names',function(){
    var names = [];
    this.each(function(a,b){names.push(a);})
    return names;
});
var directions = new Dictionary({
    'n': new Point(0,-1),
    'ne': new Point(1,-1),
    'e': new Point(1,0),
    'se' : new Point(1,1),
    's' : new Point(0,1),
    'sw' : new Point(-1,1),
    'w' : new Point(-1,0),
    'nw' : new Point(-1,-1)
});

function Point(x,y){
    this.x = x;
    this.y = y;
};

Point.method('add',function(other){
    return new Point(this.x + other.x,this.y + other.y);
});

function Grid(width,height){
    this.width = width;
    this.height = height;
    this.cells = new Array(width*height);
};
Grid.method('valueAt',function(point){
    return this.cells[point.y*this.width+point.x];
});
Grid.method('setValueAt',function(point,value){
    this.cells[point.y*this.width+point.x] = value;
});
Grid.method('isInside',function(point){
    return point.x >=0 && point.y >=0 && point.x <this.width && point.y < this.height;
});
Grid.method('moveValue',function(from,to){
    this.setValueAt(to,this.valueAt(from));
    this.setValueAt(from,undefined);
});
Grid.method('each',function(action){
    for(var y = 0;y<this.height;y++){
        for(var x = 0; x < this.width; x++){
            var point = new Point(x,y);
            action(point,this.valueAt(point));
        }
    }
});



function randomElement(array){
    if(array == 0){
        return new Error('The array is empty.');
    }
    return array[Math.floor(Math.random()*array.length)];
};


function StupidBug(){};
StupidBug.method('act',function(surroundings){
    return {type:'move',direction:'s'};
});

var wall = {};
function elementFromCharacter(character){
    if(character == ''){
        return undefined;
    }else if(character == '#'){
        return wall;
    }else if(character == 'o'){
        return new StupidBug();
    }
};
function Terrariun(plan){
    var grid = new Grid(plan[0].length,plan.length);
    for(var y=0;y<plan.length;y++){
        var line = plan[y];
        for(var x=0;x<line.length;x++){
            grid.setValueAt(new Point(x,y),elementFromCharacter(line.charAt(x)));
        }
    };
    this.grid = grid;
};

function bind(func,object){
    return function(){
        return func.apply(object,arguments);
    }
};
function method(object,name){
    return function(){
        object[name].apply(object,arguments);
    }
};
function randomInteger(below){
    return Math.floor(Math.random()*below);
};
 */


















