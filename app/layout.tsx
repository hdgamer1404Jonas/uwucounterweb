import styles from './Layout.module.css'

export const metadata = {
  title: 'UwU Counter',
  description: 'A Bot which counts UwUs in a Discord Server',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={styles.html}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
    <section>
        <div className={styles.navigationContainer}>
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src="/favicon.ico" alt="UwU Counter Logo" width="50px" height="50px" />
                    </a>
                </div>
                <ul className={styles.navigationList}>
                    <li className={styles.navigationItem}>
                        <a href="/">Home</a>
                    </li>
                    <li className={styles.navigationItem}>
                        <a href="/commands">Commands</a>
                    </li>
                    <li className={styles.navigationItem}>
                        <a href="/invite">Invite</a>
                    </li>
                    <li className={styles.navigationItem}>
                        <a href="/support">Support</a>
                    </li>
                    <li className={styles.navigationItem}>
                        <a href="/login">LogIn</a>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      <body>{children}</body>
    </html>
    )
}
