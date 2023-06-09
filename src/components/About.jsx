import React from 'react'
import Titles from './Titles'

export default function About() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
            <div className='w-full md:w-6/12'>
                <Titles>Sobre mim</Titles>
                <p className='text-md text-gray-600 dark:text-gray-300'>
                    Sou um desenvolvedor front-end apaixonado por criar experiências interativas e solucionar problemas na web. Embora eu ainda não tenha experiência profissional na área, venho aprimorando minhas habilidades e conhecimentos por meio de cursos práticos em HTML, CSS, JavaScript, Java, C# e Node, além de me especializar no framework ReactJS. Estou constantemente buscando novos desafios e oportunidades para expandir meu conhecimento no mundo do desenvolvimento web. Minha abordagem é centrada no usuário, e estou sempre em busca de soluções criativas e eficientes para fornecer uma melhor experiência ao usuário final. Estou empolgado para desenvolver projetos desafiadores e fazer parte de equipes inovadoras. Vamos criar algo incrível juntos! Estou pronto para enfrentar novos desafios, transformar ideias em soluções e encantar os usuários!
                </p>
                <a href="mailto:rafaeltimoreirass@gmail.com"
                    className='block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-500'
                >Fale comigo</a>
            </div>

            <img src={`https://avatars.githubusercontent.com/u/52933778?v=4`} alt="Rafael Moreira" className='w-full md:w-6/12 rounded-lg object-cover' />
        </div>
    )
}