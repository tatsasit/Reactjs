import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w[1140px] m-auto w-full p-4 py16'> 
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img 
                src="https://c4.wallpaperflare.com/wallpaper/312/1008/920/small-boat-fishermen-white-st-4664-boat-wallpaper-preview.jpg"
                alt="/" 
                className='w-full h-full object-cover'
                />
            </div>

            <div>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5HBARsSAP0kYbFrgWRgl1BmqTFap6g9SMa-PBwgfNpGkl3uiKxv_LOQNgs8HcBdIksg&usqp=CAU"
                alt="/" 
                className='w-full h-full object-cover'
                />
            </div>


            <div>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5HBARsSAP0kYbFrgWRgl1BmqTFap6g9SMa-PBwgfNpGkl3uiKxv_LOQNgs8HcBdIksg&usqp=CAU"
                alt="/" 
                className='w-full h-full object-cover'
                />
            </div>

            <div>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5HBARsSAP0kYbFrgWRgl1BmqTFap6g9SMa-PBwgfNpGkl3uiKxv_LOQNgs8HcBdIksg&usqp=CAU"
                alt="/" 
                className='w-full h-full object-cover'
                />
            </div>

            <div>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5HBARsSAP0kYbFrgWRgl1BmqTFap6g9SMa-PBwgfNpGkl3uiKxv_LOQNgs8HcBdIksg&usqp=CAU"
                alt="/" 
                className='w-full h-full object-cover'
                />
            </div>
            
        </div>
    </div>
  )
}

export default Gallery