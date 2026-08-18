import { useState } from "react";
import axios from "axios";
const token = import.meta.env.VITE_GITHUB_TOKEN;

function TopNav( Props){
    const {setPeople}=Props
    const[search,setSearch]=useState("");
    const onSearch=async()=>{
        try{
            const trimmedString =search.trim();
            if (trimmedString===""|| trimmedString.length < 3){
                return;
            }
            let response= await axios({
                method:"GET",
                url:"https://api.github.com/search/users",
                 headers:{
                    Authorization: `Bearer ${token}`,
                    Accept:"application/vnd.github+json",
                },
                params:{
                    q:trimmedString,

                },
            });
            setPeople(response.data.items);

        }catch(e){}
    };
    return(
        <div className=""style={{display:"flex",alignItems:"center"}} >
            <img style={{width:"40px"}}
            src="https://toppng.com/uploads/preview/github-logo-png-photo-11659780047rlwsegmg72.png"
            />
            <input style={{width:"50vw",marginleft:"1em"}}
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
            <button onClick={onSearch}>search</button>
        </div>
    );
}
export default TopNav;
