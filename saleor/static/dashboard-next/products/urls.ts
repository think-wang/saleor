export const productSectionUrl = "/products/";
export const productListUrl = productSectionUrl;
export const productUrl = (id: string) => productSectionUrl + id + "/";
export const productVariantUrl = (productId: string, variantId) =>
  productSectionUrl + productId + "/variant/" + variantId + "/";
export const productImageUrl = (productId: string, imageId: string) =>
  productSectionUrl + productId + "/image/" + imageId + "/";
export const productAddUrl = productSectionUrl + "add/";
export const productVariantAddUrl = (id: string) =>
  productSectionUrl + id + "/variant/add/";

// Dialog urls
export const productDeleteUrl = (id: string) => productUrl(id) + "delete/";
export const productVariantDeleteUrl = (productId: string, variantId: string) =>
  productVariantUrl(productId, variantId) + "delete/";
