//Creating an action for defining what type of work need to be done

export const depositMoney=(amount)=>
{
    return (dispatch)=>
    {
    dispatch({
        type: 'deposit',
        payload: amount
    })
    }

}
export const withdrawMoney=(amount)=>
{
    return (dispatch)=>
    {
    dispatch({
        type: 'withdraw',
        payload: amount
    })
    } 
}