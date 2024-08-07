
function updateProperty(obj, prop, value) {
    obj[prop] = value;
    return obj;
  }
  let person = {
     name: 'Deepak',
     age: 18 };
  let newPerson = updateProperty(person, 'age', 19);
  console.log(updatedPerson);  