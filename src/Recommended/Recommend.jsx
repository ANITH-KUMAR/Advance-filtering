import Button from '../Components/Button';
import './Recommend.css'

const Recommend = ({handleclick}) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onclickhandler={handleclick} value="" title="All Products" />
          <Button onclickhandler={handleclick} value="Nike" title="Nike" />
          <Button onclickhandler={handleclick} value="Adidas" title="Adidas" />
          <Button onclickhandler={handleclick} value="Puma" title="Puma" />
          <Button onclickhandler={handleclick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
}

export default Recommend