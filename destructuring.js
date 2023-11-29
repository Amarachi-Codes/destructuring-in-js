let colors = ['red', 'yellow','orange','brown', 'blue', 'pink']
 const [r, y, o, br, bu, p] = colors
console.log(br)
console.log(colors[0]);

const people = {
    name: 'John',
    age:30,
    city: 'newyork'
    }

    const {name,age,city}=people
    console.log(age)

    // older method
    console.log(people.city);
    
    const student ={
        name:'Emeka_Igwe',
        age: 24,
        department: 'economics'
        };

    const studentData = ({name, age, department}) =>{
       
        return `${name} is ${age} and he is a student of ${department}`
        }
        
        console.log(studentData(student))
        

    