// CODE here for your Lambda Classes

// Part 1: Declare the class keyword
class Person {
// Part 2: Create a new constructor
    constructor(person) {
        this.age = person.age;
        this.name = person.name;
        this.location = person.location;
        this.gender = person.gender;

    }
    // Step 3: Methods
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
    }// class ends



    class Instructor extends Person {
        constructor(instructor){
            super(instructor);
            this.favLanguage = instructor.favLanguage;
            this.specialty= instructor.specialty;
            this.catchPhrase= instructor.catchPhrase;

        
    }

    demo(subject){
        return ` Today we are learning about ${subject}.`
    }   
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
    
}

    class Student extends Person {
        constructor(theStudent){
            super(theStudent)
            this.previousBackgroud = theStudent.previousBackgroud;
            this.className = theStudent.className;
            this.favSubjects = theStudent.favSubjects;
                    
    }
        listSubjects (){
            this.favSubjects.forEach((subject) => {
                console.log(subject)
            });
    }

        PRassignment (subject){
            return `${this.name} has submitted a PR for ${subject}`;
        }

        sprintChallenge (subject){
            return `${this.name} has begun sprint challenge on ${subject}`;
        }

    }



    class ProjectManager extends Instructor{
        constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;

    }

    standUp(channel){
     return `${this.name} announces to ${channel}, @channel standyby times!`


    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code ${subject}`
    }
}

const shawn = new Instructor ({
    name: 'Shawn',
    location: `Califorina, USA`,
    age: 0,
    gender: `male`,
    favLanguage: `Javascript`,
    specialty: 'Full-Stack',
    catchPhrase: `wonder what it should be`
})

const john = new Instructor ({
    name: 'John',
    location: 'i dont know where',
    age: 1,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: 'Hello World'
})

const bill = new Student ({
    name: 'bill',
    location: 'Texas',
    age: 13,
    gender: 'male',
    previousBackgroud: 'lorem lorem',
    className: 'Math101',
    favSubjects: ['Algrbea']



})

    const sara = new Student ({
        name: 'bill',
        location: 'Florida',
        age: 9,
        gender: 'female',
        previousBackgroud: 'Fast food',
        className: 'English',
        favSubjects: ['literatre']

    })

    const kevin = new Student ({
        name: 'kevin',
        location: 'Idaho',
        age: 11,
        gender: 'male',
        previousBackgroud: 'Chemical enginnering',
        className: 'Art101',
        favSubjects: ['drawing'],
    })

    const tim = new ProjectManager ({
        name: 'Tim',
        location: 'Califorina',
        age: 99,
        gender: 'male',
        gradClassName: 'MUSI3',
        favInstructor: 'John',

    
        })

        console.log(shawn)
        console.log(john.favLanguage)
        