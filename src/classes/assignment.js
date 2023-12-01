import { v4 as uuid } from 'uuid';
import fs from 'fs';
import path from 'path';
import Subjects from "../assets/db/subjects.json"

class Assignment {
    #answered;
    #grade;
    constructor({ subject_id, title, description, date = Date.now() }) {
        this.assignment_id = uuid();
        this.subject_id = subject_id;
        this.title = title;
        this.description = description;
        this.date = new Date(date);
        this.file = null;
        this.#grade = 0;
        this.#answered = false;
    }

    publish = () => {
        // Retrieve existing data from localStorage, or initialize an empty array if it's the first time
        const existingData = JSON.parse(localStorage.getItem('Assigments')) || [];

        // Add the new data to the existing data
        existingData.push({
            assignment_id: this.assignment_id,
            subject_id: this.subject_id,
            title: this.title,
            description: this.description,
            grade: this.#grade,
            answered: this.#answered,
            date: this.date,
            file: this.file
        });

        // Store the updated data back in localStorage
        localStorage.setItem('Assigments', JSON.stringify(existingData));
    };

    static getAssignments(id) {
        // Retrieve existing data from localStorage by subject_id (number 1-6), or initialize an empty array if it's the first time
        const existingData = JSON.parse(localStorage.getItem('Assigments')) || [];

        // Filter the data to only include subject_id
        const filteredData = existingData.filter((data) => data.subject_id === id);

        // Return the filtered data
        return filteredData;
    }

    static async getAssignmentsBySubject(subject_id) {
        // Retrieve existing data from localStorage by subject_id (number 1-6), or initialize an empty array if it's the first time
        const existingData = await JSON.parse(localStorage.getItem('Assigments'))

        // Filter the data to only include subject_id
        const filteredData = existingData.filter((data) => data.subject_id == subject_id);

        // Return the filtered data
        return filteredData;
    }
    
    static async getMaterialsById(subjectId) {
        
        const subjectID=parseInt(subjectId);
        console.log(subjectID)
        // Find the subject with the given id
        const material = Subjects.find((data) => data.id === subjectID);
      
        // If the subject is found, return its materials
        if (material) {
          return material.materials;
        }
      
        // If the subject is not found, return null or handle it as needed
        return null;
      }

    static getAssignmentById(id) {
        // Retrieve existing data from localStorage, or initialize an empty array if it's the first time
        const existingData = JSON.parse(localStorage.getItem('Assigments'))

        // Filter the data to only include assignment_id
        const filteredData = existingData.filter((data) => data.assignment_id === id);

        // Return the filtered data
        return filteredData[0];
    }

    static updateAssignment(id, title, description, grade) {
        // Retrieve existing data from localStorage by assignment_id (number 1-6), or initialize an empty array if it's the first time
        const existingData = JSON.parse(localStorage.getItem('Assigments')) || [];

        // Filter the data to only include assignment_id
        const filteredData = existingData.filter((data) => data.assignment_id !== id);

        // Return the filtered data
        localStorage.setItem('Assigments', JSON.stringify(filteredData));

        // Add the new data to the existing data
        existingData.push({
            assignment_id: id,
            title: title,
            description: description,
            grade: grade
        });

        // Store the updated data back in localStorage
        localStorage.setItem('Assigments', JSON.stringify(existingData));
    }

    static uploadAssignmentFile(file, assignment_id) {
        // update file from assignment with assignment_id
        // Retrieve existing data from localStorage by assignment_id (number 1-6), or initialize an empty array if it's the first time
        const existingData = JSON.parse(localStorage.getItem('Assigments')) || [];

        // Filter the data to only include assignment_id
        const filteredData = existingData.filter((data) => data.assignment_id === assignment_id);

        // update assignment file
        filteredData[0].file = file;
        filteredData[0].answered = true;

        // update localStorage with new data
        localStorage.setItem('Assigments', JSON.stringify(existingData));
    }

    static reviewAssignment(assignment_id, grade) {
        // update grade from assignment with assignment_id
        const existingData = JSON.parse(localStorage.getItem('Assigments')) || [];

        // Filter the data to only include assignment_id
        const filteredData = existingData.filter((data) => data.assignment_id === assignment_id);

        // update assignment grade
        filteredData[0].grade = grade;

        // update localStorage with new data
        localStorage.setItem('Assigments', JSON.stringify(existingData));
    }

    static setDummyData() {
        for (let i = 1; i <= 4; i++) {
            const assignment = new Assignment({ assignment_id: uuid(), subject_id: i, title: `Assignment ${i}`, description: `Description ${i}`, grade: 0 });
            assignment.publish();
        }
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

}



export default Assignment

