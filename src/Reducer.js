export const initialState = {
    basket : [],
    user:null
};
//calculating the checkout total price and imported this function in subtotal.js
export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount,0);

function reducer(state,action){
    console.log(action);
    switch(action.type){
            case 'SET_USER':
                return{
                    ...state,
                    user:action.user
                }
            case 'ADD_TO_BASKET':
                //Logic to  add item to basket
                return {
                    ...state,
                    basket:[...state.basket,action.item],
                };

            case 'REMOVE_FROM_BASKET':
                //logic from removing item from the basket

                //Here we cloned the basket
                let newBasket = [...state.basket];
                 //here we checked that the item exists or not
                const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);

                if(index>=0){
                    // item exist in basket remove it...
                    newBasket.splice(index,1);

                }else{
                    console.warn(
                        'cannot remove product(id:${action.id}) as its  not in basket'
                    );
                }
                return {
                        ...state,
                        basket:newBasket
                };
                
            
            default:
                return state;
    }
}

export default reducer;