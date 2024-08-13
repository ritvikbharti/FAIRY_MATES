import AppBars from "./components/AppBar/AppBars"
import DisLanding from "./components/DisExplore/DisLandingPage/DisLanding"
import DoctorShow from "./components/DisExplore/DoctorShow/DoctorShow"
function DiseaseExplore(){
  return  (
    <>
    <AppBars/>
    <DisLanding/>
    <DoctorShow/>
    </>
  )
}
export default DiseaseExplore