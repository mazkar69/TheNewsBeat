import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'




const UploadForm = () => {

  const initialData = {
    author:"",
    urlToImage:"",
    title:"",
    description:"",
    content:"",
    state:"",
    isBreaking:false,
    category:"",
    tags:""

  }
  const [formData,setFromData] = useState(initialData)

  //Taking the value and setting in the state.
  const formHandler = (e)=>{
    setFromData({...formData,[e.target.name]:e.target.value});
  }

  const submitFormHandler = async(e)=>{
    e.preventDefault();

    const token = sessionStorage.getItem('x4976gtylCC')
    const url = "/api/upload"
    const result = await fetch(url,{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
        Authorization: `Bearer ${token}`
        
      },
      body:JSON.stringify(formData)
    })

    if(result.status === 200)
    {
        alert("Post Successfull")
    }
    else{
      alert("Failed")
    }
    
  }
  return (
    <Div className="content">
      <div className="heading">
        <h2>Post News</h2>
        <div className="line"></div>
      </div>
      <div className="form-container">
        <div className="item">
          <label htmlFor="author">*Author:</label>
          <input type="text" id="author" name="author"  value={formData.author} onChange={(e)=>{ formHandler(e); }}/>
        </div>
        <div className="item">
          <label htmlFor="urlToImage">*URL to Image:</label>
          <input type="text" id="urlToImage" name="urlToImage"  value={formData.urlToImage} onChange={(e)=>{ formHandler(e); }}/>
        </div>
        <div className="item">
          <label htmlFor="title">*Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={(e)=>{ formHandler(e); }} />
        </div>
        <div className="item">
          <label htmlFor="description">*Description:</label>
          <input type="text" id="description" name="description"  value={formData.description} onChange={(e)=>{ formHandler(e); }}/>
        </div>
        <div className="item" id="box-5">
          <label htmlFor="content">*Content:</label>
          <textarea id="content" name="content" value={formData.content} onChange={(e)=>{ formHandler(e); }}></textarea>
        </div>
        <div className="item">
          <label htmlFor="state">State:</label>
          <select name="state" id="state" className="form-control" value={formData.state} onChange={(e)=>{ formHandler(e); }}>
            <option value="">Select</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="item">

          <label htmlFor="breaking">Add to:</label>
          {/* <input type="radio" id="breaking" name="breaking" value={formData.country} onChange={(e)=>{ formHandler(e); }}/> */}
          <div> <input type="checkbox" id="isBreaking" name="isBreaking" onChange={(e)=>{ setFromData({...formData,[e.target.name]:e.target.checked}) }}/> <label  forName="isBreaking">Breaking News</label></div>
        </div>
        <div className="item">
          <label htmlFor="category">*Category:</label>
          <select id="category" name="category" value={formData.category} onChange={(e)=>{ formHandler(e); }}>
            <option value="business">Business</option>
            <option value="sport">Sport</option>
            <option value="crime">Crime</option>
            <option value="tech">Tech</option>
            <option value="education">Education</option>
            <option value="entertainment">Entertainment</option>
            <option value="politics">Politics</option>
            <option value="national">National</option>
            <option value="world">World</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="tag">Tag:</label>
          <input type="text" id="tag" name="tags" value={formData.tags} onChange={(e)=>{ formHandler(e); }} />
        </div>
        <div className="item button">
          <input type="submit" value="Publish" onClick={submitFormHandler}/>
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`

/* Content */
.heading{
    text-align: center;
    font-size: 1rem;
    /* border: 1px solid gray; */
}

.line{
    width: 300px;
    margin: auto;
    height: 2px;
    background-color: black;
    border-radius: 1rem;

}

.form-container{
    padding: 1rem 2rem;
    /* border: 1px solid black; */
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
}
.item{
    /* border: 1px solid blue; */
    display: flex;
    flex-direction:column;
    gap: .3rem;
}

/* Form design */
label{
  font-size: 1rem;
}
input ,select,option,textarea{
    border: 2px solid gray;
    padding: .5rem;
    font-size: 1rem;
    background-color: white;
    border-radius: 8px;
}

textarea{
    height: 100%;
    resize: none;
}

#box-5{
    grid-column: 2/-1;
    grid-row: 2/4;
    
}

.button{
    width: 200px;
    grid-column: 1/-1;
    margin-left: auto;
}

`

export default UploadForm