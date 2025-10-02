// 🌕 Trung Thu Decoration Widget 🌕
(function() {
  // Thêm HTML
  document.body.insertAdjacentHTML("beforeend", `
    <a class="webantam-trungthu-left" href="https://webantam.com/" target="_blank">
      <img alt="Trang trí Trung Thu - cành hoa, lồng đèn"
           src="https://webantam.com/wp-content/uploads/2023/09/canh-hoa-long-den-trung-thu.png"/>
    </a>
    <a class="webantam-trungthu-right" href="https://webantam.com/" target="_blank">
      <img alt="Trang trí Trung Thu - mặt trăng, lồng đèn"
           src="https://webantam.com/wp-content/uploads/2023/09/mat-trang-long-den-trung-thu.png"/>
    </a>
    <a class="webantam-trungthu-bottom" href="https://webantam.com/" target="_blank">
      <img alt="Trang trí Trung Thu - rước đèn"
           src="https://webantam.com/wp-content/uploads/2023/09/ruoc-den-trung-thu.png"/>
    </a>
    <audio autoplay loop>
      <source src="https://webantam.com/wp-content/uploads/2023/09/Lien-Khuc-Trung-Thu-Various-Artists.mp3" type="audio/mpeg">
    </audio>
  `);

  // Thêm CSS
  const style = document.createElement("style");
  style.innerHTML = `
    .webantam-trungthu-left {
      position:fixed; top:0; left:0; width:166px; z-index:9999;
    }
    .webantam-trungthu-right {
      position:fixed; top:0; right:0; width:166px; z-index:9999;
    }
    .webantam-trungthu-bottom {
      position:fixed; bottom:-8px; left:0; width:333px; z-index:9999;
    }
    @media(max-width:1024px){
      .webantam-trungthu-left,
      .webantam-trungthu-right,
      .webantam-trungthu-bottom { display:none!important; }
    }
  `;
  document.head.appendChild(style);
})();
