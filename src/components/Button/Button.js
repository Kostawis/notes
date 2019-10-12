import styled, { css } from 'styled-components';

const Button = styled.button`
    background-color: #ffd82b;
    border-radius: 30px;
    border: none;
    width: ${({ width }) => width || '220px'};
    height: 47px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;

    ${({ secondary }) => (
        secondary && css`
            background-color: #e6e6e6;
            width: 105px;
            height: 30px;
            font-size: 10px;
            letter-spacing: 1px;
        `
    )}
`;

export default Button;