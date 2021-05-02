import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionsLoaded, selectIsCollectionFetching} from '../../redux/shop/shop.selector'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import { fetchCollectionsStartAsyns } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from '../collection/collection.component';

// import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
    // state = {
    //     loading: true
    // }

    // unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {fetchCollectionsStartAsyns} = this.props;
        fetchCollectionsStartAsyns();
    }
    /*
    moved to shop reducers to do the async work
        componentDidMount() {
            const {updateCollections} = this.props;
            const collectionRef = firestore.collection('collections');

            // fetch pattern
            //     fetch('https://firestore.googleapis.com/v1/projects/eshop-db-cd6cc/databases/(default)/documents/collections')
            //     .then(response => response.json())
            //     .then(collections => console.log(collections));
            
            
            
                // //observable pattern
                // collectionRef.onSnapshot(async snapshot => {
                //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                //     updateCollections(collectionsMap);
                //     this.setState({loading: false});
                // })
            

            
            //promise pattern
        //     collectionRef.get().then(snapshot => {
        //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //         updateCollections(collectionsMap);
        //         this.setState({loading: false});
        //     });
        // }
    */
    
    // console.log("match is: ", match);
    render() {
        const {match, isCollectionFetching, isCollectionsLoaded} = this.props;
        // const {loading} = this.state;
        return (
            <div className='shop-page'>
                {/* <h1>ppp</h1> */}
                {/* <Route exact path={`${match.path}`} component={CollectionOverview}/> */}
                <Route exact path={`${match.path}`} 
                    render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
                {/* // <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> */}
                <Route path={`${match.path}/:collectionId`} 
                    render={props => (<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>)}/>
                {/* <CollectionOverview/> */}
            </div>
        )
    }
}

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })
const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    fetchCollectionsStartAsyns: () => dispatch(fetchCollectionsStartAsyns())
});

const mapStateToProps = createStructuredSelector({
    isFetchingCollections: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
// export default ShopPage;

