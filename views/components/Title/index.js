import { H5_title } from "./Title.styles"

const Title = props => {

    const {
        children
    } = props

    return(
        <H5_title>
            {children}
        </H5_title>
    )
}
export default Title