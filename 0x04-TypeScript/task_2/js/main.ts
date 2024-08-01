interface DirectorInterface {
  workFromeHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromeHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director implement DirectorInterface {
  workFromHome = () : string => 'Working from home';
  getToWork = () : string => 'Getting a coffe break';
  workDirectorTasks =() : string => 'Getting to director tasks';
}

class Teacher implement TeacherInterface {
  workFromHome = () : string => 'Cannot work from home';
  get CoffeeBreak = () : string => 'Cannot have a break';
  workTeacherTasks = () : string => 'Getting to work';
}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

export const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

export const executeWork = (employee: Teacher | Director): void => {
  const work = employee instanceof Teacher? employee.workTeacherTasks() : employee.workDirectorTasks();
  console.log(work)
}

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects) : string => {
  return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
}
