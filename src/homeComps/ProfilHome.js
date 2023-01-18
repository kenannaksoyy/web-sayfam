import personInfos from "../datas/personDatas";
export default function ProfilHome(){
    return (
        <div id="profil-home">
        <h2 style={{ color:"#001D6E" }}>Profil</h2>
        <div id="profil-cont">
            <div id="profil-infos-cont">
                <h3 style={{ color:"#001D6E" }}>Kişisel Bilgiler</h3>
                <strong>Doğum Tarihim</strong><p>{personInfos.birthday}</p>
                <strong>İkametgahım</strong><p>{personInfos.location}</p>
                <strong>Eğitim Durumum</strong><p>{personInfos.school} {personInfos.job} 2016-2022</p>
            </div>
            <div id="about-me-const">
                <h3 className="p-title" style={{ color:"#001D6E" }}>Hakkımda</h3>
                <p> 
                    Üniversite hayatım boyunca Python, C ve Java dillerini kullanarak veri yapıları, metin ve veri madenciliği, 
                    bilgisayar ile görme,NYP ve Multithread ile simülasyon ve basit oyun projeleri hazırladım.
                </p>
                <p>
                    Mezuniyetimden sonra Web teknolojilerinde ilerlemek istediğimi karar verdim.
                    JavaScript, React ve Redux teknolojilerini öğrenerek Front-End için kendimi hazırladım.
                    Tasarım kısmında kendimi geliştirmeye çalışıyorum.
                </p>                   
            </div>
        </div>
    </div>
    );
}
