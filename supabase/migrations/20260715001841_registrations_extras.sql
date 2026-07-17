-- Migration: registrations_extras
-- SQL tambahan untuk melengkapi tabel registrations

-- ============================================================
-- 1. Cegah satu email daftar dua kali di kategori yang sama
-- ============================================================
create unique index if not exists registrations_email_category_unique
  on registrations (lower(email), category);

-- ============================================================
-- 2. Kolom & trigger updated_at (otomatis terisi tiap ada update)
-- ============================================================
alter table registrations
  add column if not exists updated_at timestamptz default now();

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_registrations_updated_at on registrations;

create trigger trg_registrations_updated_at
  before update on registrations
  for each row
  execute function set_updated_at();

-- ============================================================
-- 3. Policy untuk admin (user yang sudah login) bisa lihat & update data
--    Dipakai kalau kamu bikin halaman admin/dashboard yang butuh login dulu
-- ============================================================
create policy "Allow authenticated read on registrations"
  on registrations
  for select
  to authenticated
  using (true);

create policy "Allow authenticated update on registrations"
  on registrations
  for update
  to authenticated
  using (true)
  with check (true);

-- ============================================================
-- 4. View ringkasan cepat: total peserta & pemasukan per kategori
--    Berguna buat panel admin tanpa perlu query manual tiap kali
-- ============================================================
create or replace view registrations_summary as
select
  category,
  payment_status,
  count(*) as total_peserta,
  sum(price) as total_nominal
from registrations
group by category, payment_status
order by category, payment_status;
