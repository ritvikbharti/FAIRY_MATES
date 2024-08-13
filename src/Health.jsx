import AppBars from "./components/AppBar/AppBars"
import HealthLanding from "./components/HealthReport/HealthLanding/HealthLanding"
import HealthOverview from "./components/HealthReport/HealthOverview/HealthOverview"
function Health(){
  return <>
  <AppBars/>
  
  <HealthLanding/>
  <HealthOverview/>
  </>
}
export default Health