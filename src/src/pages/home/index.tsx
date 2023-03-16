import { Detective } from '@phosphor-icons/react'
import Image from '../../../assets/backgroundHome.svg'
import './styles.scss'

export function Home() {
    return (
        <div className="home_container">
            <aside>
                <div className='home_logo_container'>
                    <Detective size={56} className='home_logo' />
                    <h1>SecretFriend</h1>
                </div>

                <div className='home_content_container'>
                    <h1>Organize seu amigo secreto!</h1>
                    <p>Com o <strong>SecretFriend</strong> você pode organizar seu amigo secreto com facilidade e rápidez.</p>
                </div>
                <button>Crie seu amigo secreto.</button>
            </aside>

            <section>
                <img src={Image} alt="" />
            </section>
        </div>
    )
}