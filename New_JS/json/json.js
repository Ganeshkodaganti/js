 let companies = [{
         "name": "Techigai",
         "numberOfEmployees": 1000,
         "ceo": "Joseph",
         "rating": 3.6
     },
     {
         "name": "GGK",
         "numberOfEmployees": 3,
         "ceo": null,
         "rating": 4.3
     }

 ];

 //returns in the form of a string
 console.log(companies); //prints every thing as a string


 //we can convert string into a javascript object by using json.parse

 console.log(JSON.parse(companies));