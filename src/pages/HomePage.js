import { Link } from '@material-ui/core';
import { Facebook, GitHub, Instagram, LinkedIn, Phone } from '@material-ui/icons';
import { useState } from 'react';
import classes from './HomePage.module.scss';

export default function HomePage() {
    const [experienciaProfissionalText, setExperienciaProfissionalText] = useState('Experiência Profissional');
    const [caixaFormacaoText, setCaixaFormacaoText] = useState('Formação');
    const [caixaCompetenciasText, setcaixaCompetenciasText] = useState('Competências');
    const [caixaProjetosText, setcaixaProjetosText] = useState('Projetos');

    const changeExperienciaProfissionalText = () => {
        setExperienciaProfissionalText(
            'Pariatur sunt pariatur ut nostrud dolor consectetur et id. Aliqua irure consectetur eu velit fugiat ea quis anim. Velit culpa duis quis qui excepteur excepteur nostrud.'
        );
    };

    const changecaixaFormacaoText = () => {
        setCaixaFormacaoText(
            'Pariatur sunt pariatur ut nostrud dolor consectetur et id. Aliqua irure consectetur eu velit fugiat ea quis anim. Velit culpa duis quis qui excepteur excepteur nostrud.'
        );
    };
    const changecaixaCompetenciasText = () => {
        setcaixaCompetenciasText(
            'Pariatur sunt pariatur ut nostrud dolor consectetur et id. Aliqua irure consectetur eu velit fugiat ea quis anim. Velit culpa duis quis qui excepteur excepteur nostrud.'
        );
    };
    const changecaixaProjetosText = () => {
        setcaixaProjetosText(
            'Pariatur sunt pariatur ut nostrud dolor consectetur et id. Aliqua irure consectetur eu velit fugiat ea quis anim. Velit culpa duis quis qui excepteur excepteur nostrud.'
        );
    };

    return (
        <main>
            <section>
                <div className={classes.homePageGrid}>
                    <div className={classes.colunaRedesSociais}>
                        <div className={classes.iconWrapper}>
                            <Phone fontSize='large' />

                            <Link href='https://linkedin.com/in/amanda-affanio-6a46571b7' target='_blank'>
                                <LinkedIn fontSize='large' />
                            </Link>
                            <Link href='https://github.com/Rarymi ' target='_blank'>
                                <GitHub fontSize='large' />
                            </Link>
                            <Link href='https://www.facebook.com/amanda.rarymi.5' target='_blank'>
                                <Facebook fontSize='large' />
                            </Link>
                            <Link href='https://www.instagram.com/amandararymi/' target='_blank'>
                                <Instagram fontSize='large' />
                            </Link>
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
                        <div
                            className={classes.experienciaProfissional}
                            onMouseOver={() => changeExperienciaProfissionalText()}
                            onMouseLeave={() => setExperienciaProfissionalText('Experiência Profissional')}
                        >
                            <div>{experienciaProfissionalText}</div>
                        </div>

                        <div
                            className={classes.caixaFormacao}
                            onMouseOver={() => changecaixaFormacaoText()}
                            onMouseLeave={() => setCaixaFormacaoText('Formação')}
                        >
                            <div>{caixaFormacaoText}</div>
                        </div>

                        <div
                            className={classes.caixaCompetencias}
                            onMouseOver={() => changecaixaCompetenciasText()}
                            onMouseLeave={() => setcaixaCompetenciasText('Habilidades')}
                        >
                            <div>{caixaCompetenciasText}</div>
                        </div>
                        <div
                            className={classes.caixaProjetos}
                            onMouseOver={() => changecaixaProjetosText()}
                            onMouseLeave={() => setcaixaProjetosText('Projetos')}
                        >
                            <div>{caixaProjetosText}</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
