const initialValue={
    count:0


}
const testReducer=(state=initialValue,action)=>{

   switch(action.type){
    case 'ADD_ITEM':
        return{
            count:++state.count
        }
        case 'REMOVE_ITEM':
            return{
                count:--state.count
            }
        default:
            return state
   }
}

export default testReducer