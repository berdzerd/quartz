import fs from "fs"
import path from "path"

const baseDir = "private/kiip"

function addDraft(filePath) {
  let content = fs.readFileSync(filePath, "utf-8")

  // Skip if already has draft
  if (/^draft:/m.test(content)) {
    console.log("skip:", filePath)
    return
  }

  // Has frontmatter
  if (content.startsWith("---")) {
    const parts = content.split("---")

    // parts structure:
    // [ "", "\nfrontmatter\n", "\nrest of file" ]

    if (parts.length >= 3) {
      let frontmatter = parts[1]

      // Add draft
      frontmatter = frontmatter.trimEnd() + "\ndraft: true\n"

      const newContent = `---\n${frontmatter}---${parts.slice(2).join("---")}`

      fs.writeFileSync(filePath, newContent)
      console.log("added:", filePath)
      return
    }
  }

  // No frontmatter → create it
  const newContent = `---\ndraft: true\n---\n\n${content}`
  fs.writeFileSync(filePath, newContent)
  console.log("created:", filePath)
}

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file)

    if (fs.statSync(full).isDirectory()) {
      walk(full)
    } else if (full.endsWith(".md")) {
      addDraft(full)
    }
  }
}

walk(baseDir)
