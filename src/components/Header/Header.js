import classes from './Header.module.scss'
export default function Header() {
    return (
        <>
            <header>
                <div className={classes.container}>
                    <nav>
                        <a className={classes.logo}>
                            <img src="https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg" style={{ width: '20px' }} />
                        </a>
                        <ul>
                            <li><a href="#">Sobre Mim</a> </li>
                            <li><a href="#">Experiência Profissinal</a> </li>
                            <li><a href="#">Formação</a> </li>
                            <li><a href="#">Competências</a> </li>
                            <li><a href="#">Projetos</a> </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )

}