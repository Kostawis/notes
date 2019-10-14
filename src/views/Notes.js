import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
    <GridTemplate>
        {notes.map(({ id, title, content, created }) => (
            <Card
                id={id}
                title={title}
                content={content}
                created={created}
                key={id}
            />
        ))}
    </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes })

export default connect(mapStateToProps)(Notes);
