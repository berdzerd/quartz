import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {} // Ensure this is an object, not an array

    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          Berdzerd's Garden © {year}, licensed under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
          <span class="cc-icons">
             <img
              src="/static/cc.svg"
              alt="CC Icon"
              width="20"
              height="20"
	      style={{ verticalAlign: "middle", height: "1.2em", marginLeft: "8px" }}
            />
            <img
              src="/static/by.svg"
              alt="BY Icon"
              width="20"
              height="20"
	      style={{ verticalAlign: "middle", height: "1.2em", marginLeft: "8px" }}
            />
          </span>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li key={text}>
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
