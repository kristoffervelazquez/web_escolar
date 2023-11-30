import cards from "../../CSS/Cards.css";
import subjectsJson from "../../assets/db/subjects.json";

const Cards = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="container">
      {subjectsJson.map((item, index) =>
        (storedUser.type === "Teacher" && 
        storedUser.subjects === item.id && 
        (storedUser.expedient === item.teacher) ||
        storedUser.type === "Student" ? (
            <div className="grid-container" key={index}>
              <div className="card">
                <div className="top-section">
                  <div className="border"></div>
                  <div className="icons">
                    <div className="logo">
                    <img
                      src={item.teacherImg}
                      alt={`${item.subjectName} teacher`}
                    />
                    </div>
                  </div>
                </div>
                <div className="bottom-section">
                  <span className="title">{item.subjectName}</span>
                  <div className="row row1">
                    <div className="item">
                      <span className="big-text">23</span>
                      <span className="regular-text">Calificadas</span>
                    </div>
                    <div className="item">
                      <span className="big-text">4</span>
                      <span className="">Tareas por hacer</span>
                    </div>
                    <div className="item">
                      <span className="big-text">1</span>
                      <span className="regular-text">Vencidas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        ) 
      )}
    </div>
  );
};

export default Cards;
