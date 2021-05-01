import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollections} from '../../redux/shop/shop.selector'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        {/* <h1>shoppage</h1> */}
        {
            collections.map(({id, ...otherCollectionProps}) => {
                return <CollectionPreview key={id} {...otherCollectionProps}/>
            })
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
