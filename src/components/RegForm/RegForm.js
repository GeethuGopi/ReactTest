import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './RegForm.css';
const RegForm = () =>{
    const [cardNum,setCardNum] = useState('');
    console.log(cardNum);
    
    const [cvc,setCvc]=useState('');
    console.log(cvc);
    const[date,setDate] = useState('');
    console.log(date);
    return(
        <div className="container">
       
        <h2>Welcome</h2>
        <form>
        <div className="cardNum">
        <TextField required id="outlined-basic" label="Credit card" variant="outlined" size="small" type="number" value={cardNum} onChange={(e)=>{setCardNum(e.target.value)}}/>
        </div>
        <div className="secondRow">
        <TextField style={{width:'100px'}} required id="outlined-basic" placeholder="cvc" variant="outlined" size="small" type="number" value={cvc} onChange={(e)=>setCvc(e.target.value)}/>
        <TextField style={{width:'100px'}} className="expiry" required id="outlined-basic" placeholder="expiry" variant="outlined" size="small" maxRows="3" value={date} onChange={(e)=>setDate(e.target.value)} />
        </div>
        <div className="button">
            <Button disabled={!cardNum||!cvc||!date} style={{width:'250px'}}variant="contained" color="primary">Submit</Button>
        </div>
        </form>
    
        </div>
    )
}

export default RegForm;