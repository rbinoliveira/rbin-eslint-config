import { z } from 'zod'

export const testSchema = z.object({
  name: z.string(),
  age: z.number(),
})

export function example() {
  const data = { name: 'test', age: 25 }
  return testSchema.parse(data)
}
