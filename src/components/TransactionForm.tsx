import { useStore } from '@nanostores/preact'
import { finances } from '../lib/store'

export default function TransactionForm(props) {
    const f = useStore(finances)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('form submitted')
        
        let fd = new FormData(e.currentTarget)
        let description = fd.get('description')
        let amount = parseFloat(fd.get('amount').toString()) 
        let id = Date.now().toString(16) + Math.random().toString(16).replace('0.', '')

        try {
            await fetch('/api/finances', {
                method: 'POST',
                body: JSON.stringify({
                    id, description, amount
                })
            })
        }
        catch {
            return
        }

        finances.set([...f, {
            id: id,
            description: description,
            amount: amount
        }])
    }

    return (
        <form onSubmit={handleSubmit} class="p-4">
            <h3 class="font-semibold">transaction form</h3>
            <div class="flex flex-col py-1">
                <input 
                    type="text" 
                    placeholder="description ..." 
                    class="p-2 text-sm"
                    name="description"
                />
            </div>
            <div class="flex flex-col py-1">
                amount
                <input 
                    type="text" 
                    placeholder="enter amount ..." 
                    class="p-2 text-sm"
                    name="amount"
                />
            </div>
            <div class="flex justify-center text-sm py-1">
                <button class="bg-indigo-700 p-2 text-white w-full">
                    add transaction
                </button>
            </div>
        </form>
    )
}
