import ProductCard from "../../Card/Product"
import Title from "../../Title"
import { Div_sliderC, Div_sliderH, Div_slider_content, P_sliderMore } from "./Slider.styles"

const Slider = props => {

    const {
        header,
        content,
        max
    } = props

    return(
        <Div_sliderC>
            {
                typeof header === 'string'
                    &&  <Div_sliderH>
                            <Title>
                                {header}
                            </Title>
                            <P_sliderMore>
                                See more
                            </P_sliderMore>
                        </Div_sliderH>
            }

            <Div_slider_content>
                {
                    content?.length > 0
                    && content
                            ?.slice(0, max)
                            ?.map((item, index) => {
                            return(
                                <ProductCard
                                    key={index}
                                    data={item}
                                />
                            )
                        })
                }
            </Div_slider_content>
        </Div_sliderC>
    )
}
export default Slider