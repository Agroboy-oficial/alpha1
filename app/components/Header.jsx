import Link from "next/link";
import styles from '../components/Header.module.css';

const links = [{
    label: 'Home',
    route: '/'
  }, {
    label: 'Plantas',
    route: '/plantas'
  }, {
    label: 'Animales',
    route: '/animales'
  }, {
    label: 'Tech',
    route: '/tecnología'
  }]


export function Header(){
    return(
        
        <header className={styles.header}>
            <nav>
              <ul className={styles.ul}>
                {links.map(({ label, route }) => (
                  <li ket={route}>
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
        </header>
        
    )
}