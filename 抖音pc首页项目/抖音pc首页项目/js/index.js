var mainContent = document.querySelector('.main-content');

function createItem(data) {
  const div = document.createElement('div');
  div.className = 'main-item';
  div.innerHTML = `<a href="https://www.douyin.com/video/${data.videoId}" target="_blank" class="main-item-cover">
    <img src="${data.cover}" alt="" />
    <div class="main-item-favor">
      <i class="iconfont icon-zan"></i>
      <span>${data.favor}</span>
    </div>
    <div class="main-item-time">${data.time}</div>
    <div class="main-item-progress">
      <span></span>
    </div>
  </a>
  <h2 class="main-item-title">
    <a href="https://www.douyin.com/video/${data.videoId}" target="_blank">
    ${data.title}
    </a>
  </h2>
  <div class="main-item-aside">
    <a href="" class="main-item-author">
      <img src="${data.author.avatar}" alt="" />
      <span>${data.author.name}</span>
    </a>
    <span class="main-item-date">${data.date}</span>
  </div>`;
  return div;
}

async function init() {
  const resp = await fetch('./js/data.json').then((resp) => resp.json());
  for (const data of resp) {
    const div = createItem(data);
    mainContent.appendChild(div);
    const span = div.querySelector('.main-item-progress span');
    const vdo = new VideoController(data.video, function () {
      span.style.width = vdo.progess + '%';
    });
    const cover = div.querySelector('.main-item-cover');
    cover.onmouseenter = async function () {
      div.classList.add('playing');
      const dom = await vdo.play();
      if (cover.lastElementChild !== dom) {
        cover.appendChild(dom);
      }
    };
    cover.onmouseleave = async function () {
      div.classList.remove('playing');
      await vdo.pause();
    };
  }
}

init();
