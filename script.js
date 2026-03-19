const SUPABASE_URL = 'https://ycmqanjsgvysbmnjtjih.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbXFhbmpzZ3Z5c2Jtbmp0amloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MTc1NDAsImV4cCI6MjA4OTQ5MzU0MH0.FbfsjbHJhj1dh9M8PFEcKy2p2Pa4hzxkS8_v3UXYPd4';

let supabase = null;

const defaultContent = {
  'hero-title-1': 'Yarının',
  'hero-title-2': 'Çığlığı',
  'hero-subtitle':
    'Geleceği bugünden şekillendiriyoruz. Edebiyat, tasarım ve farkındalıkla değişime öncülük ediyoruz.',
  'about-text-1':
    'Yarının Çığlığı; gençlerin sesini duyurmak, toplumsal farkındalık oluşturmak ve yaratıcı üretimi desteklemek amacıyla bir araya gelen gönüllü bir topluluktur.',
  'about-text-2':
    'Edebiyat, sanat ve etkinlikler aracılığıyla geleceğe dair umutlarımızı bugünden dile getiriyoruz. Her üyemiz, bu büyük tabloya kendi rengini katıyor.',
  'stat-1-num': '120+',
  'stat-1-label': 'Üye',
  'stat-2-num': '48',
  'stat-2-label': 'Etkinlik',
  'stat-3-num': '200+',
  'stat-3-label': 'Eser',
  'stat-4-num': '5',
  'stat-4-label': 'Yıl',
  // Takım
  'team-tag': 'Biz Kimiz',
  'team-title': 'Takımımızla Tanışın',
  'team-desc': 'Farklı yetenekler, ortak bir ses. Yarının çığlığını bugünden yükseltiyoruz.',
  'team-1-name': 'Ayşe Yılmaz',
  'team-1-role': 'Proje Koordinatörü',
  'team-1-tag-1': 'Liderlik',
  'team-1-tag-2': 'Strateji',
  'team-2-name': 'Mehmet Kaya',
  'team-2-role': 'Edebiyat Editörü',
  'team-2-tag-1': 'Şiir',
  'team-2-tag-2': 'Hikaye',
  'team-3-name': 'Zeynep Demir',
  'team-3-role': 'Tasarım Uzmanı',
  'team-3-tag-1': 'Grafik',
  'team-3-tag-2': 'UI/UX',
  'team-4-name': 'Emre Arslan',
  'team-4-role': 'Etkinlik Organizatörü',
  'team-4-tag-1': 'Organizasyon',
  'team-4-tag-2': 'İletişim',
  // Proje sunumu
  'project-tag': 'Projemiz',
  'project-title': 'Proje Sunumu',
  'project-desc': 'Misyonumuz, vizyonumuz ve yol haritamız.',
  'project-mission-title': 'Misyon',
  'project-mission-text':
    'Gençlerin yaratıcı seslerini güçlendirerek toplumsal dönüşüme katkı sağlamak.',
  'project-vision-title': 'Vizyon',
  'project-vision-text':
    'Edebiyat ve sanatı bir araç olarak kullanarak daha bilinçli bir nesil yetiştirmek.',
  'project-goals-title': 'Hedefler',
  'project-goals-text':
    'Yıllık etkinlikler, yayınlar ve eğitimlerle gençleri güçlendirmek ve ilham vermek.',
  // Etkinlikler
  'events-tag': 'Etkinlikler',
  'events-title': 'Etkinliklerimiz',
  'events-desc': 'Öğrenin, paylaşın, büyüyün.',
  'event-1-title': 'Ön Test',
  'event-1-text':
    'Katılımcılarımızın mevcut bilgi ve bilinç düzeyini ölçen ön değerlendirme süreci.',
  'event-2-title': 'Seminerler',
  'event-2-text':
    'Uzman konuşmacılar eşliğinde düzenlenen bilgilendirici ve ilham verici seminerler.',
  'event-3-title': 'Panolar',
  'event-3-text':
    'Farklı bakış açılarının paylaşıldığı, tartışmaların yapıldığı interaktif pano etkinlikleri.',
  'event-4-title': 'Geziler',
  'event-4-text': 'Kültürel ve eğitsel mekânlara düzenlenen keşif gezileri.',
  'event-5-title': 'Yarışmalar',
  'event-5-text':
    'Yaratıcılığı ödüllendiren edebiyat, tasarım ve farkındalık yarışmaları.',
  'event-6-title': 'Farkındalık',
  'event-6-text':
    'Toplumsal konularda bilinç oluşturmaya yönelik özel kampanya ve etkinlikler.',
  // Edebiyat
  'literature-tag': 'Edebiyat',
  'literature-title': 'Edebiyat Köşesi',
  'literature-desc': 'Kelimelerle örülen bir dünya, duygularla büyüyen bir ses.',
  'poem-title': 'Şiir',
  'poem-text':
    'Duygularımızı, hayallerimizi ve isyanlarımızı mısralara döküyoruz. Her şiir, yarına bırakılan bir iz.',
  'poem-quote': '"Yarın değil bugün susma,\nÇığlık at geleceğe kadar..."',
  'poem-quote-footer': '— Topluluğumuzdan',
  'story-title': 'Hikaye',
  'story-text':
    'Yaşanmış, yaşanabilecek ya da hayal edilmiş; her hikaye bir pencere, her cümle bir keşif.',
  'story-quote': '"Küçük bir kasabada doğan büyük bir rüya vardı; adı yarındı..."',
  'story-quote-footer': '— Topluluğumuzdan',
  // Tasarım
  'design-tag': 'Tasarım',
  'design-title': 'Tasarım Galerisi',
  'design-desc': 'Görsellerle anlatan, renkleriyle konuşan bir dünya.',
  'design-poster-title': 'Afiş',
  'design-poster-text':
    'Etkinlik ve kampanyalar için tasarlanan etkileyici afişler.',
  'design-logo-title': 'Logo',
  'design-logo-text':
    'Kimliğimizi yansıtan özgün logo tasarımları ve marka görselleri.',
  'design-brochure-title': 'Broşür',
  'design-brochure-text':
    'Projelerimizi ve etkinliklerimizi tanıtan bilgilendirici broşürler.',
  // Mektuplar
  'letters-tag': 'Mektuplar',
  'letters-title': 'Yarından Mektuplar',
  'letters-desc': 'Gelecekten bugüne, umuttan bugüne, senden sana.',
  'letter-1-title': 'Mektup #1',
  'letter-1-meta': "2035'ten",
  'letter-1-line-1': 'Sevgili bugün,',
  'letter-1-line-2':
    'Yıllar sonra geriye baktığımda, o küçük adımların ne kadar büyük değişimlere yol açtığını gördüm. Çevre, barış, adalet... Hepsi için sesini yükselttiğin için teşekkürler.',
  'letter-1-sign': '— Yarındaki sen',
  'letter-2-title': 'Mektup #2',
  'letter-2-meta': "2040'tan",
  'letter-2-line-1': 'Sevgili dünya,',
  'letter-2-line-2':
    'O gençler haklıydı. Değişim mümkündü. Sadece inanmak ve harekete geçmek yeterliydi. Bu çığlık, tohumdu — ve şimdi orman oldu.',
  'letter-2-sign': '— Geleceğin sesi',
  // İletişim
  'contact-tag': 'Projemiz',
  'contact-title': 'İletişim',
  'contact-desc': 'Bize ulaşın, topluluğumuza katılın.',
  'contact-address-value': 'İstanbul, Türkiye',
  'contact-email-value': 'iletisim@yarinincigliği.com',
  'contact-phone-value': '+90 555 000 00 00',
  'contact-social-1': 'Instagram',
  'contact-social-2': 'Twitter',
  'contact-social-3': 'YouTube'
};

let lastLoadedContent = { ...defaultContent };

function normalizeValueForKey(key, value) {
  const str = typeof value === 'string' ? value : String(value ?? '');

  // textarea'daki yeni satırları HTML <br/>'a çevirelim
  if (key === 'poem-quote' || key === 'story-quote') {
    return str.replace(/\r\n/g, '\n').replace(/\n/g, '<br/>');
  }

  return str;
}

function applyContentToPage(content) {
  Object.entries(content).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (!el) return;

    const str = typeof value === 'string' ? value : String(value ?? '');

    if (str.trim() === '') {
      el.style.display = 'none';
      return;
    }

    el.style.display = '';

    if (id === 'poem-quote' || id === 'story-quote') {
      const html = str.replace(/\r\n/g, '\n').replace(/\n/g, '<br/>');
      el.innerHTML = html;
    } else {
      el.textContent = str;
    }
  });
}

function hydrateAdminForm(content) {
  Object.entries(content).forEach(([id, value]) => {
    const field = document.getElementById('field-' + id);
    if (!field) return;
    if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
      field.value = value ?? '';
    }
  });
}

function getAdminFormContentFromInputs() {
  const updated = { ...lastLoadedContent };
  Object.keys(defaultContent).forEach((id) => {
    const field = document.getElementById('field-' + id);
    if (!field) return;
    updated[id] = normalizeValueForKey(id, field.value);
  });
  return updated;
}

async function fetchContentFromSupabase() {
  if (!supabase) throw new Error('Supabase client not initialized');

  const keys = Object.keys(defaultContent);
  const { data, error } = await supabase
    .from('site_kv')
    .select('key,value')
    .in('key', keys);

  if (error) throw error;

  const map = {};
  (data || []).forEach((row) => {
    if (!row || row.key == null) return;
    map[row.key] = row.value;
  });

  return { ...defaultContent, ...map };
}

async function fetchContentFromSupabaseSafe() {
  try {
    return await fetchContentFromSupabase();
  } catch (e) {
    console.warn('Supabase içerik çekilemedi. Varsayılan içerik kullanılıyor.', e);
    return { ...defaultContent };
  }
}

async function upsertContentToSupabase(content) {
  if (!supabase) throw new Error('Supabase client not initialized');

  const rows = Object.entries(content).map(([key, value]) => ({
    key,
    value: String(value ?? '')
  }));

  const { error } = await supabase.from('site_kv').upsert(rows, { onConflict: 'key' });
  if (error) throw error;
}

async function initAdminPage() {
  const overlay = document.getElementById('admin-auth-overlay');
  if (!overlay) return;
  if (!supabase) return;

  const emailInput = document.getElementById('admin-email-input');
  const passwordInput = document.getElementById('admin-password-input');
  const submitBtn = document.getElementById('admin-auth-submit');
  const cancelBtn = document.getElementById('admin-auth-cancel');
  const errorText = document.getElementById('admin-auth-error');

  function showOverlay() {
    overlay.classList.add('visible');
    errorText && (errorText.style.display = 'none');
  }

  function hideOverlay() {
    overlay.classList.remove('visible');
  }

  function setErrorVisible(message) {
    if (!errorText) return;
    errorText.style.display = message ? 'block' : 'none';
    if (message) errorText.textContent = message;
  }

  async function refreshAuthStateAndHydrate() {
    setErrorVisible('');
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;

    if (data?.user) {
      hideOverlay();
      lastLoadedContent = await fetchContentFromSupabaseSafe();
      hydrateAdminForm(lastLoadedContent);
    } else {
      showOverlay();
    }
  }

  submitBtn?.addEventListener('click', async () => {
    setErrorVisible('');

    const email = emailInput?.value?.trim();
    const password = passwordInput?.value?.trim();

    if (!email || !password) {
      setErrorVisible('Lütfen e-posta ve şifre girin.');
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      lastLoadedContent = await fetchContentFromSupabaseSafe();
      hydrateAdminForm(lastLoadedContent);
      hideOverlay();
    } catch (e) {
      console.error(e);
      setErrorVisible('Giriş başarısız. E-posta/şifreyi kontrol edin.');
    }
  });

  cancelBtn?.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  passwordInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitBtn?.click();
  });

  const saveBtn = document.getElementById('btn-save-content');
  const resetBtn = document.getElementById('btn-reset-content');

  saveBtn?.addEventListener('click', async () => {
    try {
      const updated = getAdminFormContentFromInputs();
      await upsertContentToSupabase(updated);
      lastLoadedContent = updated;
      alert('İçerik kaydedildi. Ana sayfayı yenileyerek görebilirsiniz.');
    } catch (e) {
      console.error(e);
      alert(
        'Kaydedilemedi. Supabase’te `site_kv` tablosu ve RLS/policy ayarlarını kontrol edin.'
      );
    }
  });

  resetBtn?.addEventListener('click', async () => {
    if (!confirm('Tüm içerik varsayılana dönecek. Emin misiniz?')) return;
    try {
      await upsertContentToSupabase({ ...defaultContent });
      lastLoadedContent = { ...defaultContent };
      hydrateAdminForm(lastLoadedContent);
      alert('Varsayılan içerik yüklendi.');
    } catch (e) {
      console.error(e);
      alert('Sıfırlama başarısız oldu. RLS/policy veya tablo şeması eksik olabilir.');
    }
  });

  try {
    await refreshAuthStateAndHydrate();
  } catch (e) {
    console.warn('Auth durumu kontrol edilemedi. Giriş penceresi gösteriliyor.', e);
    showOverlay();
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  if (window.supabase && !supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  lastLoadedContent = await fetchContentFromSupabaseSafe();
  applyContentToPage(lastLoadedContent);

  await initAdminPage();
});

