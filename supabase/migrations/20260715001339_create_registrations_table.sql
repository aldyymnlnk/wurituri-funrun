-- Migration: create_registrations_table
-- Tabel ini menampung data pendaftaran dari form di register.astro

create table if not exists registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),

  -- kode unik peserta, dibuat otomatis oleh script register.astro
  participant_code text unique not null,

  -- data peserta
  fullname text not null,
  email text not null,
  phone text not null,
  birth_date date not null,
  gender text not null,
  category text not null,
  jersey_size text not null,
  blood_type text not null,

  -- kontak darurat
  emergency_name text not null,
  emergency_phone text not null,
  emergency_relation text not null,

  -- pembayaran
  payment_method text not null,
  price integer not null,
  payment_status text not null default 'pending'
);

-- Aktifkan Row Level Security (wajib di Supabase, defaultnya semua akses ditolak)
alter table registrations enable row level security;

-- Izinkan siapa saja (pengunjung yang belum login / anon key) untuk INSERT data pendaftaran
-- Ini dibutuhkan karena form register.astro insert langsung dari browser pakai anon key
create policy "Allow public insert on registrations"
  on registrations
  for insert
  to anon
  with check (true);

-- CATATAN:
-- Tidak ada policy SELECT/UPDATE/DELETE untuk anon di sini,
-- jadi data peserta tidak bisa dibaca ulang atau diubah dari browser publik.
-- Untuk melihat/mengelola data pendaftaran, gunakan dashboard Supabase (Table Editor)
-- atau buat policy tambahan khusus untuk role admin/authenticated jika diperlukan nanti.
