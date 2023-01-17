import "../styles/Skills.css";
import { useState } from "react";
import SkillItems from "../skillsComps/SkillItems";
import msOfficeDatas from "../datas/msOfficeDatas";
import fEndDatas from "../datas/fEndDatas";
import otherSkill from "../datas/otherDatas";
import { uptade } from "../pagesControl/pageSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const skillList=["F-End","MSOffice","Diğer"];
export default function Skills(){
    const dispatch = useDispatch();
    dispatch(uptade(2))
    document.title="Becerilerim";
    const [selectSkill, setSelectSkill] = useState("F-End");
    const handleChange = event =>{
        const {value} = event.target; 
        setSelectSkill(value);
    };
    useEffect ( () => {
        setSelectSkill("F-End");
      },[]);

    return(
        <div id="skills-container">
            <h1 style={{color:"#4C3F91"}} id="skills-container-title">Becerilerim</h1>
            <p id="skill-select-drop">
                <label htmlFor="skills-dropdown">Lütfen Seçim Yapınız </label>
                <select id="skills-dropdown" name="selectSkill" value={selectSkill} onChange={handleChange}>
                    {
                        skillList.map (skill => (
                            <option value={skill}>{skill}</option>
                        ))
                    }
                </select>
            </p>
            {
                selectSkill==="MSOffice" 
                ? 
                <SkillItems skillList={msOfficeDatas}  skilltitle={"Microsoft Office"}/>
                :
                selectSkill==="F-End" 
                ?
                <SkillItems skillList={fEndDatas}  skilltitle={"Front End"}/>
                :
                selectSkill==="Diğer" 
                &&
                <SkillItems skillList={otherSkill}  skilltitle={"C C# Python"}/> 
            }

        </div>
    );
}