let findTheOldest = function(people) {
return people.reduce((oldest,current)=>{
    
    if(!(current.yearOfDeath)){current.yearOfDeath=(new Date().getFullYear())};
    if(!(oldest.yearOfDeath)){oldest.yearOfDeath=(new Date().getFullYear())};
    if((oldest.yearOfDeath-oldest.yearOfBirth)>(current.yearOfDeath-current.yearOfBirth)){return oldest}
    else {return current};
},{});

}

module.exports = findTheOldest
