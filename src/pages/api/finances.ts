import type { APIRoute } from 'astro'
import { db, Finances } from 'astro:db'

export const POST:APIRoute = async ({ request }) => {
    let { id, description, amount } = await request.json()

    try {
        await db.insert(Finances).values({ id, description, amount })
    } 
    catch {
        return new Response(JSON.stringify({
            isFine: false
        }))
    }

    return new Response(JSON.stringify({
        isFine: true
    }))
}
