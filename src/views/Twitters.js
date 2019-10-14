import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
    <GridTemplate>
        {twitters.map(({ id, title, content, twitterName, created }) => (
            <Card
                id={id}
                title={title}
                content={content}
                twitterName={twitterName}
                created={created}
                key={id}
            />
        ))}
    </GridTemplate>
);

const mapStateToProps = ({ twitters }) => ({ twitters })

export default connect(mapStateToProps)(Twitters);


