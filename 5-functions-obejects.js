function greet(){
    console.log("Hai")
}
greet()

greet.language="Tamil Vazhga"
console.log(greet.language)


var x=function(){
    console.log('===X===')
}

x()

var y=function(b){
   b()
}
y(x)


var a=function(c){
    c()
}
a(function(){
    console.log("value")
})