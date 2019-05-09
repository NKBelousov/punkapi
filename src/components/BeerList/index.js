import {
  Container, Grid, Image, Input, Divider, Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import chunk from 'lodash/chunk';

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
              <Image src={beer.image_url} />
              <Header as="h5" color="blue" size="small">
                <Header.Content>{beer.name}</Header.Content>
                <Header.Subheader>{beer.tagline}</Header.Subheader>
              </Header>
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
