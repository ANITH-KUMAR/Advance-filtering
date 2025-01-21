import Input from '../../Components/Input';
import './Colors.css'

const Colors = ({handlechange}) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test3" onChange={handlechange} />
        <span className="checkmark all"></span>All
      </label>
      <Input
        value="black"
        title="Black"
        name="test3"
        color="black"
        handlechange={handlechange}
      />
      <Input
        value="blue"
        title="blue"
        name="test3"
        color="Blue"
        handlechange={handlechange}
      />
      <Input
        value="green"
        title="green"
        name="test3"
        color="Green"
        handlechange={handlechange}
      />
      <Input value="red" title="red" name="test3" color="Red" 
      handlechange={handlechange}/>

      <label className="sidebar-label-container">
        <input
          type="radio"
          value="white"
          name="test3"
          onChange={handlechange}
        />
        <span
          className="checkmark"
          style={{
            backgroundColor: "wheat",
            border: "2px solid black",
            color: "black",
          }}
        ></span>
        White
      </label>
    </div>
  );
}

export default Colors