import './Card1.css'
function Card1({bimarikaname,description}){
  return(
    <>
    <div  className="card1">
      <div className='up1card1 '>

      </div>
      <div className='down1'>
        <div className='inner1'>
          <div className='inner-p'>
          <p className='float-start'>{bimarikaname}</p>
          
          </div>
          
          
        </div>
        <div className='inner2'>
        <div className='description'>
        <p>{description}</p>
        </div>
        <div className='exp-btn'>
          <div className='buttone float-end'>
            <p>Explore</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Card1