import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { gPaddingX } from "../../../styles/variables"
import { 
    uBold,
    uFlex, 
    uItemsCenter, 
    uJustifyBetween,
    uMargin,
    uNormal,
    uPadding,
    uThicker,
    uWidth100, 
    uWording, 
    uZIndex
} from "../../../styles/utils"

export const Div_headerC = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uItemsCenter}
            ${uJustifyBetween}
            ${uWidth100}
            ${uPadding(28, gPaddingX)}
            ${uZIndex(99)}
        `
    }
`

export const Div_headerTxtC = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uItemsCenter}
            ${uJustifyBetween}
        `
    }
`

//text
export const A_headerT = styled.a`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uItemsCenter}
            ${uJustifyBetween}
            ${uMargin(0, 12, 0)}
            ${uWording(14, uNormal, '#18191F')}

            :first-of-type {
                margin-left: 0;
            }
            :last-child {
                margin-right: 0;
            }

            &:hover {
                ${uWording(14, uThicker, '#18191F')}
            }
        `
    }
`

export const H2_Logo = styled.h2`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uItemsCenter}
            ${uJustifyBetween}
            ${uWording(36, uBold, '#18191F')}
        `
    }
`