import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    totalQuantity:0
    },
    reducers:{
        addItem(state,action){
            const newItem=action.payload;
            const existingItem=state.items.find((item)=>item.newItem===item.id)
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    totalPrice:newItem.price,
                    quantity:1,
                    name:newItem.title
                });
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice+newItem.price
            }
        },
        removeItem(state,action){
            const id=action.payload;
            const existingItem=state.items.find((item)=>(
      item.id===id
            ))  
            state.totalQuantity--;
            if(existingItem.quantity===1){
                state.items=state.items.filter((item)=>
                    item.id!==id
                )
            }
                else{
                    existingItem.quantity--;
                    existingItem.totalPrice=existingItem.totalPrice-id.price
                }
            }  
        
    }
   
    
})
export default cartSlice;
export const cartAction=cartSlice.actions;