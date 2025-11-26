// const user = {
//     name: "Aurean",
//     age: 18,
//     isStudent: true
// }
// console.log(user.name)
// console.log(user["age"])
// console.log(user)

// user.name = "Madiyar"
// delete user.isStudent


// const product = {
//     title: "Iphone",
//     price: 500000,
//     specs: {
//         color:"black",
//         memory:"128GB"
//     }
// }
// console.log(product.specs.color)

// const student = {
//     name: "Dias", 
//     age: 17,
//     info(){
//         return `${this.name} - ${this.age} лет`
//     }
// }
// console.log(student.info())

// const products = [
//     {id: 1, title: "Iphone", price: 500000},
//     {id: 2, title: "Airpods", price: 120000},
//     {id: 3, title: "Macbook", price: 900000}
// ]
// for(const p of products){
//     console.log(p.title, "-", p.price)
// }
// const expensive = products.filter(p => p.price > 300000)
// console.log(expensive)

// const total = products.reduce((acc, p) => acc + p.price, 0);
// const avarage = total/products.length
// console.log(avarage)


// class Student {
//     constructor(name,age,group){
//         this.name = name;
//         this.age = age;
//         this.group = group;
//     }
//     info(){
//         return `${this.name}(${this.age} лет) из группы ${this.group}`
//     }

// }

// const s1 = new Student("Aruzhan", 18, "Js-201")
// console.log(s1.info())

// const user = {
//     name: 'Dias',
//     age: '38',
//     city: 'Astana'
// }
// const {name,age} = user

// console.log(age)

// const arr = [10,20,30]

// const [a,b] = arr;

// console.log(a)

// const arr1 = [1,2,3]
// const arr2 = [...arr1,...arr1]

// console.log(arr2)

// const user1 = {
//     name: 'Dias',
//     age: '38',
// }
// const user2 = {...user1, city:"Almaty"}

// function sum(...nums){
//     return nums.reduce((a,b) => a + b, 0)
// }
// console.log(sum(1,2,3))

// const user ={
//     id: 1,
//     name: 'Dima',
//     password: '12345'
// }
// const {password,...Остаток} = user

// console.log(Остаток)

class Product{
    constructor(id,title,price){
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

class Cart {
    constructor(){
        this.items = []
    }

    add(product){
        const item = {...product}

        this.items.push(item)
    }

    remove(id){
        this.items = this.items.filter(item => item.id !== id)
    }

    getTotal(){
        return this.items.reduce((sum, item) => sum + item.price,0)
    }

}

const p1 = new Product(1,"Iphone", 500000);
const p2 = new Product(2,"Airpods", 100000)

const cart = new Cart();
cart.add(p1)
cart.add(p2)

console.log("Корзина: ", cart.items)
console.log("Итог", cart.getTotal())

cart.remove(2)

console.log("После удаления", cart.items)
console.log("Новая сумма: ", cart.getTotal())