function Button(props){
const {title,backgroundColor,textColor} = props;
    return(
        <button 
       style={{background:backgroundColor,color:textColor}}
        className="button">{title}</button>
    )
}

export default Button;