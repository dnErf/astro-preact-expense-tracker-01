export default function IncomeExpense(props) {
    return (
        <div class="flex gap-8 justify-center items-center text-center bg-white">
            <div class="p-4">
                <h3 class="font-semibold">income</h3>
                <div class="text-green-700 font-bold">
                    + 4322.34
                </div>
            </div>
            <div class="w-0.5 h-12 py-4 bg-neutral-100"></div>
            <div class="p-4">
                <h3 class="font-semibold">expense</h3>
                <div class="text-red-700 font-bold">
                    - $ 5432.34
                </div>
            </div>
        </div>
    )
}