import { useState } from "react";
import "./css/form.css";
import { nanoid } from "nanoid";
export const Form = ({ d }) => {
    const [tex1, setText1] = useState("")
    const [tex2, setText2] = useState("")
    const [tex3, setText3] = useState("")
    const [tex4, setText4] = useState(0)
    const [tex5, setText5] = useState(1.2)
    const [tex6, setText6] = useState(1)

    //     "name" 
    //     "type" 
    //     "imge" 
    //    "price" 
    //    "rating"
    //     "votes"



    return (
        <div className="main12">
            <button className="btn081" onClick={() => {
                d(false)
            }}> X </button>
            <h1>Add Item</h1>
            <div className="m-091">
                <form action="">
                    <input type="text" placeholder="Enter food Name.." onChange={(e) => {
                        setText1(e.target.value);

                    }} />
                    <input type="text" placeholder="Enter type of food.." onChange={(e) => {
                        setText2(e.target.value);
                    }} />
                    <input type="text" placeholder="Enter Image Link.." onChange={(e) => {
                        setText3(e.target.value);
                    }} />
                    <input type="text" placeholder="Enter Item Price.." onChange={(e) => {
                        setText4(e.target.value);
                    }} />
                    <input type="text" placeholder="Enter rating.." onChange={(e) => {
                        setText5(e.target.value);
                    }} />
                    <input type="text" placeholder="Enter votes.." onChange={(e) => {
                        setText6(e.target.value);
                    }} />
                </form>
                <div className="btn-08">
                    <button className="btn-081" onClick={() => {
                        const payload = {
                            id : nanoid(5),
                            name: tex1,
                            imge: tex3,
                            type: tex2,
                            price: tex4,
                            rating: tex5,
                            votes: tex6
                        };
                        fetch("http://localhost:8080/food",{
                            method : "POST",
                            headers : {
                                "content-type" : "application/json"
                            },
                            body : JSON.stringify(payload)
                        })
                    }}>Submit</button>
                </div>

            </div>
        </div>
    )
}