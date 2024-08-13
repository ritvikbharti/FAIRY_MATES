import './Doctors.css'
import DoctorsCard from './DoctorsCard/DoctorsCard'

function Doctors(){
  return <>
  <div className='doctor-main'>
    <div className='main-heading'>
      <p>Some of our experienced doctors</p>
    </div>
    <div className='Card-container'>
      <DoctorsCard/>
      <DoctorsCard/>

    </div>
  </div>
  </>
}

export default Doctors