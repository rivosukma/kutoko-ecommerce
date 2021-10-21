import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { uFlex, uItemsCenter, uJustifyCenter, uWidth100 } from "../../../../../styles/utils"

export const Div_carousel_itemC = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uJustifyCenter}
            ${uItemsCenter}
        `
    }
`

export const Img_carousel_item = styled.img`
    ${props => 
        props?.custom ?? css`
            min-width: 100%;
        `
    }
`