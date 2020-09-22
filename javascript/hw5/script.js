function createNewUser(name,surname,birthday) {
    this.firstName=name;
    this.lastName=surname;
    this.getLogin=function () {
        return this['firstName'][0].toLowerCase()+this.lastName.toLowerCase() ;
    };
    this.birthday=stringIntoDate(birthday);
    this.getAge=function () {
        let mils = new Date() - this.birthday; //from this moment of time we subtract birthday, this gives us millisecond
        let difference = new Date(mils); //we should create a  date object- no mutation of first one
        return (difference.getFullYear()-1970); //we transform milliseconds to years and subtract 1970, because js turns starts counting milliseconds from 1970
    };
    this.getPassword=function () {
return this['firstName'][0].toUpperCase()+this.lastName.toLowerCase()+this.birthday.getFullYear();
    }
}

function stringIntoDate(str) {
    let parts = str.split(".");
    return new Date(parts[2], parts[1] - 1 , parts[0]);
}

let newUser=new createNewUser("Fatima",'Kerimli','01.09.1998');
newUser.getLogin();
console.log(newUser);
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());


