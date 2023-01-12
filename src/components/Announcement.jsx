import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
`;

const Announcement = () => {
    return <Container>Super Deal! Order now and get 10% discount!</Container>;
};

export default Announcement;