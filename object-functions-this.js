const obj = {
    name: "Lakshmi",
    greet: function() {
        console.log(`Hello, ${this.name}!`); // `this` refers to `obj`
    }

    
};
obj.greet(); 


function a(){
    console.log(this)
}
a()

let b= function c(){
    console.log(this)
}
b()





var c ={
    name:"Hello world",
   log:function(){

    //this is going to be look for direct object
    // console.log(this.name);

    var self= this;
    console.log(self)

    let  setName=function(newName){
    //   this.name=newName

    self.name=newName
    }
    setName("This is updated c")
   },

   
}
c.log()

const video =
{
    title:"Movie video",
    play(){
      console.log(this.title)
    }
};

video.stop=function(){
    console.log(this)
}
video.stop()
video.play()