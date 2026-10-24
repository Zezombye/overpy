CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    -- Name and avatar from the identity provider, refreshed at each sign-in.
    display_name TEXT NOT NULL,
    avatar_url TEXT,
    settings TEXT NOT NULL DEFAULT '{}',
    created_at INTEGER NOT NULL
);

-- Battle.net / Discord / Google accounts used to sign in (provider names: shared/api.ts).
-- A user can link one account of each provider.
CREATE TABLE identities (
    provider TEXT NOT NULL,
    provider_user_id TEXT NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    created_at INTEGER NOT NULL,
    PRIMARY KEY (provider, provider_user_id)
);

CREATE INDEX identities_user_id ON identities (user_id);

-- Pending OAuth sign-ins, between the redirect to the provider and its callback.
CREATE TABLE oauth_states (
    state TEXT PRIMARY KEY,
    provider TEXT NOT NULL,
    next TEXT NOT NULL,
    -- Set when linking a provider to an existing account.
    link_user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    registration_code TEXT,
    created_at INTEGER NOT NULL
);

CREATE TABLE sessions (
    -- SHA-256 of the session token stored in the cookie.
    token_hash TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    created_at INTEGER NOT NULL,
    expires_at INTEGER NOT NULL
);

CREATE INDEX sessions_user_id ON sessions (user_id);

CREATE TABLE projects (
    id TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    UNIQUE (user_id, name)
);

-- Files and directories of a project. `path` is relative to the project root, with '/' separators.
CREATE TABLE entries (
    project_id TEXT NOT NULL REFERENCES projects (id) ON DELETE CASCADE,
    path TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('file', 'dir')),
    content TEXT,
    mtime INTEGER NOT NULL,
    PRIMARY KEY (project_id, path)
);
