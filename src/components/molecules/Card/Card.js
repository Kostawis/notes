import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
    min-height: 380px;
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
    overflow: hidden;
    border-radius: 10px;
    display: grid;
    grid-template-rows: .25fr 1fr;
`;

const InnerWrapper = styled.div`
position: relative;
    padding: 17px 30px;
    background-color: ${({ theme, activeColor }) => activeColor ? theme[activeColor] : 'white'};

    :first-of-type {
        z-index: 999;
    }

    ${({ flex }) =>
        flex && css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `
    }
`;

const DateInfos = styled(Paragraph)`
    margin: 0 0 10px;
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
    margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
    width: 86px;
    height: 86px;
    border: 5px solid ${({ theme }) => theme.twitters};
    border-radius: 50%;
    position: absolute;
    right: 25px;
    top: 25px;
`;

const StyledLinkButton = styled.a`
    width: 47px;
    height: 47px;
    display: block;
    border-radius: 50%;
    background: white url(${LinkIcon}) no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    background-size: 60%;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);

`;

class Card extends Component {
    state = {
        redirect: false
    }

    handleCardClick = () => this.setState({ redirect: true })

    render() {
        const { id, pageContext, title, created, twitterName, articleUrl, content, removeItem } = this.props

        if (this.state.redirect) {
            return <Redirect to={`${pageContext}/${id}`} />
        }

        return (
            <StyledWrapper onClick={this.handleCardClick}>
                <InnerWrapper activeColor={pageContext}>
                    <StyledHeading>{title}</StyledHeading>
                    <DateInfos>{created}</DateInfos>
                    {pageContext === 'twitters' && <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />}
                    {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
                </InnerWrapper>
                <InnerWrapper flex>
                    <Paragraph>{content}</Paragraph>
                    <Button onClick={() => removeItem(pageContext, id)} secondary>remove</Button>
                </InnerWrapper>
            </StyledWrapper>
        )

    }
}

Card.propTypes = {
    pageContext: propTypes.oneOf(['notes', 'twitters', 'articles']),
    title: propTypes.string.isRequired,
    created: propTypes.string.isRequired,
    twitterName: propTypes.string,
    articleUrl: propTypes.string,
    content: propTypes.string.isRequired,

}

Card.defaultProps = {
    pageContext: 'notes',
    twitterName: null,
    articleUrl: null,
}

const mapDispachToProps = dispach => ({
    removeItem: (itemType, id) => dispach(removeItemAction(itemType, id))
})

export default connect(null, mapDispachToProps)(withContext(Card));