import {useNavigate} from 'react-router-dom'

function Button(props){
 const navigate = useNavigate(); 

const {title,backgroundColor,textColor} = props;
    return(
        <button 
       style={{
        "--btn-bg":backgroundColor,
        "--btn-text": textColor,
        }}
        className="button" onClick = {()=>navigate(props.url)}>{title}</button>
    )
}

export default Button;