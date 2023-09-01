import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMYPRODUCTS=[{
  id:1,
  price:50,
title:'My Firt Book',
description:"First book I have ever wrote"},
{
  id:2,
  price:100,
title:'My Second Book',
description:"Second book I have ever wrote"}]


const Products = (props) => {

  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYPRODUCTS.map((data,i)=>(
          <ProductItem
          key={i}
          id={data.id}
          title={data.title}
       
          price={data.price}
          description={data.description}
        />
        ))
        }
      </ul>
    </section>
  );
};
export default Products;