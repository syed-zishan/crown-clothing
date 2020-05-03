import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            collections: SHOP_DATA
        }
    }
    

    render(){
        const { collections } = this.state;

        return(
            <div className='shop'>
                <h1>COLLECTIONS</h1>
                {
                    collections.map(({id,...otherCollectioProps})=> 
                    <CollectionPreview 
                        key={id}
                        {...otherCollectioProps}
                    />)
                }
            </div>
        );
    }        
}

export default ShopPage;