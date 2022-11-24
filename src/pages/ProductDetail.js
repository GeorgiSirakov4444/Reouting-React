import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    console.log(params.productId);
    return <section>
        <h3>Detail Detail</h3>
        <p>{params.productId}</p>
    </section>
};


export default ProductDetail;