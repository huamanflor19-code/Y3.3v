import { GoogleGenAI } from "https://esm.run/@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyDGOEA2AtjXUCKmO45RLr3t535438aFFsk"
});

document.getElementById("enviar").addEventListener("click", async () => {
  const pregunta = document.getElementById("prompt").value;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: pregunta,
  });

  const respuestaBox = document.getElementById("respuesta");
  respuestaBox.textContent = response.text;

  // 👉 Renderizar fórmulas si las hay
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}); 
