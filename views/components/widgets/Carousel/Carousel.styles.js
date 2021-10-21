import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { 
    uAbsolute,
    uDefaultTransition,
    uFlex,
    uItemsCenter,
    uJustifyBetween,
    uNormal,
    uOverflowHidden,
    uPadding,
    uWidthHeight,
    uWording,
    uZIndex
} from "../../../../styles/utils"
import { gPaddingX } from "../../../../styles/variables"

export const Div_carouselC = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uItemsCenter}
            ${uJustifyBetween}
            ${uOverflowHidden}
            ${uPadding(0, gPaddingX)}
            ${uWidthHeight('100%', '100vh')}

            &:hover {
                .btn-carousel{
                    opacity: 1;
                    transition: all .35s ease-in-out;
                }
                .btn-prev {
                    transform: translateX(40px);
                }
                .btn-next {
                    transform: translateX(-40px);
                }
            }
        `
    }
`

export const Div_innerC = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uItemsCenter}
            ${uDefaultTransition}
            transform: translateX(${props.slide * - props.translateX}%)
        `
    }
`

export const Btn_prev = styled.button`
    ${props => 
        props?.custom ?? css`
            ${uAbsolute}
            ${uPadding(12)}
            ${uZIndex(20)}

            opacity: 0;
            left: 220px;
            transition: all .35s ease-in-out;

            &:hover {
                ${uWording(12, uNormal, '#18191F')}
                ${uPadding(14)}
            }
        `
    }
`

export const Btn_next = styled.button`
    ${props => 
        props?.custom ?? css`
            ${uAbsolute}
            ${uPadding(12)}
            ${uZIndex(20)}

            opacity: 0;
            right: 220px;
            transition: all .35s ease-in-out;

            &:hover {
                ${uWording(12, uNormal, '#18191F')}
                ${uPadding(14)}
            }
        `
    }
`
