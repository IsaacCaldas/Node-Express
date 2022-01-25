console.log(process.argv); // global var

function haveParam(param){
  return process.argv.indexOf(param) !== -1;
}

if(haveParam('--prod')){
  console.log('WARNING!!!');
} else {
  console.log('Sussa!');
}

// paste in terminal in the folder ex#8
/*
before: node ex#8_process --prod other_param
after: node ex#8_process other_param
*/