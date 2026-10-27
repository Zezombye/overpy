-- Public projects can be viewed (not modified) by anyone with their link, even without an account.
ALTER TABLE projects ADD COLUMN public INTEGER NOT NULL DEFAULT 0;
