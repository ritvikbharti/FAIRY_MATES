import './HealthLanding.css'
function HealthLanding(){
  return <>
    <div className='main-div d-flex flex-row justify-content-around'>
      <div className='main-div-desc'>
        <div className='main-div-desc-heading main-inside'>
          <p>Overview Medical Report</p>
        </div>
        <div className='main-div-desc-btn-container main-inside'>
          <div className='main-inside-btn'><p>Hirustim-score</p></div>
          <div className='main-inside-btn'><p>Acne</p></div>
          <div className='main-inside-btn'><p>Irregular menses</p></div>
          <div className='main-inside-btn'><p>polycistic ovaries</p></div>
        </div>
        <div className='main-div-graph float-end'></div>
      </div>
      <div className='main-div-prof'>
        <div className='main-div-prof-name-container'>
          <div className='main-div-name'> <p>Vidushi Disouja</p> </div>
          <div className='main-div-percent'>
            <div className='block1'>
              <p>94.5%</p>
            </div>
          </div>

        </div>
      </div>

    </div>
    
  </>
}
export default HealthLanding