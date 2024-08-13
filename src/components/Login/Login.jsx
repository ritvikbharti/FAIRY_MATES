import './Login.css'
function Login(){
  return (
    <> 
    <center>
      <div className="login-main-container"> 
      <div class="log-in">
            <div class="inner-log-in">
                <h1 >SIGN IN</h1>
                <label for="email" id="email-put" className='label1 '>Email or Mobile NO</label>
                
                
                <input type="email" name="email" id="ema" placeholder="abc@example.com"></input>

              
                <input type="submit" id="submit" value="CONTINUE"></input>
                <p id="para">By continuing, you agree to Denovo's  <a href="">Conditions of Use</a> and <a href="">Privacy Notice.</a></p>
                <ul type="circle">
                    <li><a href="">Need Help</a></li>
                </ul>
                <p id="buy">Buying for drink?</p>
               
            </div>
           
            <div class="create-new">
                <input type="submit" id="submit2" value="Create New Account."></input>


            </div>
            
        </div>
      </div>
    </center>
    
    </>
  )
}
export default Login