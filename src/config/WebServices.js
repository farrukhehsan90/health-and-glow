//To add a configurable service here
export const BASE_URL = "https://staging.healthandglow.com/api/catalog";
export const GET_PRODUCTS =
  "product/v6/search/989?app=web&version=3.0.2&page=0:20";
export const SEARCH =
  "product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20";
export const PRODUCT = "product/v6/search/999?app=web&version=3.0.2";
// let url = `${BASE_URL}/${SEARCH}&sort=price:${sort}`;

// handleSort = () => {
//   const { shade, category, sort } = this.state;
//   let selectedCateg = category.find(v => v.check);
//   let shadeTrueValue = shade.find(v => v.check);
//   let url = `https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20&category=${
//     !!selectedCateg ? selectedCateg.value : ""
//   }&shade=${!!shadeTrueValue ? shadeTrueValue.value : ""}&sort=price:${sort}`;

//   this.props.blogpost(url);
// };