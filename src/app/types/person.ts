// Chore: cleanup, for demo purpose only
export interface IPerson {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  picture: {
    large: string;
  };
  login: {
    username: string;
    password: string;
  };
}
