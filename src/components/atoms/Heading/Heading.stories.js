import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
    .add('Small', () => <Heading>Sample Heading</Heading>)
    .add('Big', () => <Heading big>Sample Heading</Heading>)