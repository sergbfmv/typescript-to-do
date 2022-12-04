class Job {
  private role: string;
  private salary: number;

  constructor(role: string, salary?: number)
  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary

  }

  getRole() {
    return this.role
  }

  get Salary() {
    return this.salary
  }

  working(personName: string) {
    return `${personName} сейчас работает как ${this.role}`
  }
}

class Person extends Job {
  private job?: string;
  private name: string = 'Serg';

  constructor(name: string, role?: string, salary?: number)
  constructor(name: string, role: string, salary?: number) {
    super(role, salary)
    this.name = name;
  }

  setJob(job: string) {
    this.job = job
  }

  getSalary() {
    return this.Salary
  }

  work(): string {
    let job = new Job(super.getRole(), super.Salary)
    return `${job.working(this.name)}`
    
  }
}

const job1: Job = new Job('водитель', 25000)
const job2: Job = new Job('пожарный', 35000)
const job3: Job = new Job('полицейский', 32000)

const person1: Person = new Person('Саша')
const person2: Person = new Person('Миша')
const person3: Person = new Person('Ваня')

console.log(person1.work())
console.log(person2.work())
console.log(person3.work())





// const person2: Person = new Person('Миша')
// person2.setJob('полиции')
// console.log(person2.work())

// const person3: Person = new Person('Даша')
// person3.setJob('банке')
// console.log(person3.work())

