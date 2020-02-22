import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const BeerCard = memo(({ name, tagline }) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        {tagline}
      </Card.Meta>
    </Card.Content>
  </Card>
));

BeerCard.displayName = 'BeerCard';

BeerCard.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default BeerCard;
