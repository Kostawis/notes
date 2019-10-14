import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
    <GridTemplate>
        {articles.map(({ id, title, content, articleUrl, created }) => (
            <Card
                id={id}
                title={title}
                content={content}
                articleUrl={articleUrl}
                created={created}
                key={id}
            />
        ))}
    </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles })

export default connect(mapStateToProps)(Articles);
