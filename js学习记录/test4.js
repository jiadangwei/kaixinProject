/*
var testArray = [35,3543,0,454,3,3453,30,1,2,3,4,5,6,34,7,8,9,20,56,45,454,3,3453,30,1,2,3,4,5,6,34,7,8,9,20,56,45];
function arraySort(array){
    for(var x= 1,l=array.length;x<l;x++){
        var temp = array[x],y=x-1;
        while(y>=0 && array[y]>temp){
            array[y+1] = array[y];
            y--;
        }
        array[y+1] = temp;
    }
}
var testaaa = testArray.sort(function(a,b){return a-b})
arraySort(testArray);
console.log(testArray);

var testArray = [35,3543,0,454,3,3453,30,1,2,3,4,5,6,34,7,8,9,20,56,45,454,3,3453,30,1,2,3,4,5,6,34,7,8,9,20,56,45];
Array.prototype.arraySort = function(){
    for(var x= 1,l=this.length;x<l;x++){
        var temp = this[x],
            y = x -1;
        while(y>=0 && this[y]>temp){
            this[y+1] = this[y];
            y--;
        }
        this[y+1] = temp;
    }
}
testArray.arraySort();
console.log(testArray)

function forEach(array,action){
    for(var i= 0,l=array.length;i<l;i++){
        action(array[i],array[i+1]);
    }
}
function compareElement(array){
    var result = [];
    forEach(array,function(element){
        if(result.indexOf(element) == -1){
            result.push(element);
        }
    })
    return result;
}
var aaaaa = compareElement(testArray);
console.log(aaaaa)

var testArray = [35,3543,0,454,3,3453,30,1,2,3,4,5,6,34,7,8,9,20,56,45,454,3,3453,30,1,2,3,4,5,6,34,7,8,9,20,56,45];
function deletRepeat(array){
    var result = [];
    for(var i= 0,l=array.length;i<l;i++){
        if(result.indexOf(array[i]) == -1){
            result.push(array[i]);
        }
    }
    return result;
}
var a = deletRepeat(testArray);
console.log(a)

var date1 = '2012-8-8',
    date2 = '2013-7-26';
function getDateSction(start,end){
    var startArray = start.split('-'),
        endArray = end.split('-'),
        startDate = new Date(startArray[0],parseInt(startArray[1]),startArray[2]),
        endDate = new Date(endArray[0],parseInt(endArray[1]),endArray[2]),
        startGetTime = startDate.getTime(),
        endGetTime = endDate.getTime(),
        sectionTime = endGetTime - startGetTime,
        sectionDay = sectionTime/(1000*60*60*24);
    return sectionDay;
}
var secDay = getDateSction(date1,date2);
console.log(secDay);

var testStr = '   sdfsdfsf  ';
String.prototype.deleteStringSpace = function(){
    return this.replace(/(^\s*)|(\s*$)/g,'')
}
console.log(testStr.deleteStringSpace());

function isEmail(val){
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    if(!myreg.test(val))
        return '不是邮箱';
    return '是邮箱';
};
console.log( isEmail('i@fufuok.com') );
console.log( isEmail('i%fufuok.com') );

console.log('shangwenxue'.search(/wen/))
console.log('shangwenxue'.indexOf('wen'))
console.log('s/hang/wenxue'.search(/(\/)/g))

var a = 'sh/ang{}wenxue';
console.log(a.search(/[\}\/]/g));
 */
var date1 = '2012-8-8',
    date2 = '2013-7-26';
function dateSection(start,end){
    var startArray = start.match(/^(\d{4})\-(\d{1,2})\-(\d{1,2})$/),
        endArray = end.match(/^(\d{4})\-(\d{1,2})\-(\d{1,2})$/),
        startDate = new Date(Number(startArray[1]),Number(startArray[2])-1,Number(startArray[3])),
        endDate = new Date(Number(endArray[1]),Number(endArray[2])-1,Number(endArray[3]));
    return (endDate.getTime()-startDate.getTime())/1000/60/60/24;
}
console.log(dateSection(date1,date2))


















