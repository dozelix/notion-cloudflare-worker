import { Client } from "@notionhq/client";

export default {
	async fetch(request, env, ctx) {
		// Inicializamos el cliente de Notion con tu variable secreta
		const notion = new Client({ auth: env.NOTION_TOKEN });

		try {
			// Intentamos listar los usuarios del espacio para probar la conexión
			const response = await notion.users.list({});
			return new Response(JSON.stringify({ success: true, users: response.results }), {
				headers: { "content-type": "application/json" },
			});
		} catch (error) {
			return new Response(JSON.stringify({ success: false, error: error.message }), {
				status: 500,
				headers: { "content-type": "application/json" },
			});
		}
	},
};