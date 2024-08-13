import  Card1 from "./Card1/Card1"
// import sty
import "./CommonIssues.css"


function CommonIssues() {
  var arr = [{disease:"PCOD",description:"PCOD is a condition in which ovaries produce many immature or partially mature eggs.",id:"asdasdasdacb123"},{disease:"PCOD",description:"PCOD is a condition in which ovaries produce many immature or partially mature eggs."},{disease:"PCOD",description:"PCOD is a condition in which ovaries produce many immature or partially mature eggs.",id:"asdasdasdacb123"}]
  return (
    <>
      <div className="container main-div ">
        <div className="up mt-4 d-flex flex-row gap-3">
          <div className="left">
            <div className="para1 d-flex flex-col">
              <p className="main-heading">Some Common Issues</p>
            </div>

            <div className="para2">
              <p className="main-down">
                Love to  help another
              </p>
            </div>
          </div>
          
        </div>
        <div className="down2"> {
          arr.map((e)=><Card1  bimarikaname={e.disease} description={e.description}></Card1>)
        }

        </div>
      </div>
    </>
  );
}
export default CommonIssues;