var testArray1 = [1,2,3,4,5,8,9,32];
var testArray2 = [[5,6],[1,2,3,4,5,8,9,32],[8,2,6]];
/*����������*/
var op = {
    '+':function(a,b){
        return a+b;
    },
    '*':function(a,b){
        return a*b;
    },
    '**':function(a){
        return a*a;
    }
}
/*��������*/
function forEach(array,action){
    for(var i = 0; i<array.length;i++){
        action(array[i]);
    }
}
/*��Լ����*/
function reduce(action,base,array){
    forEach(array,function(element){
        base = action(element,base);
    })
    return base;
}
/*ӳ������*/
function map(method,array){
    var result = [];
    forEach(array,function(element){
        result.push(method(element));
    })
    return result;
}
/*�ֲ�Ӧ�ú���*/
function partial(func){
    var knowArgs = arguments;
    return function(){
        var realArgs = [];
        for(var i=1;i<knowArgs.length;i++){
            realArgs.push(knowArgs[i]);
        }
        for(var i=0;i<arguments.length;i++){
            realArgs.push(arguments[i]);
        }
        return func.apply(null,realArgs);
    }
}
var a = reduce(op['*'],3,testArray1)
console.log(a)

var c = map(partial(reduce,op['*'],3),testArray2);
console.log(c);

var b = map(partial(map,op['**']),testArray2);
console.log(b)