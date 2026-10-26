-- Order of the entries of each folder (explorer order, which is also the compilation order), and entries excluded
-- from the compilation (with their content, for a folder).
ALTER TABLE entries ADD COLUMN position INTEGER NOT NULL DEFAULT 0;
ALTER TABLE entries ADD COLUMN disabled INTEGER NOT NULL DEFAULT 0;

-- Existing entries keep their order: by name (the explorer sorted them by name before).
UPDATE entries SET position = (
    SELECT ranked.position FROM (
        SELECT project_id, path, ROW_NUMBER() OVER (PARTITION BY project_id ORDER BY path COLLATE NOCASE, path) AS position FROM entries
    ) AS ranked
    WHERE ranked.project_id = entries.project_id AND ranked.path = entries.path
);
