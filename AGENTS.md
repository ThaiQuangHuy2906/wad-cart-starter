# IA#1 — cartTotal Project Rules

## Stack

- Use Node.js 22 or newer.
- Use plain JavaScript with ES Modules.
- Use only Node.js built-in modules.
- Do not add external dependencies.

## Project Structure

- src/cart.js: cartTotal implementation.
- test/cart.test.js: automated tests.
- scripts/: validation scripts.
- brief.md: task specification.
- AI-LOG.md: honest record of AI assistance.

## Coding Style

- Use 2-space indentation.
- Prefer const and let; never use var.
- Use named exports.
- Keep functions simple and readable.
- Do not modify unrelated files.

## Commands

- npm test: run automated tests.
- npm run lint: check syntax and coding rules.

## Validation

- Read every diff before accepting changes.
- Run tests and lint after implementation.
- Test normal cases and error cases.
- Ensure cartTotal returns a number.

## Never

- Never install packages without explicit approval.
- Never remove tests just to make them pass.
- Never commit secrets, .env or node_modules.
- Never push or submit without human review.
- Never change the public cartTotal function signature.
