import './HealthOverview.css'
import HealthOverviewGraph from './HealthOverviewGraphCard/HealthOverviewGraphCard'


function HealthOverview(){
  return (
    <>
    <div className='health-overview-main'>
      <div className='health-overview-main-inner1 float-start'>
        <div className='health-overview-heading'>
          <p>Health Overview</p>
        </div>
        <div className='health-overview-graph-container'>
          <HealthOverviewGraph/>
          <HealthOverviewGraph/>
          <HealthOverviewGraph/>
          <HealthOverviewGraph/>
          
        </div>
      </div>
      <div className='health-overview-main-inner2 float-end'>

      </div>

      
    </div>
    </>
  )
}

export default HealthOverview