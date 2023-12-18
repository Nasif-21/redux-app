//What sort of action will take place when we tell them to work 

const reducer =(state=0, action)=>
{
    if (action.type==='deposit')
    {
    return state + action.payload
    }
    else if (action.type==='withdraw')
    {
    return state - action.payload
    } 
    else
    {
        return state;
    }
}
export default reducer;