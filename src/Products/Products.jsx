
import './Products.css'
// import Card from '../Components/card'
const Products = ({result}) => {
  return (
    <>
      <section className="card-container">
           {result}
      </section>
    </>
  );
}

export default Products