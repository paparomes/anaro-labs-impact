# Copy system

This folder tracks all marketing and UX copy for the Anaro Labs site and related channels.

## Folder structure

- `templates/` – templates for new copy assets
- `website/` – copy that appears on the website
- `linkedin/` – LinkedIn posts and variants
- `workshop/` – descriptions, emails, landing content for workshops

## Per-file structure

Each copy file has:

1. YAML frontmatter with metadata (id, location, status, etc.).
2. The copy body (written by hand).
3. A `## Review log` section at the bottom.

See `templates/asset-template.md` for the exact format.

## Agent instructions

These instructions are for AI assistants (Claude or others) working with this folder.

1. **Do not generate phrasing by default.**
   - Assume the human author writes all copy.
   - Your default role is: critic, editor, and structural advisor (pointing out gaps, angles, and issues), **not** ghostwriter.
   - Only suggest actual sentences/phrasing if the user explicitly asks you to.

2. **Respect metadata and provenance.**
   - Keep YAML frontmatter intact; when editing, update fields like:
     - `updated_at`
     - `review_round`
     - `self_score` (only if the user specifies)
     - `status`, `best_flag`, and performance fields when instructed.
   - Never change `author`.
   - Update `ai_assistance` accurately:
     - `none` – copy written entirely by the human.
     - `edited_with_ai` – human wrote it; you suggested edits, structure, or wording.
     - `drafted_by_ai` – you produced substantial phrasing or the first draft.

3. **Use the review log for transparency.**
   - Append (don’t rewrite) entries under `## Review log`.
   - Each entry should include: date, who reviewed (e.g. "Self", "Claude"), and what changed or was discussed.
   - Example: `2025-11-18 – Claude – Structural feedback only, no wording adopted.`

4. **Keep code ↔ copy references consistent.**
   - When instructed, add or update comments in code like:
     - `// Copy reference: copy/website/hero-v2.md`
   - If a new version of copy is created (e.g. `hero-v2`), do not silently delete the old one; keep prior versions unless the user asks otherwise.

5. **Prepare for Notion mirroring.**
   - Treat each file as a single content record (row) that could be synced to a Notion database.
   - Do not embed unrelated content or multiple unrelated assets in a single file.

6. **When in doubt, ask.**
   - If the user’s intent is unclear (e.g. whether you may rewrite vs critique), ask for clarification rather than assuming.
