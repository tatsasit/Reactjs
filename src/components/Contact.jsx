import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] mx-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Send a message</h2>
        <p className='text-center text-gray-700 py-2'>We're standing by!</p>
        <div className='grid md:grid-cols-2'>
            <img src="https://cdn-5efe0573c1ac181b540d93e1.closte.com/wp-content/uploads/2021/08/My-Beach-Resort-Phuket-1-scaled.jpg"
             alt="/"
             className='w-full md:w-full object-cover p-2 max-h[500px] h-[200px]'
             />

             <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2' type="text" placeholder='First' />
                    <input className='border m-2 p-2' type="text" placeholder='Last' />
                    <input className='border m-2 p-2' type="text" placeholder='E-mail' />
                    <input className='border m-2 p-2' type="tel" placeholder='Phone' />
                    <input className='border col-span-2 m-2 p-2' type="text" placeholder='Address' />
                    <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
                    <button className='col-span-2 m-2'>Sunmit</button>
                </div>
             </form>
        </div>
    </div>
  )
}

export default Contact