
import './DoctorShow.css'
import DocCard from './DocCard/DocCard'

function DoctorShow(){
  return (
    <>
   

    <div className='card-main'
    >
      <div className="card-main-heading">
        <p>Recommended Doctors</p>
      </div>
      <div className='doc-card-container'>
        <DocCard/>
        <DocCard/>
        <DocCard/>
        <DocCard/>
      </div>
    </div>
    
    </>
  )
}
export default DoctorShow