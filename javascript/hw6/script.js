const filterBy=(arr,dataType)=> arr.filter((value)=>(typeof value)!==dataType);
console.log(filterBy(['hello','world',23,23,null],'string'));