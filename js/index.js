// 漢堡選單RWD
// 選取元素
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');

// 點擊漢堡按鈕
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open'); // 切換漢堡按鈕動畫
    navigation.classList.toggle('active'); // 切換選單顯示
});


// activity的簡易橫向滑動
// 選取元素
const switcherItems = document.querySelectorAll('.activity-switcher li');
const banners = document.querySelector('.avtivities-banners ul');
const slides = banners.children; // 所有的幻燈片

// 設置每張幻燈片的寬度（需與 CSS 中的卡片寬度一致）
const slideWidth = 300 + 20; // 卡片寬度 + 間距
let currentIndex = 0; // 當前顯示的幻燈片索引

// 初始化：克隆首尾元素以實現無限滾動
const firstSlideClone = slides[0].cloneNode(true);
const lastSlideClone = slides[slides.length - 1].cloneNode(true);
banners.appendChild(firstSlideClone); // 克隆第一張到最後
banners.insertBefore(lastSlideClone, slides[0]); // 克隆最後一張到最前

// 更新 banners 寬度
banners.style.width = `${(slides.length + 2) * slideWidth}px`;

// 更新幻燈片位置
function updateSlide(index, instant = false) {
    currentIndex = index;
    const offset = -(slideWidth * currentIndex); // 計算偏移量
    banners.style.transition = instant ? 'none' : 'transform 0.3s ease'; // 平滑或無動畫
    banners.style.transform = `translateX(${offset}px)`;

    // 更新切換按鈕的狀態（排除克隆的索引）
    const realIndex = (index - 1 + switcherItems.length) % switcherItems.length;
    switcherItems.forEach((item, idx) => {
        item.classList.toggle('active', idx === realIndex);
    });
}

// 初始設定：移動到第一個克隆的幻燈片
updateSlide(1, true);

// 無縫切換的修正
banners.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
        // 從首張克隆跳轉到最後一張實際幻燈片
        updateSlide(slides.length - 2, true);
    } else if (currentIndex === slides.length - 1) {
        // 從末張克隆跳轉到第一張實際幻燈片
        updateSlide(1, true);
    }
});

// 添加切換按鈕點擊事件
switcherItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        updateSlide(index + 1); // 索引加 1，因為有克隆的首尾
    });
});



//回到頂部按鈕的平滑效果
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  

// FAQ 展開/收合
document.querySelectorAll('.faq .question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
  