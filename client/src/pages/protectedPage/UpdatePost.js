import React from 'react'
import styled from 'styled-components'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import Spinner from '../../components/miscellaneous/Spinner';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const UpdatePost = () => {
    const [loading,setLoading] = useState(0);

    const {state} = useLocation();


    const [formData, setFormData] = useState(state)
        // console.log(formData.sortBy)
    const [error, setError] = useState(null);

    const formHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    //This will return the slug
    function createSlug(title) {
        const cleanedTitle = title
            .replace(/[^a-zA-Z0-9- ]/g, '')
            .toLowerCase()
            .trim()
            .replace(/ /g, '-');

        return `${cleanedTitle}-${Date.now()}`;
    }

    const addSlug = (e) => {
        const slug = createSlug(e.target.value);
        setFormData({ ...formData, slug });
    }
    const addSortBy = (e) => {
        console.log(e.target.checked)
        setFormData({ ...formData, sortBy: { ...formData.sortBy, [e.target.name]: e.target.checked } })
    }

    //This will triggered when user will change the image. Everytime this will run and set the img to the state setFile.
    const handleFileInput = async (event) => {
        const selectedFile = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png','image/webp'];

        if (selectedFile) {
            setLoading(true);

            if (selectedFile && allowedTypes.includes(selectedFile.type)) {

                if (selectedFile.size > 5 * 1024 * 1024) {
                    setError('File is too large. Maximum file size is 5MB.');
                    setLoading(false);
                }
                else {
                    // setFile(selectedFile);
                    // // handleUpload(selectedFile);
                    // setError(null)

                    try{

                        const formDataToSend = new FormData();
                        formDataToSend.append('file', selectedFile);
                        formDataToSend.append('upload_preset', 'dazzazkar');
    
                        const response = await fetch(
                            'https://api.cloudinary.com/v1_1/daqzr4bpv/image/upload',
                            {
                                method: 'POST',
                                body: formDataToSend,
                            }
                        );
                        const data = await response.json();
                        setFormData({ ...formData, ["urlToImage"]: data.secure_url });
                        setLoading(false);

                    }catch(e){console.log(e); setLoading(false)}
                }
            }
            else {
                setError("Only jpg png jpeg  images are allowed")
                event.target.value = ""
                setLoading(false);

            }
        }
        else {
            setError("File not selected")
            setLoading(false);
        }   

    };


    //Upload the post to the database.
    const submitFormHandler = async (e) => {
        // console.log(formData)
        e.preventDefault();

        const token = sessionStorage.getItem('x4976gtylCC')
        const url = "/api/update"
        const result = await fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        })
        console.log(await result.json())

        if (result.status === 200) {
            // alert("Post Successfull")
            toast.success("Updated successfull.")
            
            
        }
        else {
            toast.error("Not Updated, Some error occur")
            
        }

    }


    // console.log(formData)
    return (
        <Div className="content">
            <h2>Update post:</h2>
            <div className="form-container">
                <div className="item item-1">
                    <label htmlFor="title">*Title:</label>
                    <input type="text" name='title' value={formData.title} onChange={(e) => { formHandler(e) }} onBlur={(e)=>{addSlug(e);}}/>
                    <span className='slug'>SLUG : {formData.slug}</span>
                </div>
                <div className="item item-2">
                    <label htmlFor="description">*Short Description:</label>
                    <input type="text" id="description" name="description" value={formData.description} onChange={(e) => { formHandler(e) }} />
                </div>
                <div className="item editor item-3">
                    <label htmlFor="content">*Content:</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={formData.content}
                        onChange={(event, editor) => {
                            setFormData({ ...formData, content: editor.getData() })
                            
                        }}

                    />
                </div>
                <div className="item">
                    <label htmlFor="author">*Author:</label>
                    <input type="text" id="author" name="author" value={formData.author} onChange={(e) => { formHandler(e) }} />
                </div>
                <div className="item">
                    <label htmlFor="category">*Category:</label>
                    <select id="category" required name="category" value={formData.category} onChange={(e) => { formHandler(e) }}>
                        <option value="">select</option>
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
                    <label htmlFor="state">State:</label>
                    <select name="state" id="state" className="form-control" value={formData.state} onChange={(e) => { formHandler(e) }}>
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
                <div className="item item-7">
                    <label htmlFor="">Add to: </label>
                    <div className="check">
                        <span><input type="checkbox" name='top' onChange={(e) => addSortBy(e)} checked={formData.sortBy.top ? true : false}/> Top </span>
                        <span><input type="checkbox" name='popular' onChange={(e) => addSortBy(e)} checked={formData.sortBy.popular ? true:false} /> Popular</span>
                        <span><input type="checkbox" name='tranding' onChange={(e) => addSortBy(e)} checked={formData.sortBy.tranding ? true: false} /> Tranding </span>
                        <span><input type="checkbox" name='breakingNews' onChange={(e) => addSortBy(e)} checked={formData.sortBy.breakingNews ? true: false} /> Breaking News </span>

                    </div>
                </div>
                <div className="item item-8">
                    <label htmlFor="tag">Tag:</label>
                    <input type="text" id="tag" name="tags" value={formData.tags} onChange={(e) => { formHandler(e) }} />
                </div>
                {/* <div className="item item-9">
                    <label htmlFor="slug">Slug:</label>
                    <input type="text" id="slug" name="slug" onChange={(e)=>{formHandler(e)}} />
                </div> */}
                <div className="item item-10">
                    <label htmlFor="img">Image:</label>
                    <input type="file" id="image" name="image"  onChange={handleFileInput} />
                    {error && <span className='error'>{error}</span>}
                </div>
                <div className="item button">
                    <button className='btn' onClick={(e) => { submitFormHandler(e) }}>{loading ? <Spinner/> : "Update"}</button>
                </div>
            </div>
        </Div>
    )
}

const Div = styled.div`

.form-container{
    max-width: 60rem;
    margin: auto;
    /* border: 1px solid silver; */
    padding: 2rem;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    .slug{
        color: silver;
        padding: 0 10px;
        font-size: .8rem;

    }
    .error{
        color: red;
        padding: 0 10px;
        font-style: italic;
        font-size: .8rem;

    }
    .item-1{
        grid-column: 1/-1;
    }
    .item-2{
        grid-column: 1/-1;
    }
    .item-3{
        grid-column: 1/-1;
    }
    .item-7{
        grid-row: 5/8;
        grid-column: 3/-1;
        /* border: 1px solid red; */
        .check{
            display: flex;
            flex-direction: column;
            /* border: 2px solid gray; */
            gap: 1rem;
            padding: 1rem 2rem;
            span{
                color:black;
            }
        }
    }
    .item-8{
        grid-column: 1/3;
    }
    .item-9{
        grid-column: 1/3;
    }
    .item-10{
        grid-column: 1/3;
    }
}
.item{
    display: flex;
    flex-direction: column;
}
input,select{
    font-size: 1rem;
    padding: .5rem 1rem;
    border: 2px solid gray;
}
#content{
    max-height: 20rem;
}
.ck-editor__editable {
    min-height: 200px;
   border: 2px solid gray !important;
   
}

h2{
    font-family: 'Satisfy', cursive;
    font-size: 3.5rem;
    text-align: center;
}

.btn{
    padding:.5rem;
    background-color: blueviolet;
    color: white;
    border: none;
    font-size: 1.5rem;
    border-radius: .5rem;
    cursor: pointer;
    &:hover{
        
    }
}

`

export default UpdatePost