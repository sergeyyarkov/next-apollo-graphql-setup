import Link from 'next/link'
import classes from './Header.module.scss'

const Header = () => (
    <header className={classes.Header}>
        <ul>
            <li>
                <Link href='/'>
                    <a>Index</a>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href='/articles'>
                    <a>Articles</a>
                </Link>
            </li>
        </ul>
    </header>
)

export default Header