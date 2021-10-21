import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { gPaddingX } from "../../../styles/variables"
import { 
    uFlex, 
    uFlexCol, 
    uJustifyBetween,
    uPadding,
    uWidth100, 
    uZIndex
} from "../../../styles/utils"

export const Div_homeC = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uFlex}
            ${uFlexCol}
            ${uJustifyBetween}
            ${uWidth100}
            ${uPadding(28, 0)}
            ${uZIndex(99)}

            min-height: 100vh;
        `
    }
`