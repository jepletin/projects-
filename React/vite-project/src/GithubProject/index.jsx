import { useState, useEffect} from "react";
import axios from "axios"
import TopNav from "./TopNavbar";
import InfoSection from "./InfoSection";
import PersonCard from "./PersonCard";
const token = import.meta.env.VITE_GITHUB_TOKEN;
function GithubProject(){
    const [people,setPeople]=useState([]);
    const getUserData=async()=>{
        try{
            let response= await axios({
                method:"GET",
                url:"https://api.github.com/users",
                headers:{
                    Authorization: `Bearer ${token}`,
                    Accept:"application/vnd.github+json",
                },
            });
            setPeople(response.data);
        }catch(e){
            console.log("Error is",e);
        }
    };
    useEffect(()=>{
        getUserData();
    },[]);
    return(
        <div>
            < TopNav setPeople={setPeople} />
            <InfoSection  people={people} />
            {people.map((person)=>(
                < PersonCard key={person.id} person={person} />

            ))}
        </div>
    );

    }

export default GithubProject;