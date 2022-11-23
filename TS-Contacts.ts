type User = {
  name: string,
  age: number,
  group: string
};

const persons: User[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Андрей Стародубов',
    age: 31,
    group: 'Коллеги'
  },
  {
    name: 'Светлана Игнатова',
    age: 29,
    group: 'Семья'
  },
  {
    name: 'Иван Опарин',
    age: 31,
    group: 'Друзья'
  },
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);