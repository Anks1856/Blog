import React from 'react'
import MediaService from '../services/MediaServices';

const about = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target[0].files);
        const formData = new FormData()

        formData.append("files",e.target[0].files[0])
        for(var i of formData.values()){
            console.log(i);
        }
        const res = await MediaService.addMedia(formData)
        console.log(res);
    }

    return (
        <div className='container mx-auto'>
            <h1>this is me ANKUR CHOVATIYA</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" />
                <button type='submit'>Add Image</button>
            </form>
        </div>
    )
}

export default about
