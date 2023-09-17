import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({product})=>{
    const options = {
        value: 2.5,
        readOnly: true,
        precision: 0.5,
      };
return <div>
            <Link className="productCard" to={product._id}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <Rating {...options} />{" "}
                <span className="productCardSpan">
                {" "}
                (Reviews 256 )
                </span>
            </div>
      <span>{`${product.price}`}</span>


            </Link>
</div>
};
export default ProductCard;