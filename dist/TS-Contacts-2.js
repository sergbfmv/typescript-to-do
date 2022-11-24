"use strict";
;
const persons = [
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
const isAdmin = (person) => {
    return person.type === 'admin';
};
const isUser = (person) => {
    return person.type === 'user';
};
const logPerson = (person) => {
    let information = '';
    if (person.type === 'admin') {
        information = person.role;
    }
    if (person.type === 'user') {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
persons.filter(isUser).forEach(logPerson);
