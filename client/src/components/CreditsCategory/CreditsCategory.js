import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import React, { useEffect } from "react";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";


function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
    }
  }, [categoryData, dispatch]);
  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;

// curl https://api.stripe.com/v1/checkout/sessions \
//   -u sk_test_51GVpEwC4q7PuQFomp0Q5oSBT1mm1vbZhhIH0u9ZM86ORb6yQy9h72h8pa91rUfrfJoeCVOurSf1UK4bZJfRtd8wz00SkKli8cd \
//   -d "payment_method_types[]"=card \
//   -d "line_items[][price]"="price_1M37rwC4q7PuQFom6XjGsNpe" \
//   -d "line_items[][quantity]"=1 \
//   -d mode=payment \
//   -d success_url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}" \
//   -d cancel_url="https://example.com/cancel"

//   curl https://api.stripe.com/v1/products \
//   -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
//   -d name="Gold Special"