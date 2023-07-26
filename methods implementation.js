//implement following array methods . find, findIndex, filter

//find



function arrFind(arr,fn) {
  let element;
  if(!Array.isArray(arr) || typeof fn != "function"){
    return index;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i],i)) {
      element = arr[i]
      break;
    }
  }
  return element
}
}


//findIndex



function arrFindIndex(arr,fn) {
  let index;
  if(!Array.isArray(arr) || typeof fn != "function"){
    return index;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i],i)) {
      index = i
      break;
    }
  }
  return index

}
}


//filter
function filter(arr,fn) {
    let temp = []
    if(!Array.isArray(arr) || typeof fn != "function"){
        return temp
    }
  for (let i = 0; i < arr.length; i++){
      if(fn(arr[i],i)){
          temp.push(arr[i])
      }
  }

 return temp;   
}