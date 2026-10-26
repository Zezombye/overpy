-- Accounts are created at the first sign-in, without registration code.
ALTER TABLE oauth_states DROP COLUMN registration_code;
