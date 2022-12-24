//module.exports="Sussy baka";


exports.getDate=function(){
let today=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    return today.toLocaleDateString("en-US",options);
}
    
exports.getDayOfTheWeek=function(){
    let today=new Date();
    let options={
        weekday:"long",
    };
    return today.toLocaleDateString("en-US",options);
}
//console.log(module.exports);
//Or, simply...
//console.log(exports);

