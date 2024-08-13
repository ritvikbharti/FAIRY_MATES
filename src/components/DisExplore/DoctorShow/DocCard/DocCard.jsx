import './DocCard.css'
function DocCard(){
  return (
    <>
    <div className='doc-card-container-inner g-2'>
      <div className='doc-card-container-profile float-start'>
        <div className='card-con'></div>
        <div className='in-btn'>
          <p>Consult Now</p>
        </div>
      </div>
      <div className='doc-card-container-desc float-end'>
       <div className="doc-card-name">
        <p>Dr Taxi Sharma</p>
       </div>
      <div className="doc-card-desc">
        <ul>
          <li>Experince - 10Years</li>
          <li>Patient - 4089</li>
          <li>Rating - <div className='doc-card-rating'></div></li>
          <li>Specialization- Gyno,Pcod,Pcos</li>
        </ul>
      </div>

      </div>

    </div>
    </>
  )
}
export default DocCard