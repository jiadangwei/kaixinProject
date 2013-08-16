/*构建对象关系映射--（ORM）*/
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
//        for(var i in o){
//            console.log(i +" ::: "+ o[i])
//        }
    },
    created:function(){
        this.records = {};
    },

    prototype:{
        init:function(){}
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
    },

    extend:function(o){
        var extended = o.extended;
        for(var i in o){
            this[i] = o[i];
        }
        if(extended) extended(this);
    },
    include:function(o){
        var included = o.included;
        for(var i in o){
            this.prototype[i] = o[i];
        }
        if(included) included(this);
    }
}
Model.extend({
    find:function(id){
        return this.records[id];
//        return this.records[id] || throw("Unknown record");
    }
});
Model.include({
    init:function(atts){},
    load:function(attributes){},
    newRecord:true,
    create:function(){
        if(!this.id) this.id = Math.guid();
        this.newRecord = false;
        this.parent.records[this.id] = this;
    },
    destroy:function(){
        delete this.parent.records[this.id];
    },
    update:function(){
        this.parent.records[this.id] = this;
    },
    save:function(){
        this.newRecord ? this.create() : this.update();
    }
})

Math.guid = function(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){
        var r = Math.random()*16 | 0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    }).toUpperCase();
}

var Asset = Model.create();

Asset.extend({
    find:function(id){
        var record = this.records[id];
        if(!record) throw('Unknown record');
        return record.dup();
    }
})
Asset.include({
    create:function(){
        this.newRecord = false;
        this.parent.records[this.id] = this.dup();
    },
    update:function(){
        this.parent.records[this.id] = this.dup();
    },
    dup:function(){
//        return jQuery.extend(true,{},this);
    }
})
console.log(Asset)
var asset = Asset.init();
asset.name = 'tom';
asset.id = 10;
asset.save();


var asset2 = Asset.init();

asset2.name = 'jack';
asset2.save();
//asset2.destroy();

//asset.save();

//asset.destroy();

//console.log(asset)
//console.log(asset.__proto__.__proto__)
//console.log(asset.parent.records)
//console.log(Asset.find(asset.id).__proto__.__proto__);


//console.log(Asset.__proto__)
//console.log(Asset.parent)
//console.log(asset.parent)
//console.log(asset.__proto__.__proto__)
//console.log(Model)
















