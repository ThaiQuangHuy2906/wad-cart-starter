# Self-assessment — IA#1

Submitted by: 24127177 — Thái Quang Huy

Repository: https://github.com/ThaiQuangHuy2906/wad-cart-starter

Total I claim: 100 / 100

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | src/cart.js implements every rule in README.md: correct subtotal and VAT, threshold-based shipping, empty cart returning 0, RangeError for negative prices and invalid quantities, and numeric rounding using Math.round. The worked example returns 467400. |
| Tests | 20 | 20 | test/cart.test.js contains 15 independent tests covering the worked example, empty cart, shipping below/at/above threshold, invalid prices and quantities, rounding, return type, and VAT. Commit f38c29d shows the RED test suite was added before implementation. The final test suite passes in CI. |
| Harness | 20 | 20 | AGENTS.md documents the stack, project structure, commands, validation and Never rules. package.json provides npm test and npm run lint. scripts/lint.mjs checks JavaScript syntax and project style rules without external dependencies. .github/workflows/ci.yml runs both gates on push. GitHub Actions confirms both gates pass. |
| Brief | 15 | 15 | brief.md specifies the allowed implementation files, function contract, input and output, calculations, error cases, no-dependencies constraint, test requirements and definition of done. |
| AI-LOG.md | 15 | 15 | AI-LOG.md documents ChatGPT and Codex assistance, what was requested and retained, prompt corrections, decisions not to modify implementation unnecessarily, hand-written tests, manual diff review, RED/GREEN validation and CI verification. These activities are supported by the repository files and commit history. |

## What I did not manage

I did not implement additional input-validation behavior for cases that are not defined in README.md, such as missing options or malformed item objects. I kept the implementation within the stated specification rather than adding assumptions.

The project uses a lightweight custom lint script instead of a full third-party linting framework. This was a deliberate choice to keep the assignment dependency-free. The script checks JavaScript syntax and the style rules configured for this small project.

## What I would do differently

I would plan the VAT edge cases and the independence of individual tests earlier in the development process.

I would also make the first AI planning prompt clearer about permission boundaries. Initially, I prohibited all terminal commands, which prevented Codex from reading local files. I later corrected the prompt to permit read-only access while requiring explicit approval before code modifications.

## Verification

Repository:
https://github.com/ThaiQuangHuy2906/wad-cart-starter

GitHub Actions:
https://github.com/ThaiQuangHuy2906/wad-cart-starter/actions

Commit evidence:
- 2a8c4e7 — Initial Harness.
- fa12fae — Implementation Brief.
- f38c29d — Tests added before implementation.
- e41e45e — Implementation and AI-LOG.

Final validation:
- npm test: 15 tests passed, 0 failed.
- npm run lint: passed.
- git diff --check: no errors.
- GitHub Actions: successful on the final submitted commit.
