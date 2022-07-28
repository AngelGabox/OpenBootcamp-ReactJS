export default class Contact {
    name= '';
    lastname= '';
    email='';
    online= false;

    constructor(name, lastname, email, online){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.online= online;
    }
} 