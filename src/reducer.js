//Zonder hoofdletter deze!!!

//De initial state:
export const initialState = {
    basket: [],
    user: null //4:13:54
};

//Selector bouwen op prijzen op te tellen -->!!! Belangrijk en veelgebruikt!!!
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


//Reducer
const reducer = (state, action) => {

    console.log(action);  //alleen action? -->Ja dat was de fout alleen "action" loggen; niet action.type!!!

    //zie 2:11:10
    switch (action.type) {
        case 'ADD_TO_BASKET':
           return {
               ...state,
               basket: [...state.basket, action.item],
           };

        case "REMOVE_FROM_BASKET":  //Heel lastig: zie 3:12:34
            const index = state.basket.findIndex(
                (basketItem) =>basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        //Er moet ook nog een default state zijn
        default:
            return state;
    }
};

//Nu de reducer exporteren:
export default reducer;
