// 漢堡選單RWD
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');

// 點擊漢堡按鈕
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open'); // 切換漢堡按鈕動畫
    navigation.classList.toggle('active'); // 切換選單顯示
});


// 3 buttons 切換
document.addEventListener("DOMContentLoaded", () => {
  // 取得所有的按鈕
  const buttons = document.querySelectorAll(".buttons-area li");
  // 取得所有的內容區塊
  const titles = document.querySelectorAll(".buttons-titles");

  // 綁定點擊事件
  buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
          // 隱藏所有內容區塊
          titles.forEach(title => {
              title.style.display = "none";
          });

          // 顯示對應的內容
          if (index === 0) {
              document.getElementById("nb-hs-musuem").style.display = "block";
          } else if (index === 1) {
              document.getElementById("bt-obj-museum").style.display = "block";
          } else if (index === 2) {
              document.getElementById("er-temple").style.display = "block";
          }

          // 更新按鈕的樣式（可選）
          buttons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");
      });
  });

  // 初始顯示第一個內容
  titles.forEach((title, idx) => {
      title.style.display = idx === 0 ? "block" : "none";
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
  