import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar'


const StyledWrapper = styled.div`
    position: relative;
    padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPageHeader = styled.div`
    margin: 25px 0 50px;
`;

const StyledHeading = styled(Heading)`
    margin: 25px 0 0 0;

    ::first-letter {
        text-transform: uppercase;
    }
`;

const StyledParagraph = styled(Paragraph)`
    margin: 0;
    font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
    z-index: 1000;
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: ${({ activeColor, theme }) => theme[activeColor]};
    border-radius: 50%;
    background-size: 35%;
`;


class GridTemplate extends Component {
    state = {
        isNewItemBarVisible: false,
    }

    handleNewItemBarToggle = () => this.setState(prevState => ({ isNewItemBarVisible: !prevState.isNewItemBarVisible }))

    render() {
        const { children, pageContext } = this.props
        const { isNewItemBarVisible } = this.state
        return (
            <UserPageTemplate>
                <StyledWrapper>
                    <StyledPageHeader>
                        <Input search placeholder="search" />
                        <StyledHeading big as="h1">
                            {pageContext}
                        </StyledHeading>
                        <StyledParagraph>6 {pageContext}s</StyledParagraph>
                    </StyledPageHeader>
                    <StyledGrid>
                        {children}
                    </StyledGrid>
                    <StyledButtonIcon icon={plusIcon} activeColor={pageContext} onClick={this.handleNewItemBarToggle} />
                    <NewItemBar isVisible={isNewItemBarVisible} />
                </StyledWrapper>
            </UserPageTemplate>
        );
    }
}

GridTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
}

GridTemplate.defaultProps = {
    pageContext: 'notes',
}

export default withContext(GridTemplate);