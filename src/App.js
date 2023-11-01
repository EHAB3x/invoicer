

function App() {
  const handlePrint =()=>{
    window.print()
  }
  return (
    <>
    {/* Header */}
    <main className="p-5 m-5 lg:max-w-4xl lg:mx-auto bg-white rounded shadow">
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h1>
        </div>

        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button className="btn btn-print" onClick={handlePrint}>Print</button>
            </li>
            <li>
              <button className="btn btn-download">Download</button>
            </li>
            <li>
              <button className="btn btn-send">Send</button>
            </li>
          </ul>
        </div>
      </header>
    {/* End Of Header */}

    {/* Your Details */}
      <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl uppercase">IHAB MAHMOUD</h2>
        <p>Your Address</p>
      </section>
    {/* End Of Your Details */}

    {/* Client Details */}
      <section className="mt-5">
        <h2 className="text-xl uppercase">Client's Name</h2>
        <p>Client's Address</p>
      </section>
    {/* End Of Client Details */}

    {/* Dates*/}
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li><span className="font-bold">Invoicer Number: </span> {""}</li>
          <li><span className="font-bold">Invoice Date: </span> {""}</li>
          <li><span className="font-bold">Due Date: </span> {""}</li>
        </ul>
      </article>
    {/* End Of Dates */}

    {/* Table */}
      <div className="my-5">This Is The Table</div>
    {/* End Of Table */}

    {/* Notes */}
      <section className="mb-5">
        {/* Textarea */}
        <p>Notes To The Client...</p>
      </section>
    {/* End Of Notes */}

    {/* Footer */}
    <footer>
      <ul className="flex  flex-wrap items-center justify-center">
        <li><span className="font-bold">Your Name:      </span> IHAB MAHMOUD</li>
        <li><span className="font-bold">Your Email:     </span> ehabmah6969@gmail.com</li>
        <li><span className="font-bold">Phone Number:   </span> 0112324299</li>
        <li><span className="font-bold">Bank:           </span> Bank Account</li>
        <li><span className="font-bold">Account Holder: </span> IHAB MAHMOUD</li>
        <li><span className="font-bold">Account Number: </span> 123 456 789</li>
        <li><span className="font-bold">Website:        </span> https://ehab-mahmoud.netlify.app/</li>
      </ul>
    </footer>
    {/* End Of Footer */}
    </main>
    </>
  );
}

export default App;
