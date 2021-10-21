import { Div_carousel_itemC, Img_carousel_item } from "./Item.styles"

const CarouselItem = props => {

    const {
        data
    } = props

    return(
        <Div_carousel_itemC>
            <Img_carousel_item 
                src={data.image}
            />
        </Div_carousel_itemC>
    )
}
export default CarouselItem