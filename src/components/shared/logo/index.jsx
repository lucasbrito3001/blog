import "./styles.scss"

export default function Logo({ theme }) {
    return (
        <span id="logo" className={theme === 'dark' ? 'dark-logo' : 'light-logo'}>lucasdbrito<span id="logo-color">.com</span></span>
    )
}