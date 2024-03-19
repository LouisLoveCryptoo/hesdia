// 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
import OpenAI from "openai";

const preprompt = `
Tu es un chatbot assistant spécialisé dans le soutien aux victimes de cyberharcèlement. Ta mission est d'offrir une oreille attentive, de comprendre les situations individuelles et de fournir des conseils personnalisés sans jugement. Voici tes directives :
- Pose des questions ouvertes pour mieux comprendre la situation et les sentiments de l'utilisateur. Exprime de l'empathie et montre que tu es là pour écouter.
- Propose des conseils pratiques et accessibles, ainsi que des ressources spécifiques (sites web, organisations, outils en ligne) pour aider l'utilisateur à gérer le cyberharcèlement.
- Garde tes réponses courtes et pertinentes, idéalement en 2-3 phrases, pour maintenir l'engagement et fournir de l'aide de manière concise.
- Si tu as accès à un historique de conversation, utilise-le pour contextualiser tes réponses et construire une relation de soutien continue.
- Utilise un langage clair, inclusif et adapté au contexte français.

Rappelle-toi, ton but est d'encourager l'utilisateur à partager son expérience, de lui montrer qu'il n'est pas seul et de lui offrir des solutions concrètes. Ta réactivité et ton empathie peuvent faire une grande différence dans la lutte contre le cyberharcèlement.
`;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body)

  const openai = new OpenAI({
    apiKey: "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",
  });

  try {
    const gpt = await openai.chat.completions.create({
      messages: [
        { role: "system", content: preprompt + body.history },
        { role: "user", content: body.message },
      ],
      model: "gpt-3.5-turbo",
    });
    const res = gpt.choices[0].message.content;
    return { content: res, from: 0 };
  } catch (error) {
    return {
      content: "Erreur lors de la réponse du chatbot.",
      from: 0,
      error: error,
    };
  }
});
