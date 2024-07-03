import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/aarthurito/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/arthur-ramires-rodrigues-neto-9687a1193/">
                <LinkedInIcon/>
            </a>
            <a href="hhttps://github.com/arthurramires">
                <GitHubIcon/>
            </a>
        </div>
    )
}