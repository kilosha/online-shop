import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { clearError } from '../redux/userSlice';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '75%' })};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 2px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`;

const LinkText = styled.span`
    margin: 5px 0px;
    font-size: 11px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color: red;
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

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('');
    const dispatch = useDispatch();
    const { isFetching, error, errorMsg } = useSelector((state) => state.user);

    const handleLoginClick = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setValidationError('Please, fill all mandatory fields!');
        } else {
            login(dispatch, { username, password });
        }
    };

    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);


    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <Input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button disabled={isFetching} onClick={handleLoginClick}>
                        LOGIN
                    </Button>
                    {error && <Error>{errorMsg.message}</Error>}
                    {validationError && <Error>{validationError}</Error>}
                    <LinkText>FORGOT PASSWORD?</LinkText>
                    <StyledLink to={"/register"}>
                        <LinkText>CREATE AN ACCOUNT</LinkText>
                    </StyledLink>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;