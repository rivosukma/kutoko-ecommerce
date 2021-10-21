import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { 
    uFlex, 
    uFlexCol, 
    uItemsEnd, 
    uJustifyBetween, 
    uJustifyCenter, 
    uOverflowXScroll, 
    uPadding, 
    uSemiBold, 
    uWidth100,
    uWording
} from '../../../../styles/utils'
import { gPaddingX } from '../../../../styles/variables'

export const Div_sliderC = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uFlexCol}
            ${uJustifyCenter}
            ${uWidth100}
            ${uPadding(0, gPaddingX)}
        `
    }
`

export const Div_sliderH = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uItemsEnd}
            ${uJustifyBetween}
            ${uWidth100}
        `
    }
`

export const P_sliderMore = styled.p`
    ${props => 
        props?.custom ?? css`
            ${uWording(18, uSemiBold, '#928A8A')}
        `
    }
`

export const Div_slider_content = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uOverflowXScroll}
            overflow-y: hidden;
            
            &::after {
                content: ' ';
                white-space: pre;
            }
        `
    }
`