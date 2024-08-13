import './HealthOverviewGraph.css'


function HealthOverviewGraph(){
  return (
    <div className='graph-main'>
      <div className='graph-heading'><p><img src="src/assets/heart.png" alt="" />Heart Rate</p></div>
      <div className='graph-rate'><p><span className='fx'>144-180</span>bps</p></div>
      <div className='graph-rate-gra'></div>

    </div>
  )
}
export default HealthOverviewGraph