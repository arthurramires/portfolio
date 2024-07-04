import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i´m Arthur! 👋</h1>
            <h2>Backend Software Engineer</h2>
          </div>
          <Image
            src="/assets/avatar.png"
            alt="profile logo"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}