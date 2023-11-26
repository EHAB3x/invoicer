import React, { useEffect, useState } from "react"
import {v4 as uuidv4} from "uuid"
import { AiOutlineDelete,AiOutlineEdit } from "react-icons/ai"

export default function TableForm({
  description, setDescription,
  quantity, setQuantity,
  price, setPrice,
  amount, setAmount,
  list, setList,
  total,setTotal
}){

  const[isEditing,setIsEditing]= useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!description || !quantity || !price){
      alert("Please Fill In All Inputs")
    }else{
      const newItems = {
        id : uuidv4(),
        description:description,
        quantity,
        price,
        amount,
      }
      setDescription("")
      setQuantity("")
      setPrice("")
      setAmount("")
      setList([...list,newItems])
      setIsEditing(false)
    }

  }

  useEffect(()=>{
    const calculateAmount = (amount)=>{
      setAmount(price * quantity)
    }
    calculateAmount(amount);
    let allTotal = 0;
    list.map((li)=>{
      allTotal += Number(li.amount)
      return setTotal(allTotal); 
    })
  },[amount, price, quantity, setAmount, list,setTotal])
  

  const editRow = (id)=>{
    const editingRow = list.find((row)=> row.id === id);
    setList(list.filter((row)=> row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
  } 

  const deleteRow = (id)=>{setList(list.filter(row=> row.id !== id))}
  return (
    <>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:mt-16">
              <label htmlFor='description'>Item Description</label>
              <input 
                  type='text' 
                  name='description' 
                  id='description' 
                  placeholder='Item Description' 
                  value={description} 
                  onChange={(e)=> setDescription(e.target.value)}
              />
          </div>

          <div className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
                <label htmlFor='quantity'>Quantity</label>
                <input 
                    type='text' 
                    name='quantity' 
                    id='quantity' 
                    placeholder='Quantity' 
                    value={quantity} 
                    onChange={(e)=> setQuantity(e.target.value)}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor='price'>Price</label>
                <input 
                    type='text' 
                    name='price' 
                    id='price' 
                    placeholder='Price' 
                    value={price} 
                    onChange={(e)=> setPrice(e.target.value)}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor='amount'>Amount</label>
                <p id="amount">{amount}</p>
            </div>
          </div>
          <button type="submit" className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">{isEditing ? "Editing Row Item" : "Add Table Item"}</button>
        </form>
        <table width="100%" className="mb-10">
        <thead>
          <tr className='bg-gray-100 p-1 text-center'>
            <td className='font-bold'>Item Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold'>Amount</td>
            <td className='font-bold'>Operations</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({id,description,quantity,price,amount})=>(
            <tr key={id} className="text-center">
              <td>{description}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{amount}</td>
              <td className="flex justify-around">
                <button onClick={()=>deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl"/></button>
                <button onClick={()=>editRow(id)}><AiOutlineEdit  className="text-green-500 font-bold text-xl"/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          USD{total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
