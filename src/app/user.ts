export class User {
  id: number;
  email: string;
  //Both the passwords are in a single object
  password: {
    pwd: string;
    confirmPwd: string;
  };
  terms: boolean;
  constructor(values: any = {}) {
    //Constructor initialization
    this.id = values.id || null;
    this.email = values.email || '';
    this.password = values.password || { pwd: '', confirmPwd: '' };
    this.terms = values.terms || false;
  }
}

