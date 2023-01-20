import personInfos from "../datas/personDatas";
export default function HiHome(){
    return (
        <div id="hi-home">
        <div id="home-main-text-a">
            <h1>Merhaba Ben {personInfos.name}</h1>
            <h2>Kişisel Web Sayfama Hoşgeldiniz</h2>
            <p>2022 yılında {personInfos.school} {personInfos.job} bölümünden mezun oldum.</p>
            <p>Şuan React ile Front-End projeleri geliştirmekteyim.</p>
            <nav id="github-linkedin">
                <a href={personInfos.gitHub} style={{ textDecoration: 'none',color:"red" }} target="_blank" rel="noreferrer" >Github </a>
                <a href={personInfos.linkedin} style={{ textDecoration: 'none',color:"blue" }} target="_blank" rel="noreferrer">Linkedin</a>                      
            </nav>
        </div>
        <div id="home-main-img-cont-a">
            <img id = "home-main-img-a" src={require("../images/profil.jpg")} alt="Profil"/>
        </div>
    </div>
    );
}