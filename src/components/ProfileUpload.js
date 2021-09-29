import React, {useState} from 'react'

const ProfileUpload = () => {
    const [profilePhoto, setProfilePhoto] = useState('')
    const handleFile = (e) => {
    setProfilePhoto(e.target.file)
  }
  console.log(profilePhoto)

  const handleSubmit =  async (e) => {
    e.preventDefault();
    if(profilePhoto) {
        console.log(profilePhoto)
    }
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
           <input type="file" name="profilePhoto" onChange={handleFile} />
           <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default ProfileUpload
