import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { uBackgroundColor, uColor, uPadding } from "../../../styles/utils"
import { gPaddingX } from "../../../styles/variables"

export const Div_footerC = styled.div`
    ${props => 
        props?.custom ?? css`
            ${uColor('#fff')}
            ${uBackgroundColor('#0B0D17')}
            ${uPadding(28, gPaddingX)}
        `
    }
`