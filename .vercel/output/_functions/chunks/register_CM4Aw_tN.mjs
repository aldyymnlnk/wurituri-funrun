import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as defineScriptVars, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_D6Rm-QtC.mjs";
import { t as createComponent } from "./compiler_Db9x-0at.mjs";
import { t as $$MainLayout } from "./MainLayout_-FUFbl6c.mjs";
//#region src/pages/register.astro
var register_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Register,
	file: () => $$file,
	url: () => $$url
});
var $$Register = createComponent(($$result, $$props, $$slots) => {
	const categories = {
		"5K": {
			title: "5K Fun Run",
			price: 169e3,
			image: "/images/5k.jpg"
		},
		"10K": {
			title: "10K Challenge",
			price: 199e3,
			image: "/images/10k.jpg"
		}
	};
	const included = [
		"Race Jersey",
		"Finisher Medal",
		"BIB Number",
		"Goodie Bag",
		"Water Station"
	];
	const banks = [
		{
			code: "BRI",
			name: "Bank BRI",
			number: "123456789012345",
			holder: "Panitia Waru Turi Fun Run"
		},
		{
			code: "BCA",
			name: "Bank BCA",
			number: "9876543210",
			holder: "Panitia Waru Turi Fun Run"
		},
		{
			code: "MANDIRI",
			name: "Bank Mandiri",
			number: "1300009998887",
			holder: "Panitia Waru Turi Fun Run"
		}
	];
	return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {
		"title": "Register - Waru Turi Fun Run 2026",
		"data-astro-cid-fvopxden": true
	}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section class="register-page" data-astro-cid-fvopxden><div class="container" data-astro-cid-fvopxden><div class="register-header" data-astro-cid-fvopxden><span class="eyebrow" data-astro-cid-fvopxden>Waru Turi Fun Run 2026</span><h1 data-astro-cid-fvopxden>Registrasi Peserta</h1><p data-astro-cid-fvopxden>Lengkapi data di bawah ini untuk mengikuti Waru Turi Fun Run 2026.</p></div><div class="register-grid" data-astro-cid-fvopxden><!-- FORM --><div class="register-form" data-astro-cid-fvopxden><form id="registerForm" novalidate data-astro-cid-fvopxden><h2 data-astro-cid-fvopxden><span class="step-num" data-astro-cid-fvopxden>01</span> Data Peserta</h2><div class="form-row" data-astro-cid-fvopxden><div class="form-group" data-astro-cid-fvopxden><label for="fullname" data-astro-cid-fvopxden>Nama Lengkap</label><input id="fullname" name="fullname" type="text" placeholder="Masukkan nama lengkap" autocomplete="name" required data-astro-cid-fvopxden></div><div class="form-group" data-astro-cid-fvopxden><label for="email" data-astro-cid-fvopxden>Email</label><input id="email" name="email" type="email" placeholder="email@gmail.com" autocomplete="email" required data-astro-cid-fvopxden></div></div><div class="form-row" data-astro-cid-fvopxden><div class="form-group" data-astro-cid-fvopxden><label for="phone" data-astro-cid-fvopxden>Nomor WhatsApp</label><input id="phone" name="phone" type="tel" placeholder="08xxxxxxxxxx" pattern="[0-9]{9,15}" autocomplete="tel" required data-astro-cid-fvopxden></div><div class="form-group" data-astro-cid-fvopxden><label for="birth_date" data-astro-cid-fvopxden>Tanggal Lahir</label><input id="birth_date" name="birth_date" type="date" required data-astro-cid-fvopxden></div></div><div class="form-row" data-astro-cid-fvopxden><div class="form-group" data-astro-cid-fvopxden><label for="gender" data-astro-cid-fvopxden>Jenis Kelamin</label><select id="gender" name="gender" required data-astro-cid-fvopxden><option value="" disabled selected data-astro-cid-fvopxden>Pilih jenis kelamin</option><option value="Laki-laki" data-astro-cid-fvopxden>Laki-laki</option><option value="Perempuan" data-astro-cid-fvopxden>Perempuan</option></select></div><div class="form-group" data-astro-cid-fvopxden><label for="blood_type" data-astro-cid-fvopxden>Golongan Darah</label><select id="blood_type" name="blood_type" required data-astro-cid-fvopxden><option value="" disabled selected data-astro-cid-fvopxden>Pilih golongan darah</option><option value="A" data-astro-cid-fvopxden>A</option><option value="B" data-astro-cid-fvopxden>B</option><option value="AB" data-astro-cid-fvopxden>AB</option><option value="O" data-astro-cid-fvopxden>O</option></select></div></div><div class="form-row" data-astro-cid-fvopxden><div class="form-group" data-astro-cid-fvopxden><label for="category" data-astro-cid-fvopxden>Kategori</label><select id="category" name="category" required data-astro-cid-fvopxden><option value="5K" data-astro-cid-fvopxden>5K Fun Run</option><option value="10K" data-astro-cid-fvopxden>10K Challenge</option></select></div><div class="form-group" data-astro-cid-fvopxden><label for="jersey_size" data-astro-cid-fvopxden>Ukuran Jersey</label><select id="jersey_size" name="jersey_size" required data-astro-cid-fvopxden><option value="S" data-astro-cid-fvopxden>S</option><option value="M" data-astro-cid-fvopxden>M</option><option value="L" data-astro-cid-fvopxden>L</option><option value="XL" data-astro-cid-fvopxden>XL</option><option value="XXL" data-astro-cid-fvopxden>XXL</option></select></div></div><h2 data-astro-cid-fvopxden><span class="step-num" data-astro-cid-fvopxden>02</span> Kontak Darurat</h2><div class="form-row" data-astro-cid-fvopxden><div class="form-group" data-astro-cid-fvopxden><label for="emergencyName" data-astro-cid-fvopxden>Nama</label><input id="emergencyName" name="emergencyName" type="text" placeholder="Nama kontak darurat" required data-astro-cid-fvopxden></div><div class="form-group" data-astro-cid-fvopxden><label for="emergencyPhone" data-astro-cid-fvopxden>No HP</label><input id="emergencyPhone" name="emergencyPhone" type="tel" placeholder="08xxxxxxxxxx" pattern="[0-9]{9,15}" required data-astro-cid-fvopxden></div></div><div class="form-group" data-astro-cid-fvopxden><label for="relationship" data-astro-cid-fvopxden>Hubungan</label><input id="relationship" name="relationship" type="text" placeholder="Contoh : Orang Tua" required data-astro-cid-fvopxden></div><h2 data-astro-cid-fvopxden><span class="step-num" data-astro-cid-fvopxden>03</span> Pembayaran</h2><div class="bank-options" id="bankOptions" data-astro-cid-fvopxden>${banks.map((bank, i) => renderTemplate`<div${addAttribute(`bank-option ${i === 0 ? "active" : ""}`, "class")}${addAttribute(bank.code, "data-bank")}${addAttribute(bank.number, "data-number")}${addAttribute(bank.holder, "data-holder")} role="button" tabindex="0" data-astro-cid-fvopxden><span class="bank-name" data-astro-cid-fvopxden>${bank.name}</span><span class="bank-check" aria-hidden="true" data-astro-cid-fvopxden></span></div>`)}</div><div class="rekening-box" data-astro-cid-fvopxden><div class="rekening-info" data-astro-cid-fvopxden><span class="rekening-label" data-astro-cid-fvopxden>Nomor Rekening</span><span class="rekening-number" id="rekeningNumber" data-astro-cid-fvopxden>${banks[0].number}</span><span class="rekening-holder" id="rekeningHolder" data-astro-cid-fvopxden>a.n. ${banks[0].holder}</span></div><button type="button" class="copy-btn" id="copyRekening" data-astro-cid-fvopxden>Salin</button></div><label class="checkbox" for="agreement" data-astro-cid-fvopxden><input id="agreement" name="agreement" type="checkbox" data-astro-cid-fvopxden><span data-astro-cid-fvopxden>Saya menyetujui syarat dan ketentuan yang berlaku.</span></label><button class="submit-btn" id="submitBtn" type="submit" data-astro-cid-fvopxden><span class="btn-label" data-astro-cid-fvopxden>Daftar Sekarang</span></button><p class="form-status" id="formStatus" role="status" data-astro-cid-fvopxden></p></form></div><!-- SIDEBAR --><div class="register-sidebar" data-astro-cid-fvopxden><div class="summary-card" data-astro-cid-fvopxden><span class="eyebrow eyebrow-dark" data-astro-cid-fvopxden>Ringkasan</span><img id="categoryImage"${addAttribute(categories["5K"].image, "src")}${addAttribute(categories["5K"].title, "alt")} data-astro-cid-fvopxden><h3 id="categoryTitle" data-astro-cid-fvopxden>${categories["5K"].title}</h3><p class="price" id="categoryPrice" data-astro-cid-fvopxden>Rp${categories["5K"].price.toLocaleString("id-ID")}</p><ul class="include-list" data-astro-cid-fvopxden>${included.map((item) => renderTemplate`<li data-astro-cid-fvopxden>✔ ${item}</li>`)}</ul><button type="button" class="wa-btn" id="whatsappButton" data-astro-cid-fvopxden>Bayar Setelah Daftar</button><p class="sidebar-note" data-astro-cid-fvopxden>Bukti transfer dikirim via WhatsApp setelah kamu menekan "Daftar Sekarang" dan menyelesaikan pembayaran.</p></div></div></div></div></section>` })}<script>(function(){${defineScriptVars({
		categories,
		banks
	})}
  console.log("Register Script Loaded");

  // ===============================
  // ELEMENTS
  // ===============================
  const form = document.getElementById("registerForm");
  const submitBtn = document.getElementById("submitBtn");
  const formStatus = document.getElementById("formStatus");

  const category = document.getElementById("category");
  const image = document.getElementById("categoryImage");
  const title = document.getElementById("categoryTitle");
  const price = document.getElementById("categoryPrice");

  const bankOptions = document.querySelectorAll(".bank-option");
  const rekeningNumber = document.getElementById("rekeningNumber");
  const rekeningHolder = document.getElementById("rekeningHolder");
  const copyButton = document.getElementById("copyRekening");
  const whatsappButton = document.getElementById("whatsappButton");
  const agreement = document.getElementById("agreement");

  // ===============================
  // DEFAULT STATE
  // ===============================
  let selectedBank = banks[0].code;
  let rekening = banks[0].number;
  let rekeningOwner = banks[0].holder;
  let harga = categories["5K"].price;

  // ===============================
  // UPDATE KATEGORI
  // ===============================
  function updateCategory() {
    if (!category) return;
    const info = categories[category.value] || categories["5K"];
    image.src = info.image;
    image.alt = info.title;
    title.textContent = info.title;
    price.textContent = "Rp" + info.price.toLocaleString("id-ID");
    harga = info.price;
  }

  if (category) {
    category.addEventListener("change", updateCategory);
    updateCategory();
  }

  // ===============================
  // PILIH BANK
  // ===============================
  function selectBank(item) {
    bankOptions.forEach((b) => b.classList.remove("active"));
    item.classList.add("active");

    selectedBank = item.dataset.bank;
    rekening = item.dataset.number;
    rekeningOwner = item.dataset.holder;

    rekeningNumber.textContent = rekening;
    rekeningHolder.textContent = "a.n. " + rekeningOwner;
  }

  bankOptions.forEach((item) => {
    item.addEventListener("click", () => selectBank(item));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectBank(item);
      }
    });
  });

  // ===============================
  // COPY REKENING
  // ===============================
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(rekening);
    setStatus("Nomor rekening berhasil disalin.", "success");
  });

  // ===============================
  // WA MANUAL
  // ===============================
  whatsappButton.addEventListener("click", (e) => {
    e.preventDefault();
    setStatus("Silakan klik 'Daftar Sekarang' terlebih dahulu.", "error");
  });

  // ===============================
  // HELPERS
  // ===============================
  function setStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = "form-status" + (type ? " " + type : "");
  }

  // ===============================
  // SUBMIT FORM
  // ===============================
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!agreement.checked) {
      setStatus("Silakan menyetujui syarat dan ketentuan.", "error");
      return;
    }

    const data = {
      fullname: document.getElementById("fullname").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      birth_date: document.getElementById("birth_date").value,
      gender: document.getElementById("gender").value,
      category: category.value,
      jersey_size: document.getElementById("jersey_size").value,
      blood_type: document.getElementById("blood_type").value,
      emergency_name: document.getElementById("emergencyName").value.trim(),
      emergency_phone: document.getElementById("emergencyPhone").value.trim(),
      emergency_relation: document.getElementById("relationship").value.trim(),
      payment_method: selectedBank,
      price: harga,
    };

    submitBtn.disabled = true;
    submitBtn.querySelector(".btn-label").textContent = "Memproses...";
    setStatus("Mengirim data pendaftaran...", "");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!result.success) {
        console.error(result.message);
        setStatus("Pendaftaran gagal: " + result.message, "error");
        submitBtn.disabled = false;
        submitBtn.querySelector(".btn-label").textContent = "Daftar Sekarang";
        return;
      }

      setStatus("Pendaftaran berhasil! Mengarahkan ke WhatsApp...", "success");

      const wave = "\\u{1F44B}";
      const divider = "\\u2500".repeat(18);

      const message = [
        \`Halo Admin Waru Turi Fun Run \${wave}\`,
        "",
        "Saya telah melakukan pendaftaran.",
        "",
        divider,
        \`Nama : \${data.fullname}\`,
        \`Kategori : \${categories[data.category].title}\`,
        \`Nomor HP : \${data.phone}\`,
        \`Bank : \${selectedBank}\`,
        \`Nominal : Rp\${harga.toLocaleString("id-ID")}\`,
        \`Kode Peserta : \${result.participantCode}\`,
        divider,
        "",
        "Berikut saya lampirkan bukti transfer.",
        "Terima kasih.",
      ].join("\\n");

      window.open(
        "https://wa.me/6282113866887?text=" + encodeURIComponent(message),
        "_blank"
      );

      form.reset();
      updateCategory();
      selectBank(document.querySelector(".bank-option"));
    } catch (err) {
      console.error(err);
      setStatus("Terjadi kesalahan server. Coba lagi.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector(".btn-label").textContent = "Daftar Sekarang";
    }
  });
})();<\/script>`;
}, "C:/Users/ACER/waruturi-funrun/src/pages/register.astro", void 0);
var $$file = "C:/Users/ACER/waruturi-funrun/src/pages/register.astro";
var $$url = "/register";
//#endregion
//#region \0virtual:astro:page:src/pages/register@_@astro
var page = () => register_exports;
//#endregion
export { page };
