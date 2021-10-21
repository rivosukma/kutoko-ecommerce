import { 
    Div_productC, 
    Img_product, 
    Div_product_content, 
    P_product_name, 
    H5_product_price, 
    P_product_merk
} from "./Product.styles"

const ProductCard = props => {

    const {
        data
    } = props
    
    return(
        <Div_productC>
            <Img_product
                src={data.photo}
            />
            <Div_product_content>
                <P_product_name>
                    {data.name}
                </P_product_name>
                <H5_product_price>
                    Rp {data.price}
                </H5_product_price>
                <P_product_merk>
                    {data.merk}
                </P_product_merk>
                {data.rating}
                <div>{data.color}</div>
            </Div_product_content>
        </Div_productC>
    )
}
export default ProductCard