//Zonder hoofdletter deze!!!

//De initial state:
export const initialState = {
    basket: [],

};

//Reducer
const reducer = (state, action) => {

    console.log(action);  //alleen action? -->Ja dat was de fout alleen "action" loggen; niet action.type

    //zie 2:11:10
    switch (action.type) {
        case 'ADD_TO_BASKET':
           return {
               ...state,
               basket: [...state.basket, action.item],
           };
        //Er moet ook nog een default state zijn
        default:
            return state;
    }
};

//Nu de reducer exporteren:
export default reducer;
