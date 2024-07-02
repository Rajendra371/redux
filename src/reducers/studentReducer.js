const initialValue={
    student_name:'Rajendra Shrestha'

}
const studentReducer=(state = initialValue, action)=>{
    switch (action.type){

        case 'CHANGE':
        return{
...state,

            student_name:action.payload
        }
        default:
            return state
    }
}
export default studentReducer