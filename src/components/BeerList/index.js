import {
  Container, Grid, Input, Divider,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import chunk from 'lodash/chunk';

import BeerCard from '~/components/BeerCard';

const COLUMN_COUNT = 9;

const hashSum = array => array.reduce((accumulator, beer) => accumulator + beer.id.toString(), '');

const BeerList = memo(props => (
  <Container>
    <Divider />
    <Input
      autoFocus
      fluid
      label="Search by name"
      loading={props.isLoading}
      onChange={props.onChangeSearch}
      size="massive"
    />
    <Divider />
    <Grid columns={COLUMN_COUNT} divided>
      {chunk(props.items, COLUMN_COUNT).map(beers => (
        <Grid.Row key={hashSum(beers)}>
          {beers.map(beer => (
            <Grid.Column key={beer.id}>
              <BeerCard
                tagline={beer.tagline}
                name={beer.name}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      ))}
    </Grid>
  </Container>
));

BeerList.displayName = 'BeerList';

BeerList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

export default BeerList;
