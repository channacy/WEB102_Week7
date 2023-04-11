import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { useState } from 'react'

const EditPost = ({supabase}) => {

    const {id} = useParams();
    const [troop, setTroops] = useState({ name: "", count: ""});

    const updateTroop = async (event) => {
        event.preventDefault();
        console.log("Deleting post with id:", id);

        await supabase
        .from('Crew')
        .update({ name: troop.name, count: troop.count})
        .eq('id', id);
        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
        .from('Crew')
        .delete()
        .eq('id', id); 
        window.location = "/";
        
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setTroops( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>
                <label> Name </label>
                <input type="text" name="name" value={troop.name} onChange={handleChange} />

                <label>Count</label>
                <input type="number" name="count" value={troop.count} onChange={handleChange} />
                
                <input type="submit" value="submit" onClick={updateTroop}></input>
            </form>
            <button onClick={deletePost}>Delete</button>
            

        </div>
    )
}

export default EditPost;