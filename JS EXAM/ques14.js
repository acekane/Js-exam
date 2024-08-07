
function getProperty(obj, prop) {
    return obj[prop];
  }
  let person = {
     name: 'Deepak',
     age: 18
     };
  let name = getProperty(person, 'name');
  console.log(name);  