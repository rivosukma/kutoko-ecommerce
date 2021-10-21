import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { uSemiBold, uWording } from "../../../styles/utils"

export const H5_title = styled.h5`
    ${props => 
        props?.custom ?? css`
            ${uWording(24, uSemiBold, '#000')}
        `
    }
`