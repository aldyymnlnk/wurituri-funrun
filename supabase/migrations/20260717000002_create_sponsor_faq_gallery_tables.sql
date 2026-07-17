-- ===============================
-- TABEL SPONSOR
-- ===============================

create table if not exists sponsors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  image text not null,
  website text,
  created_at timestamptz default now()
);

-- ===============================
-- TABEL FAQ
-- ===============================

create table if not exists faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  created_at timestamptz default now()
);

-- ===============================
-- TABEL GALLERY
-- ===============================

create table if not exists gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image text not null,
  created_at timestamptz default now()
);