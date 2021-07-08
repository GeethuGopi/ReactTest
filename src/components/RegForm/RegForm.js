import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validator from 'validator'

import './RegForm.css';
const RegForm = () =>{
    const [cardNum,setCardNum] = useState('');
    
    const [cvc,setCvc]=useState('');
    
    const[date,setDate] = useState('');
    const[errorMsg,setErrorMsg] = useState('')

    const validateDate = (value) => {
        if(validator.isDate(value)){
           
            setErrorMsg("correct Date")
             setDate(value)
        } else {
            setErrorMsg("Enter Valid Date (yyy/mm/dd)")
             setDate('')
        }
    }

    const checkCreditcardNum = (e) =>{
        if (e.target.value.split("").length <= 16) {
            setCardNum(e.target.value)
        }  
    }
    
    const checkCvcNum = (e) => {
        if (e.target.value.split("").length <= 4) {
            setCvc(e.target.value)
        } 
    }

    const handleSubmit=()=>{
        console.log(cardNum);
        console.log(cvc);
        console.log(date);
    }
    return(
        <div className="container">
       
        <h2>Welcome</h2>
        <form>
        <div className="cardNum">
        <TextField style={{width:'300px'}}  required id="outlined-basic" label="Credit card" variant="outlined" size="small" type="number" value={cardNum} onChange={checkCreditcardNum}/>
        </div>
        <div className="secondRow">
        <TextField style={{width:'90px'}} required id="outlined-basic" label="Cvc"  variant="outlined" size="small" type="number" value={cvc} onChange={checkCvcNum}/>
        <TextField style={{width:'150px'}} className="expiry" required id="outlined-basic" label="expiry" variant="outlined" size="small"   type = "text"  onChange={(e)=>validateDate(e.target.value)} />
        <span style={{fontWeight:"bold",color:"red"}}>{errorMsg}</span>
        </div>
        <div className="button">
            <Button  disabled={!cardNum||!cvc||!date} style={{width:'300px'}} variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </div>
        </form>
    
        </div>
    )
}

export default RegForm;