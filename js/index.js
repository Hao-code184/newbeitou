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
  

// (待修)recommond 的 搜尋
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const resultList = document.getElementById("result-list");
  const noResult = document.getElementById("no-result");

  searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase(); // 將輸入轉為小寫
      const items = resultList.getElementsByTagName("li");
      let hasMatch = false;

      // 遍歷每個項目，檢查是否包含關鍵字
      for (const item of items) {
          if (item.textContent.toLowerCase().includes(query)) {
              item.classList.remove("hidden"); // 顯示匹配的項目
              hasMatch = true;
          } else {
              item.classList.add("hidden"); // 隱藏不匹配的項目
          }
      }

      // 如果沒有匹配項目，顯示提示
      noResult.style.display = hasMatch ? "none" : "block";
  });
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
  