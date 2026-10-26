-- Project settings (compiler directives for the whole project, see shared/projectSettings.ts), as JSON.
ALTER TABLE projects ADD COLUMN settings TEXT NOT NULL DEFAULT '{}';
