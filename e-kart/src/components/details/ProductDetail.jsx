
import { Typography, Box, Table, TableBody, TableRow, TableCell, styled } from "@mui/material";

import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
margin-right: 10px;
color: #00CC00;
font-size: 15px;
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;

    & > td {
        font-weight: 200;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim2.flixcart.com/lockin/400/400/images/promotion_banner_v2_active.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));


    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Reviews
                <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} /> </Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: ' #878787' }}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount} off</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography> <StyledBadge /> Get Extra 20% off upto ₹50 on 1 item(s) T&c </Typography>
                <Typography> <StyledBadge /> Get ₹25 instant discount on first Flipkart UPI txns on order of ₹250 and aboveT&C</Typography>
                <Typography> <StyledBadge /> 5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                <Typography> <StyledBadge /> 10% Cashback on Flipkart Digital WalletT&C</Typography>
                <Typography> <StyledBadge /> 10% Cashback on Flipkart BookMyShow T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery By {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{ color: '#2874f0' }}>SuperComNetwork</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>7 Days Replacement Policy</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} alt="" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;