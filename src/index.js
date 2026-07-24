import { Client } from "@notionhq/client";

export default {
    async fetch(request, env) {
        // 1. Leer la nota desde el cuerpo del mensaje en vez de la URL
        let nota = "";
        try {
            const body = await request.json();
            nota = body.nota;
        } catch (e) {
            return new Response(JSON.stringify({ error: "Envía un JSON válido con { \"nota\": \"...\" }" }), {
                headers: { "content-type": "application/json" },
            });
        }

        // Tu ID de página real ya corregido
        const PAGE_ID = "38d8a879508e80c89e2ee421790fdfd0";

        if (!nota) {
            return new Response(JSON.stringify({ error: "Falta el campo 'nota' en el JSON" }), {
                headers: { "content-type": "application/json" },
            });
        }

        const notion = new Client({ auth: env.NOTION_TOKEN });

        try {
            // Añadimos un bloque de texto (paragraph) a la página
            await notion.blocks.children.append({
                block_id: PAGE_ID,
                children: [
                    {
                        object: "block",
                        type: "paragraph",
                        paragraph: {
                            rich_text: [
                                {
                                    type: "text",
                                    text: { content: nota },
                                },
                            ],
                        },
                    },
                ],
            });

            return new Response(JSON.stringify({ success: true, message: "Nota guardada en Notion" }), {
                headers: { "content-type": "application/json; charset=utf-8" },
            });

        } catch (error) {
            return new Response(JSON.stringify({ success: false, error: error.message }), {
                status: 500,
                headers: { "content-type": "application/json" },
            });
        }
    },
};