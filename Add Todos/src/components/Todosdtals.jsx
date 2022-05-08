import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export const TodosDetals = ()=>{
    const {id}= useParams();
    const [data, setdata] = useState({});

    useEffect(()=>{
        getData();
    }, []);

    const getData = async()=>{
try {
    const data = await fetch(`http://localhost:8080/Todos/${id}`);
    const res = await data.json();
    setdata(res);

} catch (error) {
    console.log(error)
}
    }

    return (
        <div>
            <h1>Title : {data.title}</h1>
            <span>Status : {data.status ? "DOne" : "Not DOne"}</span>
        </div>
    )
}