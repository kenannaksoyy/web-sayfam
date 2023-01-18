import { Link } from "react-router-dom";
import { uptade } from "../pagesControl/pageSlice";
import { useDispatch } from "react-redux";
import projectsHomeItems from "../datas/projectsHome";

export default function ProjectsHome(){
    const dispatch = useDispatch();
    return(
        <div id="projects-home">
        <h2>Projelerim</h2>   
        <div id="projects-cont-home">
            {
                projectsHomeItems.map(item => {
                    return (
                        <div className="project-item-home">
                            <img className="project-item-home-img"  src={item.img} alt="res"/><br/>
                            <strong>{item.name}</strong><br/>
                            <a href={item.gitHubLink} style={{ textDecoration: 'none',color:"blue" }}>
                                {item.name} gitHub' da Görüntüleyiniz
                            </a>
                        </div>
                    )
                })
            }
        </div>
        <Link to="/projects" id="project-home-link" 
        style={{ textDecoration: 'none',color:"blue" }} 
        onClick={()=>{dispatch(uptade(1))}}>
            Projelerimin Detaylar İçin Lütfen Tıklayın
        </Link>
    </div>
    );
}
