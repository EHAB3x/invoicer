import React from 'react'

export default function Notes({notes}) {
  return (
    <section className="mb-5">
      <p className="w-1/2 text-justify">{notes}</p>
    </section>
  )
}
