import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from '../collection/collection.component';

// import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        })
    }
    // console.log("match is: ", match);
    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
                {/* <h1>ppp</h1> */}
                {/* <Route exact path={`${match.path}`} component={CollectionOverview}/> */}
                <Route exact path={`${match.path}`} 
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                {/* // <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> */}
                <Route path={`${match.path}/:collectionId`} 
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                {/* <CollectionOverview/> */}
            </div>
        )
    }
}

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);
// export default ShopPage;

