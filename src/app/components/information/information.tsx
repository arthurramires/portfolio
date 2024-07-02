import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Intermediary</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span> Information Systems Bachelors Degree - Universidade Federal de Mato Grosso do Sul</span>
          <br />
          <br />
          <span>🎓</span>
          <span> Currently pursuing a Master's degree in Computer Science - Universidade Federal de Mato Grosso do Sul</span>
        </div>
      </div>
    )
}