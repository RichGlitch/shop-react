import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ match }) => {
    console.log('match');
    console.log(match);
    return (
        <div className='collection'>
            <h2>{match.params.collectionId} Category</h2>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);
