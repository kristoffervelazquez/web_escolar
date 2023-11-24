import React from "react";
import { useNavigate } from "react-router-dom";

export default function Subjects(props) {
    const { subjects } = props;

    const navigate = useNavigate();

    const handleClick = (item) => {
        // console.log('app/subject/' + item.id)
        navigate(`/app/subject/${item.id}/activities`);
    }
    
  let localUserInfo = localStorage.getItem('user');
  let storedUser = JSON.parse(localUserInfo);

    

    return (

        <div className="subjects">
            {subjects.map((item, index) => (
                storedUser.type === "Teacher" && storedUser.subjects === item.id ? (
                <div className="subjects" key={index}>
                    { /* <img src={item.imagePath} />*/ }
                    <img onClick={() => handleClick(item)}  src={item.imagePath}/>

                </div>
            ): storedUser.type === "Student" ?(
                
                <div className="subjects" key={index}>
                    { /*<img src={item.imagePath}/>*/ }
                 <img onClick={() => handleClick(item)}  src={item.imagePath}/>

                </div>

            ):null))}
        </div>

    );


}