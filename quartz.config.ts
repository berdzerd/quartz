import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.berdzerd.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "JetBrains Mono",
        body: "JetBrains Mono",
        code: "Nova Mono",
      },

    colors: {
  lightMode: {
    light: "#f6efe8",        // background (was incorrectly treated as text before)
    lightgray: "#e7dbd1",    // subtle surfaces / cards
    gray: "#6b4a35",         // secondary text (muted brown)

    darkgray: "#3a2418",     // main text (primary readable brown)
    dark: "#2b170f",         // strong text / titles / headings

    secondary: "#8898a8",    // links (cool gray blue same as dark mode)
    tertiary: "#98a068",     // optional accent (green still usable for contrast)

    lightHighlight: "rgba(176, 136, 88, 0.15)",
    textHighlight: "#d0a86088", 
  },

  darkMode: {
    light: "#1c1410",        // background
    lightgray: "#2e2420",    // subtle surfaces
    gray: "#88a080",         // muted green
    darkgray: "#d8c8b8",     // main text
    dark: "#d8c8b8",         // strong text

    secondary: "#8898a8",    // links
    tertiary: "#98a068",     // accent

    highlight: "rgba(176, 136, 88, 0.15)",
    textHighlight: "#d0a86088",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
