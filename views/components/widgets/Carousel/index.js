import { useState } from "react"
import { 
    Btn_next,
    Btn_prev,
    Div_carouselC,
    Div_innerC
} from "./Carousel.styles"
import CarouselItem from "./Item"

const Carousel = props => {

    const {
        data
    } = props

    const [current, setCurrent] = useState(0)

    const onPrevHandler = () => {
        if(current <= 0) return setCurrent(data?.length - 1)
        return setCurrent(current - 1)
    }

    const onNextHandler = () => {
        if(current === data?.length - 1) return setCurrent(0)
        return setCurrent(current + 1)
    }

    return(
            <Div_carouselC>
                <Btn_prev 
                    className="btn-carousel btn-prev"
                    onClick={() => onPrevHandler()}
                >
                    prev
                </Btn_prev>
                    <Div_innerC 
                        slide={current}
                        translateX={100}
                    >
                        {
                            data?.length > 0 
                                && data
                                    ?.map((item, index) => {
                                        return(
                                            <CarouselItem 
                                                key={index}
                                                data={item}
                                            />
                                        )
                            })
                        }
                    </Div_innerC>
                <Btn_next
                    className="btn-carousel btn-next"
                    onClick={() => onNextHandler()}
                >
                    next
                </Btn_next>
            </Div_carouselC>
    )
}
export default Carousel