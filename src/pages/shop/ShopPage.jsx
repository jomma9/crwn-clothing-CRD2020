import React from "react";
import CollectionPreview from "../../components/preview-collection/CollectionPreview";

import "./shop-data";
import SHOP_DATA from "./shop-data";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
