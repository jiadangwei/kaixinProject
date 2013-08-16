/*
$(function(){
    //......
})
$(function($){
    //......
})(jQuery)
$(function($,exports){
    exports.Foo = "wem";
})(jQuery,window);
*/
/*
(function(){
    console.log(this);
    var mod = {};
    mod.contentFunction = function(){
        console.log(this);
    }
    mod.contentFunction();
})()
*/

(function($){
    var mod = {};
    mod.load = function(func){
        $($.proxy(func,this));
    }
    mod.load(function(){
        this.view = $('.box');
//        console.log(this)
//        console.log(this.view.text())
    });
    mod.assetsClick = function(e){
        e.preventDefault();
        alert(this.text())
    };
    mod.load(function(){
        console.log(this)
        this.view.find('a').click(
//            console.log(this)
            $.proxy(this.assetsClick,this)
        )
    })
})(jQuery)


$(function(){

});










