
const Button = ({onclickhandler,value,title}) => {
  return (
     <button onClick={onclickhandler} value={value} className="btns">{title}</button>
  )
}

export default Button