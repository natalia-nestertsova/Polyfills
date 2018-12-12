//Object.create
Object.create1 = function (proto, params) {
    var o = {};
    o.__proto__ = proto;
    return o;

}

// Object.keys 
Object.myKeys = function (obj) {
    var res = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            res.push(key);
        }
    }
    return res
}



// Object.freeze
Object.myFreeze = function(obj){
    for(var key in obj){
        Object.defineProperty(obj, key, {
            configurable:false,
            writable:false,
        })
    }
   return obj;   
   
}


//Array.push

Array.prototype.myPush = function(...param) {
    for (var i = 0; i < param.length; i++){
        this[this.length]=param[i];
    } 
    return this.length;
}


//Array.pop
Array.prototype.myPop = function(){
    var returnValue = "undefined";
    returnValue = this.splice(this.length-1, 1);
    return returnValue[0];
    
}

//Array.shift
Array.prototype.myShift = function(){
    var returnValue = "undefined";
    returnValue = this.splice(0, 1);
    return returnValue[0];
    
}



Array.prototype.myUnshift = function (...param) {
    var len =param.length;

    for (var i = this.length+len-1; i > 0; --i) {
        this[i] = this[i - len];
    }

    for(var j=0; j<len; j++){
        this[j] = param[j];
    }
    return this.length;
};

    

//Array.sort
Array.prototype.mySort = function (fun) {
      var arr = [];

    if (!fun) {
        arr.push(this);
        var narr = arr.join(',');
        arr = narr.split(',');
    } else if (fun){ 
        for(var k=0; k<this.length; k++)
        arr.push(this[k]);
    }

    var i = 0;
    var buf;
    var flag;

        while (i < arr.length) {
            if (i + 1 != arr.length && arr[i] > arr[i + 1]) {
                buf = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = buf;
                flag = false;
            }
            i++;
            if (i == arr.length && flag == false) {
                flag = true;
                i = 0;
            }
        }
        return arr;
    
}


//  Array.map 
Array.prototype.myMap = function (fun) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
            newArr.push(fun(this[i]));
    }
    return newArr;
}

// Array.forEach 
Array.prototype.myForEach = function (fun) {
     for (var i = 0; i < this.length; i++) {
       fun(this[i]);
     }
   
}


//Array.filter 
Array.prototype.myFilter = function (fun) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (fun(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr;
}


// Array.reverse 
Array.prototype.myReverse = function (){
   var arr=[];
    for(var i = this.length-1; i>=0; i--){
       arr.push(this[i]);
    }
    return arr;
}


// Array.join 
Array.prototype.myJoin = function (sep){
    var sepString = '';
    if(typeof sepString ==='undefined'){sepString=','}
    for (var i = 0; i < this.length; i++) {
        sepSring += this[i] + sepString ;
     }
     return sepString;
 }


// Array.some 
Array.prototype.mySome = function (fun) {
    var a;
    for (var i = 0; i < this.length; i++) {
        if (fun(this[i])) {
            a = true;
        }
    }
    if (a) { return true }
    else { return false }
}


// Array.every 
Array.prototype.myEvery = function (fun) {
    for (var i = 0; i < this.length; i++) {
        if (fun(this[i])) {
            return true;
        } else {return false}
    }
}


// Array.reduce
Array.prototype.myReduce = function (fun) {
    var res = 0;
    for (var i = 0; i < this.length; i++) {
          res = fun(res, this[i]);
    }
    return res;
}





// Function.bind 
Function.prototype.myBind = function(context){
    var thisFunction = this;
    return function (...args) {
      return thisFunction.apply(context, args);
    };
}



// Function.call
 Function.prototype.myCall = function(someOtherThis, ...args) {
     var newBound = this.bind(someOtherThis);
     return newBound(...args);
}
Function.prototype.myCall2 = function (context, ...arg) {
    context.fnName = this;
    return context.fnName(...arg);

};

// Function.apply 
 Function.prototype.myApply = function(someOtherThis, arr){
    var newBound= this.bind(someOtherThis);
     return newBound(...arr);
}

Function.prototype.myApply2 = function (context, arr) {
    context.fnName = this;
    return context.fnName(arr);
};
