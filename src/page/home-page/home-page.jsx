import React from 'react';
import SocialButton from '@/component/social-button/social-button';

const LOGO_URL = 'https://imgur.com/R2e43tR.jpeg';

function HomePage() {
    const socials = [
        {
            id: 'instagram',
            link: 'https://instagram.com/booleanbuffer'
        },
        {
            id: 'x',
            link: 'https://x.com/booleanbuffer'
        },
        {
            id: 'facebook',
            link: 'https://facebook.com/booleanbuffer',
        },
        {
            id: 'blog',
            link: 'https://blog.booleanbuffer.com'
        },
        {
            id: 'email',
            link: 'mailto:hello@booleanbuffer.com'
        }
    ]
  return (
    <div>
        <div>
            <h4>BooleanBuffer</h4>
        </div>
        <div>
            <img src={LOGO_URL} style={{height: 300, width: 300, borderRadius: '50%'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '0.3rem'}}>
                {socials.map((social, index)=>{
                    return (
                        <SocialButton key={`${social.id}${index}`} id={social.id} link={social.link} />
                    )
                })}
        </div>
    </div>
  )
}

export default HomePage
