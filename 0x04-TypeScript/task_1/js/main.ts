interface Teacher {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience: number,
  location: sring,
  [propName: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

const printTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`;

class studentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

    workHome = () : string => 'Currently working';
    displayName = () : string => this.firstName;
}
