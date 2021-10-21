import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const Btn = styled.button`
    ${props => 
        props?.custom ?? css`
            ${uWording(24, uSemiBold, '#000')}
        `
    }
`