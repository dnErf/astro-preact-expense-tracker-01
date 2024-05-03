import { defineDb, defineTable, column } from 'astro:db';

let Finances = defineTable({
  columns: {
    id: column.text(),
    description: column.text(),
    amount: column.number()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Finances }
});
