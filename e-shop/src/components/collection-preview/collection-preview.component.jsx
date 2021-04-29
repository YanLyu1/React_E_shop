import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

export default function CollectionPreview({title, items}) {
    // console.log("CollectionPreview", title, items)
    return (
        <div className='collection-preview'>
            {/* <h1>Collections preview</h1> */}
            <h1 className='title'> {title.toUpperCase()} </h1>
            <div className='preview'>
                {items
                    .filter((item, index) => index < 4)
                    .map(({id, ...otherItemProps}) => (
                     <CollectionItem key={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    )
}
