// quartz/components/MyFooter.tsx  (or quartz-custom/components/MyFooter.tsx)

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"   // keep this or copy to custom if needed
// import { version } from "../../package.json"   // ← comment out or delete
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const MyFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}

    return (
      <footer class={`${displayClass ?? ""}`}>
        {/* Deleted / commented out the credit line */}
        {/* <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p> */}

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

  MyFooter.css = style
  return MyFooter
}) satisfies QuartzComponentConstructor
