import React from "react";

export default function HomeSection() {
    return (
        <div id="home" className="flex items-center justify-center flex-col py-20">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold font-poppins dark:text-indigo-500">Olá👋🏻, me chamo Rafael.</h1>
                <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">Sejam bem-vindos(as) ao meu portfólio!</p>
                <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">Tenham uma ótima experiência explorando os diversos de interfaces front-end que criei.</p>
                <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">Sinta-se à vontade para navegar pelo meu portfólio, aproveite sua visita e não hesite em entrar em contato comigo para qualquer dúvida ou oportunidade de colaboração. Tenham uma ótima experiência!
                </p>
                <a href="#works" className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">Ver meus projetos</a>
            </div>
        </div>
    )
}