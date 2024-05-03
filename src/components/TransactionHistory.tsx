import type { ComponentChildren } from "preact"
import { useStore } from '@nanostores/preact'
import { finances } from '../lib/store'
import { useEffect } from "preact/hooks"

interface IProps {
    children?: ComponentChildren
    fdata?: any
}

export default function TransactionHistory(props:IProps) {
    let f = useStore(finances)

    useEffect(() => {
        finances.set([...props.fdata])
    }, [])

    return (
        <div>
            <h3 class="font-semibold px-2">transaction history</h3>
            <hr />
            <div class="flex flex-col gap-2 text-sm bg-white px-4">
                {
                    f.map((el) => (
                        <div class="py-1 px-2 border-r-4 border-green-700 flex justify-between">
                            <span>{el.description}</span>
                            <span>{el.amount}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}