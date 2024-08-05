import { useContext } from 'react';
import dropdownIcon from "../component/Assets/dropdown_icon.png";
import Item from '../component/Item/Item';
import "./css/Shopcatecory.css";
import { ShopContext } from '../Context/Shopcontext';
import PropTypes from 'prop-types';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)

  return (
    <div className='shopcategory'>
      <img src={props.banner} className='shopcategory-banner' alt="Shop Banner" />
      <div className='shopcategory-index-sort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdownIcon} alt="Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => (
          props.category === item.category && (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        ))}
      </div>
      <div className='shopcategory-load'>
        Explore more
      </div>
    </div>
  );
};

ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
