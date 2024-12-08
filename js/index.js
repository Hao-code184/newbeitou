// 漢堡選單RWD
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');

// 點擊漢堡按鈕
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open'); // 切換漢堡按鈕動畫
    navigation.classList.toggle('active'); // 切換選單顯示
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
  