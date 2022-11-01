//1 
function suma(num1, num2) {
    console.log(num1 + num2);
}

let n1 = parseInt(prompt("Ingrese un numero:"));
let n2 = parseInt(prompt("Ingrese un numero:"));
suma(n1, n2);

let n3 = parseInt(prompt("Ingrese un numero:"));
let n4 = parseInt(prompt("Ingrese un numero:"));
if (n3>n4) {
    console.log(n3 + n4);
} else {
    suma(n3, n4);
}

for (var i=0; i <= 10; i++) {
    suma(i, i+1);
} 


//2 
function resta(numero1, numero2) {
    console.log(numero1 - numero2);
}

let n5 = parseInt(prompt("Ingrese un numero:"));
let n6 = parseInt(prompt("Ingrese un numero:"));
resta(n5, n6);

let n7 = parseInt(prompt("Ingrese un numero:"));
let n8 = parseInt(prompt("Ingrese un numero:"));
if (n7>n8) {
    console.log(n7 - n8);
} else {
    resta(n7, n8);
}

for (var i=0; i <= 10; i++) {
    resta(100, i);
} 


//3 
function multp(number1, number2) {
    console.log(number1 * number2);
}

let n9 = parseInt(prompt("Ingrese un numero:"));
let n10 = parseInt(prompt("Ingrese un numero:"));
multp(n9, n10);

let n11 = parseInt(prompt("Ingrese un numero:"));
let n12 = parseInt(prompt("Ingrese un numero:"));
if (n11>n12) {
    console.log(n11 * n12);
} else {
    multp(n11, n12);
}

for (var i=0; i <= 10; i++) {
    multp(i, i+1);
} 


//4 
function div(nn1, nn2) {
    console.log(nn1 / nn2);
}

let n13 = parseInt(prompt("Ingrese un numero:"));
let n14 = parseInt(prompt("Ingrese un numero:"));
div(n13, n14);

let n15 = parseInt(prompt("Ingrese un numero:"));
let n16 = parseInt(prompt("Ingrese un numero:"));
if (n15>n16) {
    console.log(n15 / n16);
} else {
    multp(n15, n16);
}

for (var i=0; i <= 10; i++) {
    div(i+1, i);
} 


//5
function tour(something) {
    for(let i=0; i<something.length; i++) {
        console.log(something[i])
    }    
}

var fruits = ["Apple","Orange","Grape","Watermelon","Peach"];
tour(fruits);


//6
//Utilizamos la misma funcion que en el punto 5
var animals = ["Lion","Tiger","Elephant","Cow","Snake","Bird","Dog","Cat","Bunny","Shark"];
tour(animals);


//7
function math(numb1,numb2,operator) {
    switch(operator) {
        case '+':
            console.log(numb1+numb2);
        break;
        case '-':
            console.log(numb1-numb2);
        break;
        case '*':
            console.log(numb1*numb2);
        break;
        case '/':
            console.log(numb1/numb2);
        break;
        default:
            console.log("No es posible realizar esta operacion.");
    }
}

let n85 = parseInt(prompt("Ingrese un numero:"));
let n86 = parseInt(prompt("Ingrese un numero:"));
let operator = prompt("Ingrese un operador:");
math(n85,n86,operator);


//8
function jsonFunction(jsonElement) {
    console.log(`Nombre de usuario: ${jsonElement.username} y email: ${jsonElement.email}`);
}

const json = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]
  

jsonFunction(json[0]);


//9
function menAMay(array) {
    array.sort(function(a, b){return a - b});
    console.log(array);
}
function mayAMen(array) {
    array.sort(function(a, b){return b - a}); 
    console.log(array);
}

let arrayNumbers = [];
for (let i=0; i <= 5; i++) {
    let numbers = parseInt(prompt("Ingrese un numero:"));
    arrayNumbers.push(numbers);
}
console.log(arrayNumbers);
menAMay(arrayNumbers);
mayAMen(arrayNumbers);

//11
function toLowerC(string) {
    console.log(string.toLowerCase());
}

let string = prompt("Ingrese una cadena de texto:");
toLowerC(string);


//12
function message(jsonInfo) {
    for(let i=0; i < jsonInfo.length; i++) {
        console.log(`Hola ${jsonInfo[i].username}!!!`);
    }
}

message(json);




