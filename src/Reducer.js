export const initialState = {
    basket : [{
                    id:"123421",
                    title:"Samsung 32 inch LED Display",
                    price:24000,
                    rating:5,
                    images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhsTP3L_ElZdgjkPyqLhvTZBa5U4FSDBwBA&usqp=CAU" 
    },
    {
                    id:"123421",
                    title:"Samsung 32 inch LED Display",
                    price:24000,
                    rating:5,
                    images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhsTP3L_ElZdgjkPyqLhvTZBa5U4FSDBwBA&usqp=CAU"
    }],
    user:null
}

function reducer(state,action){
    console.log(action);
    switch(action.type){
            case 'ADD_TO_BASKET':
                //Logic to  add item to basket
                return {
                    ...state,
                    basket:[...state.basket,action.item],
                };

            case 'REMOVE_FROM_BASKET':
                //logic from removing item from the basket
                let newBasket = [...state.basket];

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