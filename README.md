## Reproduction

1. Clone and `pnpm install`
1. Run: `pnpm eslint src/routes/+page.svelte`

Expected: We should get no eslint errors.
Actual: We get two eslint errors. Error message:

```
src/routes/+page.svelte
   7:20  error  Unsafe member access .url on an `any` value       @typescript-eslint/no-unsafe-member-access
  11:8   error  Unsafe member access .greeting on an `any` value  @typescript-eslint/no-unsafe-member-access
```
