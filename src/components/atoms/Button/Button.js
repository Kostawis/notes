import styled, { css } from 'styled-components';

const Button = styled.button`
    display: grid;
    place-items: center;
    text-decoration: none;
    color: black;
    padding: 0;
    background-color: ${({ activecolor, theme }) => theme[activecolor]};
    border-radius: 50px;
    border: none;
    width: ${({ width }) => width || '220px'};
    height: 47px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: ${({ theme }) => theme.bold};
    font-size: 16px;

    ${({ secondary }) => (
        secondary && css`
            background-color: ${({ theme }) => theme.grey200};
            width: 105px;
            height: 30px;
            font-size: 10px;
            letter-spacing: 1px;
        `
    )}

    &:hover {
        cursor: pointer;
    }
`;

export default Button;