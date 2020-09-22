function createNewUser(name,surname) {
this.firstName=name;
this.lastName=surname;
this.getLogin=function () {
return this['firstName'][0].toLowerCase()+this.lastName.toLowerCase()       ;
}
}
let newUser=new createNewUser("Fatima",'Kerimli');
newUser.getLogin();
console.log(newUser);
console.log(newUser.getLogin());