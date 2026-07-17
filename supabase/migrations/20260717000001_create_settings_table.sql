create table if not exists settings (
  id uuid primary key default gen_random_uuid(),
  event_name text,
  event_date date,
  location text,
  whatsapp text,
  email text,
  instagram text,
  maps text,
  price numeric default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- isi baris default supaya settings.astro (yang pakai .single()) tidak error saat pertama kali dibuka
insert into settings (event_name, event_date, location, whatsapp, email, instagram, maps, price)
values ('Waru Turi Run 2026', null, '', '', '', '', '', 0);