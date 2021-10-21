import { 
    Div_headerC,
    Div_headerTxtC,
    H2_Logo, 
    A_headerT
} from "./Header.styles"

const Header = props => {
    
    const {
        data
    } = props

    return(
        <Div_headerC>
            <Div_headerTxtC>
                <A_headerT
                    href={'a'}
                >
                    Home
                </A_headerT>
                <A_headerT
                    href={'a'}
                >
                    Promo
                </A_headerT>
                <A_headerT
                    href={'a'}
                >
                    Reward
                </A_headerT>
            </Div_headerTxtC>
            <H2_Logo>
                KUTOKO.
            </H2_Logo>
            <Div_headerTxtC>
                <A_headerT
                    href={'a'}
                >
                    Cart
                </A_headerT>
                <A_headerT
                    href={'a'}
                >
                    Login
                </A_headerT>
                <A_headerT
                    href={'a'}
                >
                    Register
                </A_headerT>
            </Div_headerTxtC>
        </Div_headerC>
    )
}

Header.defaultProps = {
    data: ''
}

export default Header