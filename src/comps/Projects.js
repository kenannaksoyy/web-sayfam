import { useDispatch } from "react-redux";
import { uptade } from "../pagesControl/pageSlice";
import ProjectItems from "../projectsComps/ProjectItems";
import "../styles/Projects.css";
import { useEffect, useState } from "react";
import { js,cSharp,python,c } from "../datas/allProjects";


const langs=["Js React-Redux","C","Python","C#.net"]

export default function Projects(){
    document.title="Projelerim";
    const dispatch=useDispatch();
    dispatch(uptade(1));
    
    const [selectLang, setSelectLang] = useState("Js React-Redux");
    const handleChange = event =>{
        const {value} = event.target; 
        setSelectLang(value);
    };
    useEffect ( () => {
        setSelectLang("Js React-Redux");
      },[]);

    return(
        <div id="projects-container">
            <h1 style={{color:"#7868E6"}} id="projects-container-title">Projelerim</h1>
            <p id="lang-select-drop">
                <label htmlFor="skills-dropdown">Lütfen Seçim Yapınız </label>
                <select id="langs-dropdown" name="selectLang" value={selectLang} onChange={handleChange}>
                    {
                        langs.map (lang => (
                            <option value={lang}>{lang}</option>
                        ))
                    }
                </select>
            </p>
            {
                selectLang==="Js React-Redux"
                ? 
                <ProjectItems langTitle={"JS React-Redux"} langProjects={js}/>
                :
                selectLang==="C" 
                ?
                <ProjectItems langTitle={"C"} langProjects={c}/>
                :
                selectLang==="Python" 
                ?
                <ProjectItems langTitle={"Python"} langProjects={python}/>
                :
                <ProjectItems langTitle={"C#.net"} langProjects={cSharp}/>
            }
            
            
            
            
            
        </div>
        
    );
}