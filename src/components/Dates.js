import React from 'react'

export default function Dates({invoiceNumber,invoiceDate,dueDate}) {
  return (
    <article className="mt-2 mb-8 flex items-end justify-end">
        <ul>
          <li className='p-1'>
            <span className="font-bold">Invoicer Number: </span> {invoiceNumber}
          </li>
          <li className='bg-gray-100 p-1'>
            <span className="font-bold">Invoice Date: </span> {invoiceDate}
          </li>
          <li className='p-1'>
            <span className="font-bold">Due Date: </span> {dueDate}
          </li>
        </ul>
    </article>
  )
}


