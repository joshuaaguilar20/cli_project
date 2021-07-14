function printResult(name, lastName, location) {
  if(name) {
    console.log('name:', name, ',');
  }
  else {
    console.log('name: Unknown ,');
  }
  if(lastName) {
    console.log('lastname:', lastName, ',');
  }
  else {
    console.log('lastname: Unknown ,');
  }
  if(location) { 
    console.log('location:', location);
  }
  else {
    console.log('location: Unknown');
  }
}

function getInfo(){
  let name = null;
  let lastName = null;
  let location = null;

  let args = process.argv.slice(2);

  for(let i = 0; i < args.length; i+=2) {
    switch(args[i]) {
      case '-n':
        name = args[i+1];
        break;
      case '-ln':
        lastName = args[i+1];
        break;
      case '-l':
        location = args[i+1];
        break;
      default:
        console.log('Unknown flag.')
    }
  }
  printResult(name,lastName,location)
}

getInfo()
