import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';


const ShopPage = () => (

    <div>
        <CollectionsOverview />
    </div>
)

export default ShopPage;