import fs from 'fs';
import path from 'path';

class Assignment {
    
    constructor(assignment_id, subject_id, title, description, grade) {
        this.assignment_id = assignment_id;
        this.subject_id = subject_id;
        this.title = title;
        this.description = description;
        this.date = new Date();
        this.grade = grade;
    }

    // insertIntoDatabase() {
    //     const moduleDir = path.dirname(new URL(import.meta.url).pathname);
    //     const filePath = path.join(moduleDir, '../assets/db/assignments.json');

    //     let data = fs.readFileSync(filePath, 'utf8');
    //     let assignments = JSON.parse(data);

    //     assignments.push({
    //         assignment_id: this.assignment_id,
    //         subject_id: this.subject_id,
    //         title: this.title,
    //         description: this.description,
    //         grade: this.grade
    //     });

    //     fs.writeFileSync(filePath, JSON.stringify(assignments, null, 2), 'utf8');
    // }

     addNewAssignment = () =>  {

        
        // Retrieve existing data from localStorage, or initialize an empty array if it's the first time
        const existingData = JSON.parse(localStorage.getItem('Assigments')) || [];
    
        // Add the new data to the existing data
        existingData.push(this);
    
        // Store the updated data back in localStorage
        localStorage.setItem('Assigments', JSON.stringify(existingData));
    
        
};




    



}



export default Assignment

