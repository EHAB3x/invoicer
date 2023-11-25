import React from 'react'

export default function ClientDetails({clientName, clientAddress}) {
  console.log(clientName);
  return (
    <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
        <p>{clientAddress}</p>
    </section>
  )
}
