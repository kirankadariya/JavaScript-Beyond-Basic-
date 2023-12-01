class Person {
    constructor(id, dateOfBirth, gender, skills = []) {
        this.id = id;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.skills = skills;
    }

    calculateAge() {
        const currentDate = new Date();
        const birthDate = new Date(this.dateOfBirth);
        const ageInMilliseconds = currentDate - birthDate;
        const ageDate = new Date(ageInMilliseconds); // Epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970); // Calculate the age
    }

    showPersonForSkill(skill) {
        return this.skills.includes(skill) ? this : null;
    }
}

// Example usage:
const person1 = new Person(1, '1990-05-15', 'Male', ['JavaScript', 'HTML', 'CSS']);
console.log(person1.calculateAge()); // Calculate age

const person2 = new Person(2, '1985-12-10', 'Female', ['Python', 'Java', 'C++']);
console.log(person2.showPersonForSkill('Java')); // Check for a specific skill