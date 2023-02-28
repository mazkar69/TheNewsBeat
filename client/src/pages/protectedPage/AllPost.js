import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AllPost = () => {
    const [flag, setFlag] = useState(true);
    const [posts, setPosts] = useState([]);
    const [query,setQuery] = useState("");
    const [sortBy,setSortBy] = useState("");
    const [token,setToken] = useState("");



    //It will fetch and set the token
    useEffect(()=>{
        setToken(sessionStorage.getItem('x4976gtylCC'));
    },[flag])

    //fetch the list of news 
    useEffect(() => {
        //fetching the post
        const fetchPost = async () => {
            const url = "/api?lim=10";
            const raw_data = await fetch(url,{
                method:"GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            setPosts(await raw_data.json());

        }
        fetchPost();
    }, [flag])
    // console.log(posts);

    const deletePost = async (_id) => {
        const flag = window.confirm("Are you sure!");
        if (flag) {
            const url = "/api/delete"
            const result = await fetch(url, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ _id })
            })
            if (result.status === 200) {
                toast.success("Post Deleted Successfully")
                setFlag(!flag);

            } else {
                toast.error("Failed to Delete")

            }
        } else {

        }

    }
    const querySearchHandler = async()=>{
        if(query && sortBy){
            
            const url = `/api/search?${sortBy}=${query}`
            const result = await fetch(url,{
                method:"POST"
            })
            setPosts(await result.json());
        }
        else{
            
        }
    }
    return (
        <Div className="content">
            <div className="search_box">
                <fieldset>
                    <legend>Search Post:</legend>
                    <select name="" id="" value={sortBy} onChange={(e)=>{setSortBy(e.target.value)}}>
                        <option value="" selected>SortBy</option>
                        <option value="newId">NewsId</option>
                        <option value="category">Category</option>
                        <option value="title">Title</option>
                        <option value="tags">Tags</option>
                    </select>
                    <input type="text" name="query" placeholder="search......" required autoComplete='off'  value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
                    <button className='search_btn' onClick={querySearchHandler}>Search</button>

                </fieldset>
            </div>
            <div className="main-box">
                <div className="treeview">
                    <table>
                        <tr>
                            <th>NewsId</th>
                            <th>PublishedAt</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>

                        {
                            posts.map((post) => {
                                return (
                                    <tr key={post._id}>
                                        <td>1</td>
                                        <td>{post.publishedAt.slice(0, 10)}</td>
                                        <td>{post.title}</td>
                                        <td>
                                            <div className="btns">

                                                <Link className="edit_btn" to="/admin/dashboard/updatepost" state={post}>Edit</Link>
                                                <button className="delete_btn" onClick={() => { deletePost(post._id) }}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }










                    </table>
                </div>
                <div className="pagination">

                </div>
            </div>
        </Div>
    )
}



const Div = styled.div`
.tost{
    font-size: 1rem;
    z-index: 99999999999999999999999;
}

fieldset{
    max-width: 35rem;
    margin: auto;
    display: flex;
    padding: 1rem;
    gap: 2rem;
    border: 1px solid reds;

    .search_btn{
        width: 150px;
        background-color: rgb(40, 183, 112);
        border: none;
        color: white;
        font-size: 1rem;
        cursor: pointer;

        &:hover{
            transition: all .5s ;
            background-color: rgb(26, 117, 70);

        }
    }
}

select,oprtion,input{
    font-size: 1rem;
    padding: .5rem 1rem;
}

.main-box{
    max-width: 70rem;
    margin: auto;
    margin-top: 3rem;
    border-radius: 1rem;
    background-color: white;
    padding: 2rem;

}

.treeview{

    max-width: 65rem;
    margin: auto;
    max-height: 400px;
    border: 1px solid rgb(183, 183, 183);
    text-align: center;
    overflow-y: scroll;
}

table{
    min-width: 60rem;
    /* border: 1px solid rebeccapurple; */
    
}
table,td,th{
    border: 1px solid rgb(188, 188, 188);
    border-collapse: collapse;

}

th,td{
    padding: 8px;
}

.edit_btn{
    border: none;
    background-color: rgb(17, 153, 142);
    padding: .5rem;
    width: auto;
    cursor: pointer;
    color: white;
    
}
.btns{
    
    display: flex;
    flex-direction: row;
    color: white;
    gap: 1rem;
}
.delete_btn{
    color: white;
    border: none;
    background-color: red;
    padding: .5rem;
    width: auto;
    cursor: pointer;

}

`
export default AllPost