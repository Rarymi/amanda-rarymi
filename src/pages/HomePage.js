import classes from './HomePage.module.scss'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'
import instagram from '../assets/images/instagram.png'
export default function HomePage() {
    console.log(process.env.PUBLIC_URL + 'aquiii')
    return (
        <main>
            <section>
                <div className={classes.homePageGrid}>


                    <div className={classes.colunaRedesSociais}>

                        <div className={classes.iconWrapper}>
                            <img src={facebook} alt="facebook-logo" />
                            <img src={linkedin} alt="linkedin-logo" />
                            <img src={instagram} alt="linkedin-logo" />
                        </div>
                    </div>

                    <div className={classes.colunaDeApresentacao}>
                        <div className={classes.caixaDeApresentacao}>
                            <div className={classes.emojiContainer}>
                                <p>&#128075;</p>
                            </div>
                            <div>
                                <span>Olá, eu sou</span>
                                <p>Amanda!</p>
                            </div>

                        </div>
                        <div className={classes.caixaEstudante}>
                            <div>
                                <span>Estudante de</span>
                                <p>Análise e Desenvolvimento de Sistemas</p>
                            </div>

                        </div>

                    </div>
                    <div className={classes.colunaInformacao}>

                        <div className={classes.experienciaProfissional}>
                            <div>
                                Experiência Profissional
                            </div>

                        </div>
                        <div className={classes.caixaFormacao}>
                            <div>
                                Formação Acadêmica
                            </div>
                        </div>
                        <div className={classes.caixaCompetencias}>
                            <div>
                                Competências
                            </div>
                        </div>
                        <div className={classes.caixaProjetos}>
                            <div>
                                Projetos
                            </div>
                        </div>



                    </div>
                </div>


            </section>
        </main>
    )

}