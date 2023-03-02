import styled from 'styled-components';
import { AccountCircleOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout }  from '../redux/userSlice';
import { clearCart }  from '../redux/cartSlice';

const Container = styled.div`
    height: 90px;
    ${mobile({ height: '50px' })};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '10px 0px' })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: '50px' })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ display: 'none' })}
`;

const LogoShortCut = styled.h1`
    display: none;
    font-weight: bold;
    ${mobile({ display: 'inline', fontSize: '24px' })};
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ flex: 2, justifyContent: 'center' })};
`;

const SubMenu = styled.div`
    display: none;
    position: absolute;
    right: 0;
    top: 20px;
    width: 100px;
    height: 50px;
`;

const SubMenuItem = styled.button`
    border: none;
    background-color: white;
    font-size: 12px;
    cursor: pointer;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })};

    &:hover ${SubMenu}{
        display: flex;
        flex-direction: column;
    }
`;

const MenuItemText = styled.span`
    font-size: 14px;
    margin-left: 8px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: black;
    }
`;

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(clearCart());
        dispatch(logout());
    }

    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder="Search" />
                            <Search style={{ color: 'gray', fontSize: 16 }} />
                        </SearchContainer>
                    </Left>
                    <Center>
                        <StyledLink to={'/'}>
                            <Logo>Luxury&Comfort</Logo>
                            <LogoShortCut>L&C</LogoShortCut>
                        </StyledLink>
                    </Center>
                    <Right>
                        {user ? (
                            <StyledLink to={'/account'}>
                                <MenuItem>
                                    <AccountCircleOutlined />
                                    <MenuItemText>My Account</MenuItemText>
                                    <SubMenu>
                                        <SubMenuItem>My Account</SubMenuItem>
                                        <SubMenuItem onClick={onLogoutClick}>Logout</SubMenuItem>
                                    </SubMenu>
                                </MenuItem>
                            </StyledLink>
                        ) : (
                            <StyledLink to={'/login'}>
                                <MenuItem>
                                    <AccountCircleOutlined />
                                    <MenuItemText>Sign In</MenuItemText>
                                </MenuItem>
                            </StyledLink>
                        )}
                        <StyledLink to={'/cart'}>
                            <MenuItem>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                                <MenuItemText>Shopping Bag</MenuItemText>
                            </MenuItem>
                        </StyledLink>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Navbar;
