import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  category: [],
  cart: [],

};

const processProductData = (products) => {
    const category = products.reduce((acc, current) => {
        const x = acc.find(item => item.name === current.category);
        if (!x) {
          return acc.concat([{ name: current.category, quantity: 1 }]);
        } else {
          x.quantity += 1;
          return acc;
        }
      }
      , []);
      // append one category in the category array to show all products , must be at the first
      category.unshift({name: 'All', quantity: products.length});

    return {products, category}
}


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state, action) => {
        const {products , category} = processProductData(action.payload);
        state.category.length = 0;
        state.category.push(...category);
       
        state.data.length = 0;
        state.data.push(...products);
    },
    filter: (state, action) => {
        state.data.length = 0;
        state.data.push(...action.payload );
    },
    addToCart: (state, action) => { 
        const previousItem = state.cart.find(item => item.id === action.payload.id);
        if(previousItem){
          previousItem.quantity += action.payload.quantity;
        }else{
          state.cart.push(action.payload);
        }
    },
    orderPlace: (state)=>{
      state.cart.length = 0;
    }

  },
})

// Action creators are generated for each case reducer function
export const { addProducts, filter , addToCart, orderPlace} = productSlice.actions

export default productSlice.reducer