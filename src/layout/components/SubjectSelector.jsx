import React from "react";
import { useNavigate } from "react-router-dom";

export default function Subjects(props) {
    const { subjects } = props;

    const navigate = useNavigate();

    const handleClick = (item) => {
        // console.log('app/subject/' + item.id)
        navigate(`/app/subject/${item.id}/activities`);
    }

    

    return (

        <div className="subjects">
            {subjects.map((item, index) => (

                <div className="subjects" key={index}>
                    {/* <img src={item.imagePath} /> */}
                    <button onClick={() => handleClick(item)}>{item.subjectName}</button>

                </div>
            ))}
        </div>

    );


}