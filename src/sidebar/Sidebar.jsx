import Category from './category/Category'
import Price from './Price/Price'
import Color from "./colors/Colors";
import './Sidebar.css'
const Sidebar = ({handlechange}) => {

  return (
    <>
      <section className="sidebar">
        <div className="logo container">
          <h1>🛒</h1>
        </div>

        <Category handlechange={handlechange} />
        <Price handlechange={handlechange} />
        <Color handlechange={handlechange} />
      </section>
    </>
  );
}

export default Sidebar