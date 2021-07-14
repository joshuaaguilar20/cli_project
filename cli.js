function error(msg){
 console.error(msg)
}

// gets cli info
function getInfo(){
  let args = process.argv.slice(2);

// throw error and return if use fails to provide arguments
  if(args.length <=1){
    error('must provide at least one argument')
    return
  }
  
  for(let i = 0; i < args.length; i+=2) {
    switch(args[i]) {
      case '-n':
        var name = args[i+1];
        break;
      case '-ln':
        var lastName = args[i+1];
        break;
      case '-l':
        var location = args[i+1];
        break;
      default:
        console.log('Unknown flag.')
    }
  }
  //now make request with arguments
  console.log('Name:',name, 'Lastname:',lastName,'location',location)
}

getInfo()
