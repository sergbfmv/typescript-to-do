interface User {
  type: 'user'
  name: string,
  age: number,
  group: string
};

interface Admin {
  type: 'admin'
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    type: 'user',
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    type: 'user',
    name: 'Андрей Стародубов',
    age: 31,
    group: 'Коллеги'
  },
  {
    type: 'user',
    name: 'Светлана Игнатова',
    age: 29,
    group: 'Семья'
  },
  {
    type: 'user',
    name: 'Иван Опарин',
    age: 31,
    group: 'Друзья'
  },
  {
    type: 'admin',
    name: 'Администратор',
    age: 33,
    role: 'Основная'
  }
];

const isUser = (person: User) => {
  return person.type = 'user'
}

const isAdmin = (person: Admin) => {
  return person.type = 'admin'
}                                     /* typeGuard*/

const logPerson = (person: Person) => {
  let information: string;
  if (person.type === 'admin') {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);