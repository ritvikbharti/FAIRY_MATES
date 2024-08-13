import Card from "./Card/Card";
import "./Disease.css";

function Disease() {
  return (
    <>
      <div className="main-div container ">
        <div className="up mt-4 d-flex flex-row gap-3">
          <div className="left">
            <div className="para1 d-flex flex-col">
              <p className="main-heading">Common Health Concerns</p>
            </div>

            <div className="para2">
              <p className="main-down">
                Consult our Doctors Online on video call
              </p>
            </div>
          </div>
          <div className="right d-flex ">
            <div className="seeAll d-flex">
              <p>See All Symptoms</p>
            </div>
          </div>
        </div>
        <div className="down"> 
        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>
    </>
  );
}
export default Disease;
