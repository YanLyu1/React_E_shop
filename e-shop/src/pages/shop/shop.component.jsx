import React, { Component } from 'react';
import { Route } from 'react-router';
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

// import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ({match}) => {
    // console.log("match is: ", match);
    return (
        <div className='shop-page'>
            <h1>ppp</h1>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            {/* <CollectionOverview/> */}
        </div>
    )
}

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;

