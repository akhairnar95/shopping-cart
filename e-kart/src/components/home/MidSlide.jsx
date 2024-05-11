import { Box, styled } from "@mui/material"
import Slide from "./Slide"

const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
    width: '85%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme }) => ({
    background: '#FFFFFF',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    width: '15%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));


const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/530/810/image/b0f0dc57bbc165d3.png?q=20';


    return (
        <Component>
            <LeftComponent>
                <Slide
                    products={products}
                    title={title}
                    timer={timer} />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="ad" style={{ width: 217 }} />
            </RightComponent>
        </Component>
    )
}

export default MidSlide;