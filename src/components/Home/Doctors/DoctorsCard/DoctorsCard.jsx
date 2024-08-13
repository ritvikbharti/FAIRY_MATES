import "./DoctorsCard.css";

function DoctorsCard() {
  return (
    <>
      <div className="main-card">
        <div className="profile">
          <div className="profile-card"></div>
          <div className="view">
            <a href="#" className="float-end">
              View Profile
            </a>
          </div>
        </div>
        <div className="admin">
          <div className="admin-inner1">
            <div className="name float-start">
              <div className="name-head">
                {" "}
                <p>Dr Ritvik Bharti</p>
              </div>
              <div className="description mt-2">
                <p>
                  <ul>
                    <li>16 year experience</li>
                    <li>MBBS, MD - General Medicine, DNB - Neurology</li>
                    <li>Max Super Speciality Hospital , Delhi/NCR</li>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="consult float-end">
              <div className="para1-c consult-inner">
                <p className="float-end">Consultation Fee</p>
              </div>
              <div className="fee consult-inner">
                <p className="float-end">$299/-</p>
              </div>
              <div className="consult-btn consult-inner">
                <div className="cons-btn">
                  <p> Consult Now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-inner2"></div>
          <div className="admin-inner3 mt-3">
            <div className="rating-container ">
              <div className="rating-inner">
                <div className="min-rate star-container">
                  <div className="star"></div>
                  <div className="star-data">
                    <p>4.5</p>
                  </div>
                  
                </div>
                
              </div>
              <div className="rating-inner"></div>
              <div className="rating-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DoctorsCard;
