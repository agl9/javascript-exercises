const ftoc = function(farTemp) {
let celTemp=(farTemp-32)*5/9;
return Math.round(celTemp*10)/10;
}

const ctof = function(celTemp) {
let farTemp=celTemp*9/5+32;
return Math.round(farTemp*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
