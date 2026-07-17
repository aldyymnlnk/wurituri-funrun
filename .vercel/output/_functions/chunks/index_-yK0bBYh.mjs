import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { t as supabase } from "./supabase_9w9KLbe1.mjs";
import { t as $$MainLayout } from "./MainLayout_-FUFbl6c.mjs";
//#region src/components/Navbar.astro
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="navbar"><div class="container navbar-container"><a href="#home" class="logo"><img src="/images/logo_waruturi.png" alt="Logo Waru Turi" class="logo-image"><div class="logo-text"><h2>Waru Turi</h2><span>Fun Run 2026</span></div></a><nav class="nav-menu"><a href="#home">Home</a><a href="#countdown">Countdown</a><a href="#category">Kategori</a><a href="#gallery">Gallery</a><a href="#faq">FAQ</a></nav><a href="#category" class="btn-register">Daftar Sekarang</a></div></header>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Hero.astro
var $$Hero = createComponent(async ($$result, $$props, $$slots) => {
	const { data: settings } = await supabase.from("settings").select("*").single();
	const eventName = settings?.event_name || "Waru Turi Fun Run";
	const eventDate = settings?.event_date ? new Date(settings.event_date).toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric"
	}) : "Tanggal menyusul";
	const eventLocation = settings?.location || "Bendung Waru Turi, Kediri";
	return renderTemplate`${maybeRenderHead($$result)}<section class="hero" id="home"><div class="hero-overlay"></div><div class="container"><div class="hero-content"><span class="hero-badge">🏃 Event Lari ${eventName}</span><h1>Waru Turi<span>Fun Run</span></h1><p>Rasakan pengalaman berlari di ${eventLocation}</p><p>bersama ribuan pelari dari seluruh Indonesia.</p><div class="hero-button-group"><a href="#category" class="btn-primary">Daftar Sekarang</a><a href="#gallery" class="btn-secondary">Lihat Gallery</a></div><div class="hero-info"><div class="info-box"><h3>📅</h3><span>${eventDate}</span></div><div class="info-box"><h3>📍</h3><span>${eventLocation}</span></div><div class="info-box"><h3>🏅</h3><span>5K & 10K</span></div></div></div></div></section>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/Countdown.astro
var $$Countdown = createComponent(async ($$result, $$props, $$slots) => {
	const { data: settings } = await supabase.from("settings").select("*").single();
	const eventName = settings?.event_name || "Waru Turi Fun Run";
	const eventDateRaw = settings?.event_date || null;
	const eventDateDisplay = eventDateRaw ? new Date(eventDateRaw).toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric"
	}) : "Tanggal menyusul";
	return renderTemplate`${maybeRenderHead($$result)}<section class="countdown" id="countdown"><div class="container"><div class="section-title"><span class="section-badge">⏳ Event Countdown</span><h2>Menuju ${eventName}</h2><p>Hitung mundur menuju event lari terbesar di Kediri.</p></div><div class="countdown-wrapper"${addAttribute(eventDateRaw, "data-target")}><div class="count-box"><h3 id="days">00</h3><span>Hari</span></div><div class="count-box"><h3 id="hours">00</h3><span>Jam</span></div><div class="count-box"><h3 id="minutes">00</h3><span>Menit</span></div><div class="count-box"><h3 id="seconds">00</h3><span>Detik</span></div></div><div class="event-date">📅 Event akan dilaksanakan pada<strong> ${eventDateDisplay}</strong></div></div></section><script>
    const wrapper = document.querySelector(".countdown-wrapper");
    const targetDateStr = wrapper?.dataset.target;

    if (targetDateStr) {

        const targetDate = new Date(targetDateStr).getTime();

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        function updateCountdown() {

            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                daysEl.textContent = "00";
                hoursEl.textContent = "00";
                minutesEl.textContent = "00";
                secondsEl.textContent = "00";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.textContent = String(days).padStart(2, "0");
            hoursEl.textContent = String(hours).padStart(2, "0");
            minutesEl.textContent = String(minutes).padStart(2, "0");
            secondsEl.textContent = String(seconds).padStart(2, "0");
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
<\/script>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/Countdown.astro", void 0);
//#endregion
//#region src/components/Category.astro
var $$Category = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="category" id="category"><div class="container"><div class="section-title"><span class="section-badge">🏃 Race Category</span><h2>Pilih Kategori Event</h2><p>Pilih kategori sesuai kemampuanmu dan nikmati pengalaman terbaik di Waru Turi Fun Run.</p></div><div class="category-grid">${[{
		id: 1,
		title: "5K",
		subtitle: "Fun Run",
		image: "/images/5k.jpg",
		price: "Rp169.000",
		benefits: [
			"Medali Finisher",
			"Jersey",
			"BIB Number",
			"Goodie Bag"
		],
		route: {
			title: "Rute 5K (Fun Run)",
			description: "Plan Route : Start (Lap. Bendungan Waru Turi)- Kantor Jasa Tirta - Jembatan Utama -Ujung Jembatan Utama ke Kanan - Jembatan Kedua ke Kiri - Patung Badak ke Kanan - Pintu Gerbang Waduk Sisi Barat ke Kiri – Simpang Tiga Jabon Gg 8 ke Kanan – Simpang Tiga 2 Jabon Gg 8 ke Kanan - Pintu Gerbang Waduk Sisi Barat – Jembatan Utama ke Kanan – Kantor Jasa Tirta - Finish",
			start: "Bendung Gerak Waru Turi",
			finish: "Bendung Gerak Waru Turi",
			cot: "1 Jam 30 Menit",
			water: "KM 2.5"
		}
	}, {
		id: 2,
		title: "10K",
		subtitle: "Challenge",
		image: "/images/10k.jpg",
		price: "Rp199.000",
		benefits: [
			"Medali Finisher",
			"Jersey",
			"BIB Number",
			"Goodie Bag"
		],
		route: {
			title: "Rute 10K (Challenge)",
			description: "Plan Route : Start (Lap. Bendungan Waru Turi)- Kantor Jasa Tirta -Jembatan Utama -Ujung Jembatan Utama ke Kanan - Jembatan Kedua ke Kiri - Patung Badak ke Kanan - Pintu Gerbang Waduk Sisi Barat Lurus - Perempatan Dusun Tanjung - Simpang Empat Desa Ngablak ke Kiri – Simpang Empat Kelurahan Dermo ke Kiri - Simpang Empat Jl. Merbabu Lurus – Jabon Gg 4 – Jabon Gg 5 - Simpang Tiga Jabon Gg 9 ke Kiri - Pintu Gerbang Waduk - Patung Badak ke Ke Kiri - Jembatan Kedua ke Kanan -Jembatan Utama - Area Food Court ke Kanan - Jembatan Kecil ke Kanan – Finish",
			start: "Bendung Gerak Waru Turi",
			finish: "Bendung Gerak Waru Turi",
			cot: "2 Jam",
			water: "KM 2.5 • KM 5 • KM 7.5"
		}
	}].map((category) => renderTemplate`<div class="category-card"><div class="image-wrapper"><img${addAttribute(category.image, "src")}${addAttribute(category.title, "alt")} class="category-image"></div><div class="card-body"><div class="header"><div><h2>${category.title}</h2><span class="subtitle">${category.subtitle}</span></div><span class="price">${category.price}</span></div><div class="benefit">${category.benefits.map((item) => renderTemplate`<div class="benefit-item"><span>✔</span><p>${item}</p></div>`)}</div><div class="route"><h3>${category.route.title}</h3><p>${category.route.description}</p></div><div class="info"><div class="info-box"><strong>📍 Start</strong><span>${category.route.start}</span></div><div class="info-box"><strong>🏁 Finish</strong><span>${category.route.finish}</span></div><div class="info-box"><strong>⏱ COT</strong><span>${category.route.cot}</span></div><div class="info-box"><strong>💧 Water Station</strong><span>${category.route.water}</span></div></div><a href="/register" class="register-button">Daftar Sekarang</a></div></div>`)}</div></div></section>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/Category.astro", void 0);
//#endregion
//#region src/components/gallery.astro
var $$Gallery = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="gallery" id="gallery"><div class="container"><div class="section-title"><span class="section-badge">📸 Gallery</span><h2>Dokumentasi Event</h2><p>Momen terbaik Waru Turi Fun Run yang penuh semangat dan kebersamaan.</p></div><div class="gallery-grid">${[
		{
			image: "/images/gallery1.jpeg",
			title: "lokasi"
		},
		{
			image: "/images/gallery2.jpeg",
			title: "Start Event"
		},
		{
			image: "/images/gallery3.jpeg",
			title: "lokasi"
		},
		{
			image: "/images/gallery4.jpeg",
			title: "Peserta event"
		}
	].map((gallery) => renderTemplate`<div class="gallery-item"><img${addAttribute(gallery.image, "src")}${addAttribute(gallery.title, "alt")}><div class="gallery-overlay"><h3>${gallery.title}</h3></div></div>`)}</div><div class="gallery-button"><a href="#">Lihat Semua Foto</a></div></div></section>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/gallery.astro", void 0);
//#endregion
//#region src/components/FAQ.astro
var $$FAQ = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="faq" id="faq"><div class="container"><div class="section-title"><span class="section-badge">❓ FAQ</span><h2>Pertanyaan yang Sering Ditanyakan</h2><p>Temukan jawaban dari pertanyaan yang paling sering diajukan peserta.</p></div><div class="faq-list">${[
		{
			question: "Bagaimana cara mendaftar Waru Turi Fun Run?",
			answer: "Pilih kategori lomba, klik tombol Daftar Sekarang, isi data diri, kemudian lakukan pembayaran melalui link yang dikirim melalui WhatsApp."
		},
		{
			question: "Bagaimana metode pembayarannya?",
			answer: "Setelah mengirim data pendaftaran melalui WhatsApp, admin akan mengirimkan link pembayaran. Setelah pembayaran berhasil, peserta akan memperoleh konfirmasi."
		},
		{
			question: "Apa saja yang didapatkan peserta?",
			answer: "Setiap peserta memperoleh Race Pack berupa Jersey, BIB Number, Medali Finisher, Goodie Bag serta fasilitas Water Station sesuai kategori."
		},
		{
			question: "Apakah peserta mendapatkan medali?",
			answer: "Ya. Semua peserta yang berhasil menyelesaikan lomba sesuai Cut Off Time (COT) akan mendapatkan Medali Finisher."
		},
		{
			question: "Kapan Race Pack Collection?",
			answer: "Informasi Race Pack Collection akan diumumkan melalui WhatsApp dan Instagram resmi Waru Turi Fun Run."
		},
		{
			question: "Apakah pendaftaran bisa dibatalkan?",
			answer: "Pendaftaran yang sudah melakukan pembayaran tidak dapat dibatalkan maupun dikembalikan dananya."
		}
	].map((faq) => renderTemplate`<details class="faq-item"><summary>${faq.question}</summary><p>${faq.answer}</p></details>`)}</div></div></section>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/FAQ.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(async ($$result, $$props, $$slots) => {
	const { data: settings } = await supabase.from("settings").select("*").single();
	const eventName = settings?.event_name || "Waru Turi Fun Run";
	const location = settings?.location || "Bendung Gerak Waru Turi, Banyuwangi, Jawa Timur";
	const whatsapp = settings?.whatsapp || "";
	const email = settings?.email || "officialwaruturirun@gmail.com";
	const instagram = settings?.instagram || "#";
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer"><div class="container footer-content"><!-- Kolom 1 --><div class="footer-column"><h3>${eventName}</h3><p>${location}</p>${whatsapp && renderTemplate`<p>📞 ${whatsapp}</p>`}<p>✉ ${email}</p></div><!-- Kolom 2 --><div class="footer-column"><h3>Partner & Sponsor</h3><ul><li>Perum Jasa Tirta I (PJT I)</li><li>Radar Banyuwangi</li><li>Bendung Gerak Waru Turi</li><li>R-Project Event Organizer</li></ul></div><!-- Kolom 3 --><div class="footer-column"><h3>Menu Utama</h3><ul><li><a href="#home">Beranda</a></li><li><a href="#category">Kategori</a></li><li><a href="#gallery">Galeri</a></li><li><a href="#faq">FAQ</a></li></ul></div><!-- Kolom 4 --><div class="footer-column"><h3>Ikuti Kami</h3><div class="social-icons"><a${addAttribute(instagram, "href")} target="_blank" rel="noopener noreferrer"><img src="/images/instagram.png" alt="Instagram"></a><a href="#"><img src="/images/facebook.png" alt="Facebook"></a></div></div></div><div class="footer-bottom">Copyright © ${currentYear} ${eventName}. All rights reserved.</div></footer>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/Stats.astro
var $$Stats = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="stats"><div class="container"><div class="section-title"><span class="section-badge">📊 Event Statistics</span><h2>Waru Turi Fun Run 2026</h2><p>Bersama ribuan pelari menikmati pengalaman terbaik di Bendung Gerak Waru Turi.</p></div><div class="stats-grid"><div class="stat-card"><div class="stat-icon">🏃</div><h3>2.000+</h3><p>Peserta</p></div><div class="stat-card"><div class="stat-icon">🛣️</div><h3>2</h3><p>Kategori Lari</p></div><div class="stat-card"><div class="stat-icon">🏅</div><h3>100%</h3><p>Finisher Medal</p></div><div class="stat-card"><div class="stat-icon">📍</div><h3>Kediri</h3><p>Lokasi Event</p></div></div></div></section>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/Stats.astro", void 0);
//#endregion
//#region src/components/Timeline.astro
var $$Timeline = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="timeline" id="timeline"><div class="container"><div class="section-title"><span class="section-badge">📅 Event Timeline</span><h2>Jadwal Kegiatan</h2><p>Jangan sampai melewatkan setiap tahapan Waru Turi Fun Run 2026.</p></div><div class="timeline-wrapper">${[
		{
			date: "01 Januari 2026",
			title: "Pendaftaran Dibuka",
			description: "Peserta mulai melakukan registrasi melalui website Waru Turi Fun Run."
		},
		{
			date: "31 Maret 2026",
			title: "Pendaftaran Ditutup",
			description: "Pendaftaran akan ditutup apabila kuota telah terpenuhi."
		},
		{
			date: "05 April 2026",
			title: "Race Pack Collection",
			description: "Pengambilan Race Pack, Jersey, BIB Number dan Goodie Bag."
		},
		{
			date: "12 April 2026",
			title: "Race Day",
			description: "Pelaksanaan Waru Turi Fun Run 2026 dimulai pukul 05.30 WIB."
		},
		{
			date: "12 April 2026",
			title: "Awarding",
			description: "Pembagian medali finisher dan penghargaan kepada peserta."
		}
	].map((item) => renderTemplate`<div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><span class="timeline-date">${item.date}</span><h3>${item.title}</h3><p>${item.description}</p></div></div>`)}</div></div></section>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/Timeline.astro", void 0);
//#endregion
//#region src/components/Sponsor.astro
var $$Sponsor = createComponent(($$result, $$props, $$slots) => {
	const sponsors = [
		{
			id: 1,
			image: "/images/sponsor1.png",
			name: "Sponsor 1"
		},
		{
			id: 2,
			image: "/images/sponsor2.png",
			name: "Sponsor 2"
		},
		{
			id: 3,
			image: "/images/sponsor3.png",
			name: "Sponsor 3"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="sponsor" id="sponsor"><div class="container"><div class="section-title"><span class="section-badge">🤝 Our Sponsor</span><h2>Didukung Oleh</h2><p>Terima kasih kepada seluruh sponsor yang telah mendukung terselenggaranya Waru Turi Fun Run 2026.</p></div><div class="sponsor-slider"><div class="sponsor-track">${[...sponsors, ...sponsors].map((sponsor) => renderTemplate`<div class="sponsor-item"><img${addAttribute(sponsor.image, "src")}${addAttribute(sponsor.name, "alt")}></div>`)}</div></div></div></section>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/Sponsor.astro", void 0);
//#endregion
//#region src/components/Benefit.astro
var $$Benefit = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="benefit-section" id="benefit"><div class="container"><div class="section-title"><span class="section-badge">🎁 Race Benefits</span><h2>Apa Yang Akan Kamu Dapatkan?</h2><p>Semua peserta akan memperoleh berbagai fasilitas terbaik selama mengikuti Waru Turi Fun Run 2026.</p></div><div class="benefit-grid">${[
		{
			icon: "🏅",
			title: "Finisher Medal",
			description: "Seluruh peserta yang berhasil menyelesaikan lomba akan memperoleh medali finisher eksklusif."
		},
		{
			icon: "👕",
			title: "Race Jersey",
			description: "Jersey official berkualitas premium yang nyaman digunakan saat race."
		},
		{
			icon: "🎽",
			title: "BIB Number",
			description: "Nomor peserta resmi lengkap dengan timing race."
		},
		{
			icon: "🎁",
			title: "Goodie Bag",
			description: "Berisi berbagai produk dari sponsor dan merchandise event."
		},
		{
			icon: "💧",
			title: "Water Station",
			description: "Tersedia beberapa titik water station selama rute berlangsung."
		},
		{
			icon: "📸",
			title: "Race Documentation",
			description: "Dokumentasi foto selama event yang dapat diakses peserta."
		}
	].map((item) => renderTemplate`<div class="benefit-card"><div class="benefit-icon">${item.icon}</div><h3>${item.title}</h3><p>${item.description}</p></div>`)}</div></div></section>`;
}, "C:/Users/ACER/waruturi-funrun/src/components/Benefit.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Waru Turi Fun Run 2026" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}${maybeRenderHead($$result)}<main>${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Countdown", $$Countdown, {})}${renderComponent($$result, "Stats", $$Stats, {})}${renderComponent($$result, "Timeline", $$Timeline, {})}${renderComponent($$result, "Benefit", $$Benefit, {})}${renderComponent($$result, "Category", $$Category, {})}${renderComponent($$result, "Sponsor", $$Sponsor, {})}${renderComponent($$result, "Gallery", $$Gallery, {})}${renderComponent($$result, "FAQ", $$FAQ, {})}${renderComponent($$result, "Footer", $$Footer, {})}</main>` })}`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/index.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
