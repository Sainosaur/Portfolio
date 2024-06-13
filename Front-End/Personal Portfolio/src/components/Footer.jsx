import { useSelector } from "react-redux"

const Footer = () => {
  const logoColor = useSelector(state => state.theme).logoInActive

    return (
        <footer className="footer p-10 text-base-content">
        <aside>
          <img src={`src/assets/pd-logo-${logoColor}.webp`} width="100" />
          <h2 className="text-xl ">Project Delta </h2>
          <p></p>
        </aside>
        <nav>
          <h1 className="text-m font-bold">Web Dev</h1>
          <a className="link link-hover" href="/projects">Projects</a>
          <a className="link link-hover" href="/certifications">Certifications</a>
        </nav>
        <nav>
          <p> Sai Adiraju operating as Project Delta</p>
          <p className="text-"> © 2024 Sai Adiraju</p>
        </nav>
      </footer>
    )
}

export default Footer;