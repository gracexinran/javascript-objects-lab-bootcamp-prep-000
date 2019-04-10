var recipes = {};
function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({},object,{[key]:value});
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,valye){
  object[key] = value;
  return object;
}
