import React,{useState} from 'react';
import axios from 'axios'
const HousePostForm = () => {
  
  const [multipleFiles, setMultipleFiles] = useState([])
  const multipleFilesChange = (e) => {
    setMultipleFiles(e.target.files)
  }
  const [formValue, setformValue] = useState({
    buildingType: '',
    desc:"",
    city:"",
    address:"",
    salesType:"",
    price:null,
    year:null,
    bedrooms:null,
    bathroom:null,
    driveway:null,
    garage:null,
    lot_area:null,

  });
  
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const newPost = {
      houseAgentId: "userId",
      buildingType: formValue.buildingType,
      desc:formValue.desc,
      city:formValue.city,
      address:formValue.address,
      salesType:formValue.salesType,
      price:formValue.price,
      year:formValue.year,
      bedrooms:formValue.bedrooms,
      bathroom:formValue.bathroom,
      driveway:formValue.driveway,
      garage:formValue.garage,
      lot_area:formValue.lot_area,
    };
    if (multipleFiles) {
        const data =new FormData();
        // const filename = Date.now();
        // data.append("name", filename);
        // data.append("file", file);
        // newPost.images = data;
        for (let i = 0; i < multipleFiles.length; i++) {
          setMultipleFiles(multipleFiles[i])
          
        }
        
        data.append('files', multipleFiles)
        console.log(multipleFiles)
        console.log(data)
        try {
          await axios.post("http://localhost:5000/api/upload", multipleFiles);
        } catch (err) {}
      }
    
    
   
    try {
        const res = await axios.post("http://localhost:5000/api/posts", newPost)
           
        
            

       
        console.log(res.data)
        console.log("submit successfully")
        
       
    } catch (error) {
        console.log(error)
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        name="buildingType"
        placeholder="building type eg.."
        value={formValue.buildingType}
        onChange={handleChange}
      />
       <textarea
            placeholder="Tell your desc..."
            type="text"
            name="desc"
            value={formValue.desc}
            onChange={handleChange}
          ></textarea>
      <input
        type="file"
        name="file"
        
       
        onChange={(e) => multipleFilesChange(e)}
        multiple
      />
      <input
        type="text"
        name="address"
        placeholder="The address"
        value={formValue.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formValue.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="salesType"
        placeholder="for sell or for rent"
        value={formValue.buildingType}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="The price"
        value={formValue.price}
        onChange={handleChange}
      />
      <input
        type="number"
        name="year"
        placeholder="the year of the building built"
        value={formValue.year}
        onChange={handleChange}
      />
      <input
        type="number"
        name="bedrooms"
        placeholder="how many bedrooms"
        value={formValue.bedrooms}
        onChange={handleChange}
      />
       <input
        type="number"
        name="bathroom"
        placeholder="how many bathrooms"
        value={formValue.bathroom}
        onChange={handleChange}
      />
       <input
        type="number"
        name="driveway"
        placeholder="how many driveways"
        value={formValue.driveway}
        onChange={handleChange}
      />
       <input
        type="number"
        name="garage"
        placeholder="how many garages"
        value={formValue.garage}
        onChange={handleChange}
      />
       <input
        type="number"
        name="lot_area"
        placeholder="how many inches of the lot_area"
        value={formValue.lot_area}
        onChange={handleChange}
      />
      
      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  )
};

export default HousePostForm;