import NavBar from "./Src/Components/NavBar";
import Footer from "./Src/Components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

// Component Composition => Component which return component is call.
const Apps = () => {
  console.log("render App");

  return (
    <div className="container">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Apps;

//https://www.zomato.com/webroutes/search/home", { "headers": { "accept": "*/*", "accept-language": "en-GB,en-US;q=0.9,en;q=0.8", "content-type": "application/json", "priority": "u=1, i", "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"", "sec-ch-ua-mobile": "?0", "sec-ch-ua-platform": "\"macOS\"", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-origin", "x-zomato-csrft": "46e0d0ef6189e6d90a48ff76b5c1c6dc" }, "referrer": "https://www.zomato.com/lunglei/lunglei-locality-restaurants", "referrerPolicy": "strict-origin-when-cross-origin", "body": "{\"context\":\"delivery\",\"filters\":\"{\\\"searchMetadata\\\":{\\\"previousSearchParams\\\":\\\"{\\\\\\\"PreviousSearchId\\\\\\\":\\\\\\\"2c3cee9d-e06b-4b63-afbb-02ec64f17995\\\\\\\",\\\\\\\"PreviousSearchFilter\\\\\\\":[\\\\\\\"{\\\\\\\\\\\\\\\"category_context\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"delivery_home\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"\\\\\\\"]}\\\",\\\"postbackParams\\\":\\\"{\\\\\\\"processed_chain_ids\\\\\\\":[20387727,20870070,20388062,21219240,21227546,20388096,21074393,20390664,20408229],\\\\\\\"shown_res_count\\\\\\\":9,\\\\\\\"search_id\\\\\\\":\\\\\\\"2c3cee9d-e06b-4b63-afbb-02ec64f17995\\\\\\\"}\\\",\\\"totalResults\\\":17,\\\"hasMore\\\":true,\\\"getInactive\\\":true},\\\"dineoutAdsMetaData\\\":{},\\\"appliedFilter\\\":[{\\\"filterType\\\":\\\"category_sheet\\\",\\\"filterValue\\\":\\\"delivery_home\\\",\\\"isHidden\\\":true,\\\"isApplied\\\":true,\\\"postKey\\\":\\\"{\\\\\\\"category_context\\\\\\\":\\\\\\\"delivery_home\\\\\\\"}\\\"}],\\\"urlParamsForAds\\\":{}}\",\"addressId\":0,\"entityId\":178757,\"entityType\":\"subzone\",\"locationType\":\"\",\"isOrderLocation\":1,\"cityId\":12451,\"latitude\":\"22.8921966108\",\"longitude\":\"92.7442736307\",\"userDefinedLatitude\":22.8921966108,\"userDefinedLongitude\":92.7442736307,\"entityName\":\"Lunglei, India\",\"orderLocationName\":\"Lunglei, India\",\"cityName\":\"Lunglei\",\"countryId\":1,\"countryName\":\"India\",\"displayTitle\":\"Lunglei, India\",\"o2Serviceable\":true,\"placeId\":\"ChIJ_9O9xtBATTcRStKfv733ZA4\",\"cellId\":\"3984912510611357696\",\"deliverySubzoneId\":79770,\"placeType\":\"GOOGLE_PLACE\",\"placeName\":\"Lunglei, India\",\"isO2City\":true,\"fetchFromGoogle\":false,\"fetchedFromCookie\":false,\"isO2OnlyCity\":true,\"address_template\":[],\"otherRestaurantsUrl\":\"\"}", "method": "POST", "mode": "cors", "credentials": "include" }
