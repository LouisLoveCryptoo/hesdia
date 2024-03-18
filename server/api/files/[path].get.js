import fs from "fs/promises";
import path from "path";

/**
 * Serveur de fichier en Nitro
 * Récupères le chemin du params
 * et renvoi le fichier correspondant
 *
 * @param {Event} event
 * @returns {File}
 */
export default defineEventHandler(async (event) => {
  const query = event.context.params;
  const filePath = path.resolve("server/assets/", query.path);
  try {
    const data = await fs.readFile(filePath);
    return data;
  } catch (error) {
    console.error("File read error:", error);
    return { message: "File not found", status: 404 };
  }
});
