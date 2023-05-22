import { useEffect, useState } from "react";
import axios from "axios";

const FavoriteAuthors = () => {
    
    const [allAuthors, setAllAuthors] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/all-authors")
        .then((response) => {
            console.log(response.data);
            setAllAuthors(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);
    
    // const handleDeleteAuthor = (idFromBelow) => {
    //     axios.delete(`http://localhost:8000/api/author/${idFromBelow}`)
    //     .then((response) => {
    //         console.log("success deleting author");
    //         console.log(response);
    //         const filteredAuthors = allAuthors.filter((author) => {
    //         return author._id !== idFromBelow;
    //         });
    //         setAllAuthors(filteredAuthors);
    //     })
    //     .catch((err) => {
    //         console.log("error deleting author", err.response);
    //     });
    // };
    
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                {/* <Link to="/new">Add an author</Link> */}
                    <p className="purple-text">We have quotes by:</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Author</th>
                                <th scope="col">Actions Available</th>
                            </tr>
                        </thead>
                        <tbody>
                        {allAuthors.map((author, index) => {
                            return (
                                <tr key={author._id}>
                                    <td>{author.authorName}</td>
                                        <td>
                                        {/* <Link to={`/edit/${author._id}`}> */}
                                        <button className="btn btn-primary">Edit</button>
                                        {/* </Link> */}
                                        
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FavoriteAuthors;