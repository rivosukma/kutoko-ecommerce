import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { 
    uBorder,
    uBorderRadius,
    uFlex, 
    uFlexCol,
    uLighter,
    uMargin, 
    uNormal, 
    uOverflowHidden,
    uPadding,
    uThicker,
    uWidthHeight,
    uWording
} from "../../../../styles/utils"

export const Div_productC = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uFlexCol}
            ${uOverflowHidden}
            ${uBorder(1, '#f0f0f0')}
            ${uBorderRadius(5)}
            ${uMargin(0, 4)}

            min-width: 200px; 

            :first-of-type{
                margin-left: 0;
            }
            :last-child{
                margin-right: 0;
            }
        `
    }
`

export const Img_product = styled.img`
    ${props => 
        props?.custom ?? css`
            ${uWidthHeight(220, 250)}
        `
    }
`

export const Div_product_content = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uPadding(12)}
        `
    }
`

export const P_product_name = styled.p`
    ${props => 
        props?.custom ?? css`
            ${uWording(12, uNormal, '#000')}
        `
    }
`

export const H5_product_price = styled.h5`
    ${props => 
        props?.custom ?? css`
            ${uWording(16, uThicker, '#000')}
        `
    }
`

export const P_product_merk = styled.p`
    ${props => 
        props?.custom ?? css`
            ${uWording(14, uLighter, '#1F1F1FBF')}
        `
    }
`