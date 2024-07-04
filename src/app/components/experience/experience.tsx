import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>5 years working as a Backend Software Developer, in companys such as Before IT, KPMG and Gestor Food.</p>
          <div className="experience-time">
            <Skill image="/assets/php.png" measure={5} years="5 years"/>
            <Skill image="/assets/nodejs.png" measure={4} years="4 years"/>
            <Skill image="/assets/ts.png" measure={3} years="3 years"/>
            <Skill image="/assets/js.png" measure={3} years="3 years"/>
            <Skill image="/assets/react.png" measure={2} years="2 years"/>
            <Skill image="/assets/java.png" measure={1} years="1 year"/>
          </div>
        </div>
    )
}