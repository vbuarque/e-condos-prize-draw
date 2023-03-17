import { Gift } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Image from '../../../assets/backgroundHome.svg'
import './styles.scss'

export function Home() {
    return (
        <div className="home_container">
            <aside>
                <div className='home_logo_container'>
                    <Gift size={56} className='home_logo' />
                    <h1>SecretCristmas</h1>
                </div>

                <div className='home_content_container'>
                    <h1>Organize seu amigo secreto!</h1>
                    <p>Com o <strong>SecretCristmas</strong> você pode organizar seu amigo secreto com facilidade e rápidez.</p>
                </div>
                <Link to='/register' className='button_link'>Crie seu amigo secreto</Link>
            </aside>

            <section>
                <img src={Image} alt="" />
            </section>
        </div>
    )
}