'use strict';
/**
 * @file
 * Container for the FilterGuide Component
 */

import React from 'react';
import Reflux from 'reflux';

// Components
import FilterGuide from '../FilterGuide/FilterGuide.component';


// Actions
import QueryActions from '../../actions/QueryUpdate.action.js';

// Stores
import MaterialTypeStore from '../../stores/MaterialType.store.js';

export default React.createClass({
  displayName: 'FilterListContainer',
  mixins: [
    Reflux.connect(MaterialTypeStore, 'categories')
  ],

  render() {
    const filterGuide = (<FilterGuide categories={this.state.categories.categories} elements={this.state.filter} select={QueryActions.add} />) || '';
    return (
      <div className='filterguide--wrapper' >
        {filterGuide}
      </div>
    );
  }
});
