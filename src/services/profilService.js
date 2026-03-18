export class Profil {
  id = 0;
  firstName = "";
  lastName = "";
  birthDate = "";
  email = "";
  password = "";

  constructor(id, firstName, lastName, birthDate, email, password) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.imemailg = email;
    this.password = password;
  }

  get_id() {
    return this.id;
  }

  get_firstName() {
    return this.firstName;
  }
  set_firstName(firstName) {
    this.firstName = firstName;
  }

  get_lastName() {
    return this.lastName;
  }
  set_lastName(lastName) {
    this.lastName = lastName;
  }

  get_birthDate() {
    return this.birthDate;
  }
  set_birthDate(birthDate) {
    this.birthDate = birthDate;
  }

  get_email() {
    return this.email;
  }
  set_email(email) {
    this.email = email;
  }

  get_password() {
    return this.password;
  }
  set_password(password) {
    this.password = password;
  }
}
