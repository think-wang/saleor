import { parse as parseQs } from "qs";
import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import {
  productAddUrl,
  productImageUrl,
  productListUrl,
  productUrl,
  productVariantAddUrl,
  productVariantUrl
} from "./urls";
import ProductCreate from "./views/ProductCreate";
import ProductImageComponent from "./views/ProductImage";
import ProductListComponent from "./views/ProductList";
import ProductUpdateComponent from "./views/ProductUpdate";
import ProductVariantComponent from "./views/ProductVariant";
import ProductVariantCreateComponent from "./views/ProductVariantCreate";

const ProductList: React.StatelessComponent<RouteComponentProps<any>> = ({
  location
}) => {
  const qs = parseQs(location.search.substr(1));
  const params = {
    after: qs.after,
    before: qs.before
  };
  return <ProductListComponent params={params} />;
};

const ProductUpdate: React.StatelessComponent<RouteComponentProps<any>> = ({
  match
}) => {
  return <ProductUpdateComponent id={decodeURIComponent(match.params.id)} />;
};

const ProductVariant: React.StatelessComponent<RouteComponentProps<any>> = ({
  match
}) => {
  return (
    <ProductVariantComponent
      variantId={decodeURIComponent(match.params.variantId)}
      productId={decodeURIComponent(match.params.productId)}
    />
  );
};

const ProductImage: React.StatelessComponent<RouteComponentProps<any>> = ({
  match
}) => {
  return (
    <ProductImageComponent
      imageId={decodeURIComponent(match.params.imageId)}
      productId={decodeURIComponent(match.params.productId)}
    />
  );
};

const ProductVariantCreate: React.StatelessComponent<
  RouteComponentProps<any>
> = ({ match }) => {
  return (
    <ProductVariantCreateComponent
      productId={decodeURIComponent(match.params.id)}
    />
  );
};

const ProductSection = () => (
  <Switch>
    <Route exact path={productListUrl} component={ProductList} />
    <Route exact path={productAddUrl} component={ProductCreate} />
    <Route exact path={productUrl(":id")} component={ProductUpdate} />
    <Route
      exact
      path={productVariantAddUrl(":id")}
      component={ProductVariantCreate}
    />
    <Route
      exact
      path={productVariantUrl("productId", "variantId")}
      component={ProductVariant}
    />
    <Route
      exact
      path={productImageUrl(":productId", ":imageId")}
      component={ProductImage}
    />
  </Switch>
);

export default ProductSection;
