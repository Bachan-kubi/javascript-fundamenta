// Method -01
class User{
    static staticMethod(){
        console.log(this===User);
    }
}
User.staticMethod();
// Method - 02
class Users {};

Users.staticMethod = function(){
    console.log(this===Users);
};
Users.staticMethod();

// practicle usages
class Article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB){
        return articleA - articleB;
    }
    static createToday(){
        return new this("Todays Digest", new Date());
    }
}

let articles = [
    new Article('HTML', new Date(2024, 2, 5)),
    new Article('CSS', new Date(2024, 1, 7)),
    new Article('JavaScript', new Date(2024, 7, 7)),
    new Article('React', new Date(2024, 7, 7))
];

console.log(articles.sort(Article.compare));
const a = articles.sort(Article.compare);
console.log(a[1].title);
// iteration to array method
const arr = [1, 'ami', '15', 'set'];
console.log(arr[2]);

// another instaces 
const blog = Article.createToday();
// everytime we call digest can where needed!
console.log(blog.title);





