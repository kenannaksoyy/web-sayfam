import { Link } from "react-router-dom";
import skillHomeItems from "../datas/skillsHomeDatas";
import { uptade } from "../pagesControl/pageSlice";
import { useDispatch } from "react-redux";

export default function SkillsHome(){
    const dispatch = useDispatch()
    return(
        <div id="skills-home">
            <h2>Becerilerim</h2>   
            <div id="f-end-cont-home">
                {
                    skillHomeItems.map(item => {
                        return (
                            <div className="skill-item-home">
                                <img className="skill-item-home-img"  src={item.img} alt="res"/><br/>
                                <strong>{item.name}</strong>
                            </div>
                        )
                    })
                }
            </div>
            <Link to="/skills" id="skills-home-link" style={{ textDecoration: 'none',color:"blue" }} onClick={()=>{dispatch(uptade(2))}}>
               Becerilerimin Detayları İçin Lütfen Tıklayın
            </Link>
        </div>
    );
}
