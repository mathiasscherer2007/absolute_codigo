// Callback = uma função passada como argumento para outra função

function hello(callback){
    console.log("hello");
    callback();
}

function goodbye(){
    console.log("goodbye");
}

hello(goodbye);