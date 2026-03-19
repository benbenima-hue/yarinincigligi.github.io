const YCMS_STORAGE_KEY = 'ycmsContent';
const YCMS_ADMIN_AUTH_KEY = 'ycmsAdminAuthed';
const YCMS_ADMIN_PASSWORD = 'yarin2024'; // İsterseniz daha sonra değiştirebilirsiniz

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

function getStoredContent() {
  try {
    const raw = localStorage.getItem(YCMS_STORAGE_KEY);
    if (!raw) return { ...defaultContent };
    const parsed = JSON.parse(raw);
    return { ...defaultContent, ...parsed };
  } catch {
    return { ...defaultContent };
  }
}

function saveContentToStorage(data) {
  localStorage.setItem(YCMS_STORAGE_KEY, JSON.stringify(data));
}

function applyContentToPage() {
  const content = getStoredContent();
  Object.entries(content).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (typeof value === 'string' && value.trim() === '') {
      el.style.display = 'none';
      return;
    }
    el.style.display = '';
    el.textContent = value;
  });
}

function hydrateAdminForm() {
  const content = getStoredContent();
  Object.entries(content).forEach(([id, value]) => {
    const field = document.getElementById('field-' + id);
    if (!field) return;
    if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
      field.value = value;
    }
  });
}

function initAdminPage() {
  const overlay = document.getElementById('admin-auth-overlay');
  if (!overlay) return;

  function showOverlay() {
    overlay.classList.add('visible');
  }

  function hideOverlay() {
    overlay.classList.remove('visible');
  }

  function isAuthed() {
    return sessionStorage.getItem(YCMS_ADMIN_AUTH_KEY) === '1';
  }

  function handleAuth() {
    if (isAuthed()) {
      hideOverlay();
      hydrateAdminForm();
      return;
    }
    showOverlay();
  }

  const input = document.getElementById('admin-password-input');
  const submitBtn = document.getElementById('admin-auth-submit');
  const cancelBtn = document.getElementById('admin-auth-cancel');
  const errorText = document.getElementById('admin-auth-error');

  submitBtn?.addEventListener('click', () => {
    const value = input.value.trim();
    if (value === YCMS_ADMIN_PASSWORD) {
      sessionStorage.setItem(YCMS_ADMIN_AUTH_KEY, '1');
      errorText.style.display = 'none';
      hideOverlay();
      hydrateAdminForm();
    } else {
      errorText.style.display = 'block';
    }
  });

  cancelBtn?.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      submitBtn.click();
    }
  });

  const saveBtn = document.getElementById('btn-save-content');
  const resetBtn = document.getElementById('btn-reset-content');

  saveBtn?.addEventListener('click', () => {
    const current = getStoredContent();
    const updated = { ...current };

    Object.keys(defaultContent).forEach((id) => {
      const field = document.getElementById('field-' + id);
      if (!field) return;
      updated[id] = field.value;
    });

    saveContentToStorage(updated);
    alert('İçerik kaydedildi. Ana sayfayı yenileyerek görebilirsiniz.');
  });

  resetBtn?.addEventListener('click', () => {
    if (!confirm('Tüm içerik varsayılana dönecek. Emin misiniz?')) return;
    saveContentToStorage({ ...defaultContent });
    hydrateAdminForm();
    alert('Varsayılan içerik yüklendi.');
  });

  handleAuth();
}

document.addEventListener('DOMContentLoaded', () => {
  applyContentToPage();
  initAdminPage();
});

