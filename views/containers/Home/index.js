import dynamic from 'next/dynamic'
import { Fragment } from 'react'
import { mod } from '../../../helpers/modular'
import { getItems } from '../../../services/Items'
import { carousel_data, modular_data } from './data'
import { Div_homeC } from "./Home.styles"

const Carousel = dynamic(() => import("../../components/widgets/Carousel"))
const Slider = dynamic(() => import("../../components/widgets/Slider"))

const Home = props => {
    
    const {
        carousel,
        items,
        modular
    } = props

    return(
        <Div_homeC>
            {
                modular
                    ?.map((mdl, index) => {
                        return(
                            <Fragment 
                                key={index}
                            >
                                {
                                    mdl.component === mod.carousel
                                        && <Carousel 
                                                data={carousel}
                                            />
                                }
                                {
                                    mdl.component === mod.slider
                                        && <Slider 
                                                header={mdl?.title} 
                                                content={items?.data?.items}
                                                max={8}
                                            />
                                }
                                {
                                    mdl.component === mod.banner
                                        && 'banner'
                                }
                            </Fragment>
                        )
                    })
            }
        </Div_homeC>
    )
}

Home.getInitialProps = async () => {
    const promises = [
        getItems()
    ]

    const data = await Promise.all(promises);

    const modular = modular_data
    const carousel = modular?.length > 0 && modular?.filter(item => item.component === mod.carousel) && carousel_data || []
    const items = data[0]?.data

    return {
        carousel,
        items,
        modular
    }
}

export default Home