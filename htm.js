/*
const lstPerson = [
  {
    "Person": {
      "id": 37,
      "dob": "2016-06-15",
      "gender": "female"
    },
    "skills": "CSS"
  },
  {
    "Person": {
      "id": 30,
      "dob": "2017-11-02",
      "gender": "male"
    },
    "skills": "JavaScript"
  },
  {
    "Person": {
      "id": 24,
      "dob": "2021-06-27",
      "gender": "female"
    },
    "skills": "HTML"
  },
  {
    "Person": {
      "id": 37,
      "dob": "2018-07-24",
      "gender": "female"
    },
    "skills": "PHP"
  },
  {
    "Person": {
      "id": 24,
      "dob": "1993-12-16",
      "gender": "female"
    },
    "skills": "HTML"
  },
] 
*/


class Person {
    constructor(id, dob, gender, skill) {
    this.id = id;
    this.dob=dob;
    this.gender=gender; 
    this.skill=skill;
    }
    
    age() {
      const birthDate = new Date(this.dob);
      const ageNew = new Date().getFullYear() -   birthDate.getFullYear();
      return ageNew;
    }
    
    person() {
      if(this.gender === "male") {
        console.log("You can go next line")
    }
      else{
        console.log("You can stay here")
      }
          
      }
  }
  
    const person1 = new Person(37,"2016-6-6" , "female", "CSS");
      console.log(person1.id);
    console.log(Person.dob())
      console.log(person1.person());
      console.log(person1.skill);