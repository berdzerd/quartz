import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}
    return (
      <footer class={`${displayClass ?? ""}`}>
      <p>
          Berdzerd's Garden © {year}, licensed under {" "}
	  <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> 
          {/* Use standard img tags; verify these exist in /static/ */}
          <img src="/static/cc.svg" alt="CC" width="20" height="20" style={{ marginLeft: "4px", verticalAlign: "middle" }} />
          <img src="/static/by.svg" alt="BY" width="20" height="20" style={{ marginLeft: "4px", verticalAlign: "middle" }} />
        </p>
	  <ul>
          {Object.entries(links).map(([text, link]) => (
            <li key ={text}>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
