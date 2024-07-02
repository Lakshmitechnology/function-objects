
//fullstackDevelopers,frontendDeveloper,backendDeveloper
// function 1
function webdeveloperSalary(fullstackDevelopers,frontendDeveloper,backendDeveloper){
    if(typeof frontendDeveloper==='number' && typeof backendDeveloper==="number"){
        console.log(`FontEnd: ${frontendDeveloper},'BackEnd' ${backendDeveloper}, BothOf ${fullstackDevelopers}`)
    }
    else if (typeof frontendDeveloper==="number"){
        console.log(`Frontend ${frontendDeveloper}`)
    }

    else if (typeof backendDeveloper==="number"){
        console.log(`Backend${backendDeveloper}`)
    }
    else{
        console.log(`FullStack ${fullstackDevelopers}`)
    }
       
}
webdeveloperSalary(130000, 50000,80000)
webdeveloperSalary(50000,80000)
webdeveloperSalary(13000)

// function 2
function display(arg1) {
    if (typeof arg1 === 'number') {
        console.log("Number: " + arg1);
    } else if (typeof arg1 === 'string') {
        console.log("String: " + arg1);
    } else {
        console.log("Unknown type");
    }
}
display(55)
display("Lakshmi")
display(true)

// in programming,function overloading referes to the concept where multiple functions with the same namescan have different implementions

function greet( firtName,lastName,language){
    return firtName + " " + lastName +" " +language
}



function tamillang(language="Tamil"){
    return greet("Lakshmi","saravana",language)
}
console.log(tamillang())



function englishlang(language="english"){
    return greet("Ammu","saravanan",language)
}
console.log(englishlang())