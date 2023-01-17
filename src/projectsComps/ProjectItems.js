export default function ProjectItems(props){
    const {langTitle, langProjects} = props
    return(
    <div id="lang-projects-container">
        <h2>{langTitle}</h2>
        <div id="lang-projects-cont">
        {
            langProjects.map(p => (
                <div className="lang-project-item-cont" style={{background:"#DCD6F7",border:"5px solid #550A46"}}>
                    <h3>{p["name"]}</h3>
                    <img src={p.img} className="p-img-item" alt="res"/>
                    <p>{p.text}</p>
                    <a href={p.gitHubLink} style={{ textDecoration: 'none',color:"blue" }}>{p["name"]} Projemin github linki</a>
                </div>
            ))
        }
        </div>
    </div>
    );
}