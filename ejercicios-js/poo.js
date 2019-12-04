class Usuario {

    constructor(nombre, password) {
        this._nombre = nombre;
        this._password = password;

    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password;
    }

}

let usuario1 = new Usuario('Arturo96', '1234');