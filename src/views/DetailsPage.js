import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes'

class DetailsPage extends Component {
    state = {
        pageType: 'notes',
    }

    componentDidMount() {
        // eslint-disable-next-line default-case
        switch (this.props.match.path) {
            case routes.twitter:
                this.setState({ pageType: 'twitters' })
                break;
            case routes.note:
                this.setState({ pageType: 'notes' })
                break;
            case routes.article:
                this.setState({ pageType: 'articles' })
                break;
        }
    }

    render() {
        const { match } = this.props

        return (
            <>
                <DetailsTemplate pageType={this.state.pageType}>
                    <p>{this.state.pageType}</p>
                </DetailsTemplate>
            </>
        );
    }
}

export default DetailsPage;