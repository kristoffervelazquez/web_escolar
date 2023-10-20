import React from "react";

export default function Subjects(props){
    const { subjects } = props;
    return( 
            
        <div className="subjects">
                {subjects.map((item,index) => (
                
                <div className="subjects" key={index}>
                 <button><img src={item.imagePath}/>{item.subjectName}</button>

                 </div>
                ))}
            </div>

    );


}