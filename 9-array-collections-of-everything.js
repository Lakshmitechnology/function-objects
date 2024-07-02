var arr=[
    1,
    false,
    {
        name:"jagan"
    },
    function(name){
        var greeting="hello";
        console.log(`${greeting} ${name}`)
    },
    "Wow",
    undefined,
    null
];
console.log(arr[3]("Lakshmi"))