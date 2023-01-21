/*
 * Классы
 * - обьявление
 * - конструктор
 * - методы
 * - static
 * - приватные свойства
 * - синтаксис публичных свойств и методы классов
 * - геттеры и сеттеры
 */

// Классы - это новый способ записывать функцию кноструктор с уже готовым прототипом со свойством prototype

// Для того чтобы обьявить класс вы пишете ключевое слово class и потом имя с большой буквы и тело класса {}
class Car1 {
    static AAA = 'AAA';
    // Статическое свойство
    // Сначало обьявляем все статическией свойства и методы потом конструктор а потом все отсальные методы
    
    constructor({ brand, model, price } = {}) {
    //   тут идет метод класса имя (тело) this подпись и не разделяется не запятыми не точка с запятой 
    this.brand = brand;
    this.model = model;
        this.price = price;
        // все что у нас идет на экземпляр у нас в конструкторе лежит
  }
    changePrice(newPrice) {
    //   еще один метод 
        // все что идет на прототип лежит в методах
    this.price = newPrice;
  }
}

console.dir(Car1);
console.log(Car1.AAA)

const carInstance = new Car1({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});

    

console.log(carInstance);
// Классы - это современный синтаксис для создания функции-конструктора
// Статические свойства используються чтобы хранить константы методы которые не идут на экземпляр утилиты и спмопогательные вещи
// Статического метода и свойства на экземплярах не существует static - это для конструкторов классов
