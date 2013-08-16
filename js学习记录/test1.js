
function forEach(array,action){
    for(var i=0;i<array.length;i++){
        action(array[i]);
    }
}
function reduce(method,base,array){
    forEach(array,function(element){
        base = method(base,element);
    })
    return base;
}
var op = {
    '+':function(a,b){
        return a+b;
    },
    '!':function(a){
        return !a;
    }
}
function partial(func){
    var knowArgs = arguments;
    return function(){
        var realArgs = [];
        for(var i=1;i<knowArgs.length;i++)
            realArgs.push(knowArgs[i]);
        for(var i=0;i<arguments.length;i++)
            realArgs.push((arguments[i]));
        return func.apply(null,realArgs);
    }
}
//var sum = partial(reduce,op['+'],0)([3,1,2,3,4,5,6,7,8,9]);

//console.log(op['!'](isNaN(5)))
function compose(f1,f2){
    return function(){
        return f1(f2.apply(null,arguments));
    }
}
var a = compose(function(a){
            return a+" : 002//// ";
        },function(a){
            return "001 : " + a;
        });

var testArray = [['sfdsaf'],['aaaaaaaaa','bbbbbb'],['safdsaf'],['23424'],['687']];
function map(method,array){
    var result = [];
    forEach(array,function(element){
        return result.push(method(element));
    })
    return result;
}
function aaa(func){
    var knownArgs = arguments;
    return function(){
        var realArgs = [];
        for(var i = 1;i<knownArgs.length;i++)
            realArgs.push(knownArgs[i]);
        for(var i=0;i<arguments.length;i++)
            realArgs.push(arguments[i]);
        return func.apply(null,realArgs);
    }
}
var c = map(aaa(map,a),testArray);
console.log(c)

/*
function consoleArray(array){
    for(var i = 0; i<array.length; i++){
        console.log(array[i]+':');
    }
}
var testArray = ['0','1','2','3','4','5','6','7','8','9'];
//var testArray = [0,1,2,3,4,5,6,7,8,9];
//consoleArray(testArray);
function forEach(array,action){
    for( var i = 0; i < array.length; i++ ){
        action(array[i]);
    }
}
//forEach(testArray,console.log);

//forEach(testArray,function(element){
//    console.log(element+'://')
//})

function sun(numbers){
    var total = 0;
    forEach(numbers,function(number){
        total += number;
    });
    return total;
}
var bb = sun(testArray);
console.log(bb)

function negate(func){
    return function(x){
        return !func(x);
    }
}
var isNotNaN = negate(isNaN);
//var a = isNotNaN(2432);
//var a = isNotNaN('asdfsaf');
//var a = isNotNaN(NaN);
//console.log(a);

var a = negate(function(a){
    return a;
});
var b = a('asdfasf');
console.log(b);

function negate(func){
    return function(){
        return func.apply(null,arguments);
    }
}
var a = negate(function(x,y){
    console.log(x+" :// "+y);
})
var b = a('asdasf','asdfasfasfdsaf');

function forEach(array,action){
    for(var i = 0; i < array.length; i++){
        action(array[i]);
    }
}
function reduce(combine,base,array){
    forEach(array,function(element){
        base = combine(base,element);
    });
    return base;
}
function add(a,b){
    return a+b;
}
function sum(array){
    return reduce(add,0,array);
}
var testArray = [0,1,2,3,4,5,6,7,8,9];
console.log(sum(testArray));

var testArray = [0,1,0,3,0,5,0,7,8,0];

function forEach1(array,action){
    for(var i=0;i<array.length;i++){
        action(array[i]);
    }
}
function reduce1(action,base,array){
    forEach1(array,function(element){
        base = action(base,element);
    });
    return base;
}
function add1(a,b){
    return a+b;
}
function sum1(array){
    return reduce1(add1,0,array);
}
function countZeroes(array){
    function counter(total,element){
        return total + (element === 0 ? 1 : 0);
    }
    return reduce1(counter,0,array);
}
console.log(countZeroes(testArray))

function count(test,array){
    var counted = 0;
    forEach1(array,function(element){
        if(test(element)) counted++;
    });
    return counted;
}
function countZeroes(array){
    function isZeroes(x){return x === 0;}
    return count(isZeroes,array);
}
console.log(countZeroes(testArray))

function forEach(array,action){
    for(var i = 0; i < array.length; i++){
        action(array[i]);
    }
};
function map(func,array){
    var result = [];
    forEach(array,function(element){
        if(func(element)){
            result.push(func(element));
        }
    });
    return result;
}
var a = map(function(num){
    if(num>=3) return num;
},[0.01,2,9.89,Math.PI]);
console.log(a)

Object.prototype.forEach = function(array,action){
    for(var i = 0; i<array.length; i++){
        action(array[i]);
    }
}
var op = {
    '+':function(a,b){
        return a+b;
    },
    '==':function(a,b){
        return a == b;
    },
    '===':function(a,b){
        return a === b;
    },
    '!':function(a){
        return !a;
    }
}
var reduce = function(method,base,array){
    reduce.forEach(array,function(element){
        base = method(base,element);
    })
    return base;
}
var testArray = [0,1,10,3,9,5,8,7,8,6];
console.log(reduce(op['+'],0,testArray))

var op = {
    '+':function(a,b){
        return a+b;
    },
    '*':function(a,b){
        return a*b;
    },
    '==':function(a,b){
        return a == b;
    },
    '===':function(a,b){
        return a === b;
    },
    '!':function(a){
        return !a;
    }
}
function forEach(array,action){
    for(var i = 0; i < array.length; i++ ){
        action(array[i]);
    }
}
function map(func,array){
    var result = [];
    forEach(array,function(element){
        result.push(func(element));
    });
    return result;
}
function partial(func){
    var knownArgs = arguments;
    return function(){
        var realArgs = [];
        for(var i = 1; i<knownArgs.length; i++)
            realArgs.push(knownArgs[i]);
        for(var i = 0; i<arguments.length; i++)
            realArgs.push(arguments[i]);
        return func.apply(null,realArgs);
    }
}
function square(x){
    return x*x;
}
function reduce(combine,base,array){
    forEach(array,function(element){
        base = combine(base,element);
    })
    return base;
}
var a = map(partial(op['*'],5),[0,2,4,6,8,10,12])
var b = map(partial(map,square,op['+']),[[10],[0,1,4,6],[3]])
console.log(b);


var testArray = [0,1,2,3,4,5,6];
function forEach(array,action){
    for(var i=0;i<array.length;i++){
        action(array[i]);
    }
}
function reduce(action,base,array){
    forEach(array,function(element){
        base = action(base,element);
    })
    return base;
}
var op = {
    '+':function(a,b){
        return a+b;
    }
}
var c = reduce(op['+'],0,testArray);
console.log(c);
 */















