const sheetId = '16R7g1FyFMaq9fwwh4m6uSkiZu-dyIyf0829Ys5C3Q90';
const sheetName = '1126'; // 你的工作表名称


let l_h_title = 'L页面 - H页面来源';
let l_h_content = '这是从H页面进入l-page.html时显示的内容。';
let l_i_title = 'L页面 - I页面来源';
let l_i_content = '这是从I页面进入l-page.html时显示的内容。';
let l_c_title = 'L页面 - C页面来源';
let l_c_content = '这是从C页面进入l-page.html时显示的内容。';
let l_d_title = 'L页面 - D页面来源';
let l_d_content = '这是从D页面进入l-page.html时显示的内容。';

let k_c_title = 'K页面 - C页面来源';
let k_c_content = '这是从C页面进入k-page.html时显示的内容。';
let k_d_title = 'K页面 - D页面来源';
let k_d_content = '这是从D页面进入k-page.html时显示的内容。';
let k_h_title = 'K页面 - H页面来源';
let k_h_content = '这是从H页面进入k-page.html时显示的内容。';
let k_i_title = 'K页面 - I页面来源';
let k_i_content = '这是从I页面进入k-page.html时显示的内容。';


/**
 * 计算 object-fit: cover 模式下的图片偏移
 * @param {number} imageWidth - 图片原始宽度
 * @param {number} imageHeight - 图片原始高度
 * @param {number} containerWidth - 容器宽度
 * @param {number} containerHeight - 容器高度
 * @returns {Object} 包含 offsetX 和 offsetY 的对象
 */
function calculateCoverOffset(imageWidth, imageHeight, containerWidth, containerHeight) {
  // 计算图片和容器的宽高比
  const imageRatio = imageWidth / imageHeight;
  const containerRatio = containerWidth / containerHeight;
  const scaleX = containerWidth / imageWidth;
  const scaleY = containerHeight / imageHeight;
  const scale = Math.max(scaleX, scaleY);
  
  console.log(containerWidth, containerHeight);
  console.log(imageWidth, imageHeight);
  
  let offsetX = 0;
  let offsetY = 0;
  
  // 如果图片宽高比大于容器宽高比，图片的高度会填满容器，宽度会有溢出
  if (imageRatio > containerRatio) {
    const scaledWidth = containerHeight * imageRatio;
    console.log(scaledWidth)
    offsetX = (scaledWidth - containerWidth) / 2;
  } 
  // 如果图片宽高比小于等于容器宽高比，图片的宽度会填满容器，高度会有溢出
  else {
    const scaledHeight = containerWidth / imageRatio;
    console.log(scaledHeight)
    offsetY = (scaledHeight - containerHeight) / 2;
  }
  
  return {
    offsetX: Math.round(offsetX),
    offsetY: Math.round(offsetY),
    scale: Math.round(scale * 100, 8) / 100,
  };
}

function calculateCoverOffsetPNG(origin_offX, origin_offY, scale, offX, offY) {
  return {
    offsetX: Math.round(origin_offX * scale - offX, 8),
    offsetY: Math.round(origin_offY * scale - offY, 8),
    scale: Math.round(scale * 100, 8) / 100,
  }
}

/**
 * 判断当前时间是白天还是黑夜
 * @returns {string} 'light' 表示 07:00-18:00，'dark' 表示其他时间
 */
function getTimeOfDay() {
  const now = new Date();
  const hour = now.getHours();
  
  // 07点到18点返回light,其他时间范围返回dark
  if (hour >= 7 && hour < 18) {
    return 'light';
  } else {
    return 'dark';
  }
}

/**
 * 根据source参数获取对应的内容
 * @param {string} source - 来源页面标识
 * @returns {Object} 包含标题和正文的对象
 */
function getContentBySource(source) {
  // 定义页面映射关系
  const contentMap = {
    // 'index': {
    //   title: '首页内容',
    //   content: '这是从首页进入k-page.html时显示的内容。'
    // },
    // 'b-page': {
    //   title: 'B页面内容',
    //   content: '这是从B页面进入k-page.html时显示的内容。'
    // },
    'c-page': {
      title: k_c_title,
      content: k_c_content
    },
    'd-page': {
      title: k_d_title,
      content: k_d_content
    },
    // 'f-page': {
    //   title: 'F页面内容',
    //   content: '这是从F页面进入k-page.html时显示的内容。'
    // },
    // 'g-page': {
    //   title: 'G页面内容',
    //   content: '这是从G页面进入k-page.html时显示的内容。'
    // },
    'h-page': {
      title: k_h_title,
      content: k_h_content
    },
    'i-page': {
      title: k_i_title,
      content: k_i_content
    },
    // 'j-page': {
    //   title: 'J页面内容',
    //   content: '这是从J页面进入k-page.html时显示的内容。'
    // },
    // 'l-page': {
    //   title: 'L页面内容',
    //   content: '这是从L页面进入k-page.html时显示的内容。'
    // }
  };

  // 返回对应的内容，如果没有匹配则使用默认内容
  return contentMap[source] || {
    title: '默认内容',
    content: '欢迎来到K页面，这是默认显示的内容。'
  };
}

/**
 * 根据source参数获取l-page.html对应的内容
 * @param {string} source - 来源页面标识
 * @returns {Object} 包含标题和正文的对象
 */
function getContentBySourceForLPage(source) {
  console.log(source);
  // 定义l-page.html的页面映射关系
  const contentMap = {
    // 'index': {
    //   title: 'L页面 - 首页来源',
    //   content: '这是从首页进入l-page.html时显示的内容。'
    // },
    // 'b-page': {
    //   title: 'L页面 - B页面来源',
    //   content: '这是从B页面进入l-page.html时显示的内容。'
    // },
    'c-page': {
      title: l_c_title,
      content: l_c_content,
    },
    'd-page': {
      title: l_d_title,
      content: l_d_content,
    },
    // 'f-page': {
    //   title: 'L页面 - F页面来源',
    //   content: '这是从F页面进入l-page.html时显示的内容。'
    // },
    // 'g-page': {
    //   title: 'L页面 - G页面来源',
    //   content: '这是从G页面进入l-page.html时显示的内容。'
    // },
    'h-page': {
      title: l_h_title,
      content: l_h_content,
    },
    'i-page': {
      title: l_i_title,
      content: l_i_content,
    },
    // 'j-page': {
    //   title: 'L页面 - J页面来源',
    //   content: '这是从J页面进入l-page.html时显示的内容。'
    // },
    // 'k-page': {
    //   title: 'L页面 - K页面来源',
    //   content: '这是从K页面进入l-page.html时显示的内容。'
    // }
  };

  // 返回对应的内容，如果没有匹配则使用默认内容
  return contentMap[source] || {
    title: 'L页面 - 默认内容',
    content: '欢迎来到L页面，这是默认显示的内容。'
  };
}

// ==================== 弹窗相关方法 ====================

/**
 * 显示像素画风格弹窗
 */
function showPixelPopup() {
  const popup = document.getElementById('pixelPopup');
  if (popup) {
    popup.classList.add('show');
  }
}

/**
 * 关闭像素画风格弹窗
 */
function closePixelPopup() {
  const popup = document.getElementById('pixelPopup');
  if (popup) {
    popup.classList.remove('show');
  }
}

/**
 * 为指定元素添加点击事件以显示弹窗
 * @param {string} elementId - 要添加点击事件的元素ID
 */
function addPopupTrigger(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener('click', function() {
      showPixelPopup();
    });
  }
}

/**
 * 初始化弹窗功能
 */
function initPopup() {
  // 为Elements-1-G.png添加点击事件监听器
  addPopupTrigger('element1Image');
  
  // 也可以为关闭按钮添加事件监听器（除了onclick属性外的另一种方式）
  const closeBtn = document.querySelector('.popup-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closePixelPopup();
    });
  }
}

// ==================== 音乐播放器相关方法 ====================

/**
 * 初始化音乐播放器
 */
function initMusicPlayer() {
  // 创建音频元素
  const audio = document.getElementById('musicPlayer');
  if (!audio) return;
  
  // 获取播放器相关元素
  const player = document.getElementById('pixelMusicPlayer');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const stopBtn = document.getElementById('stopBtn');
  const progressBar = document.getElementById('progressBar');
  const playerClose = document.getElementById('playerClose');
  
  // 播放按钮事件
  if (playBtn) {
    playBtn.addEventListener('click', function() {
      audio.play();
    });
  }
  
  // 暂停按钮事件
  if (pauseBtn) {
    pauseBtn.addEventListener('click', function() {
      audio.pause();
    });
  }
  
  // 停止按钮事件
  if (stopBtn) {
    stopBtn.addEventListener('click', function() {
      audio.pause();
      audio.currentTime = 0;
      if (progressBar) {
        progressBar.style.width = '0%';
      }
    });
  }
  
  // 关闭按钮事件
  if (playerClose) {
    playerClose.addEventListener('click', function() {
      if (player) {
        player.classList.remove('show');
      }
      audio.pause();
      audio.currentTime = 0;
      if (progressBar) {
        progressBar.style.width = '0%';
      }
    });
  }
  
  // 音频时间更新事件
  audio.addEventListener('timeupdate', function() {
    if (progressBar) {
      const percent = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = percent + '%';
    }
  });
  
  // 音频结束事件
  audio.addEventListener('ended', function() {
    if (progressBar) {
      progressBar.style.width = '0%';
    }
  });
}

/**
 * 显示音乐播放器
 */
function showMusicPlayer() {
  const player = document.getElementById('pixelMusicPlayer');
  if (player) {
    player.classList.add('show');
  }
}

function getDocument() {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
  fetch(url)
      .then(response => response.text())
      .then(data => {
          // 移除前缀 "google.visualization.Query.setResponse(" 和后缀 ");"
          const jsonData = JSON.parse(data.substring(47).slice(0, -2));
          // console.log(jsonData);
          displayJsonData(jsonData);
      })
      .catch(error => console.error('Error:', error));
}

 function displayJsonData(data) {
  console.log(data);
  const table = data.table;
  const cols = table.cols;
  const rows = table.rows;
  rows.forEach(row => {
    row.c.forEach(cell => {
      const value = cell ? cell.v : '';
      console.log(value);
    });
  });


 }

/**
 * 隐藏音乐播放器
 */
function hideMusicPlayer() {
  const player = document.getElementById('pixelMusicPlayer');
  if (player) {
    player.classList.remove('show');
  }
}

// 页面加载完成后初始化功能
document.addEventListener('DOMContentLoaded', function() {
  initPopup();
  initMusicPlayer();
  getDocument()
});

// 导出函数（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    calculateCoverOffset, 
    calculateCoverOffsetPNG, 
    getTimeOfDay, 
    getContentBySource, 
    getContentBySourceForLPage,
    showPixelPopup,
    closePixelPopup,
    addPopupTrigger,
    initPopup,
    initMusicPlayer,
    showMusicPlayer,
    hideMusicPlayer
  };
}