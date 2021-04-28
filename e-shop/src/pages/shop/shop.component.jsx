import React, { Component } from 'react'
import SHOP_DATE from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

export default class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATE
        }
    }
    render() {
        const {collections} = this.state
        return (
            // <div className='shop-page'>
            <div>
                {/* <h1>shoppage</h1> */}
                {
                    collections.map(({id, ...otherCollectionProps}) => {
                        return <CollectionPreview key={id} {...otherCollectionProps}/>
                    })
                }
            </div>
        )
    }
}
