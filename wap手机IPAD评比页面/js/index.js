var getRgbColorVal = {
    numRandom : function(){
        return Math.floor(Math.random()*255);
    },
    getRVal : function(){
        return this.numRandom();
    },
    getGVal: function(){
        return this.numRandom();
    },
    getBVal : function(){
        return this.numRandom();
    },
    merger : function(){
        var colorVal = 'rgb('+this.getRVal()+','+this.getGVal()+','+this.getBVal()+')'
        return colorVal;
    }
}
function getTagVal(){
    return $('div').length;
}
//getTagVal();
console.log(getRgbColorVal.merger())

