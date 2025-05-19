// 平滑滚动到锚点
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 为每个链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 获取目标部分的ID
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // 平滑滚动到目标部分
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 添加滚动监听，高亮当前部分的导航链接
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // 获取所有部分
        const sections = document.querySelectorAll('.screen');
        
        // 检查当前滚动位置在哪个部分
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                // 获取当前部分的ID
                const id = section.getAttribute('id');
                
                // 移除所有导航链接的活动状态
                navLinks.forEach(link => {
                    link.style.color = '';
                });
                
                // 高亮当前部分的导航链接
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.style.color = '#174ea6';
                }
            }
        });
    });

    // 添加测试卡片的点击效果
    const testCards = document.querySelectorAll('.test-card');
    testCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const link = card.querySelector('.test-link');
            if (link) {
                link.style.backgroundColor = '#174ea6';
            }
        });
        
        card.addEventListener('mouseout', () => {
            const link = card.querySelector('.test-link');
            if (link) {
                link.style.backgroundColor = '';
            }
        });
    });
});

// 添加GitHub星标数量实时获取功能，带缓存功能
// 缓存有效期为1小时，避免频繁请求GitHub API
async function fetchGithubStars() {
    const cacheKey = 'jsrei-github-stars-cache';
    const cacheExpiry = 3600000; // 1小时，单位毫秒
    
    // 检查缓存是否存在
    const cachedData = localStorage.getItem(cacheKey);
    let cache = null;
    
    if (cachedData) {
        try {
            cache = JSON.parse(cachedData);
            // 检查缓存是否过期
            const now = new Date().getTime();
            if (cache && cache.timestamp && (now - cache.timestamp < cacheExpiry)) {
                // 缓存有效，使用缓存数据
                console.log('使用缓存的GitHub星标数据');
                updateStarsBadge(cache.stars);
                return;
            }
        } catch (e) {
            console.error('解析缓存数据失败:', e);
        }
    }
    
    // 缓存不存在或已过期，从GitHub API获取新数据
    try {
        console.log('从GitHub API获取星标数据');
        const response = await fetch('https://api.github.com/repos/JSREI/page-redirect-goat');
        const data = await response.json();
        
        if (data.stargazers_count !== undefined) {
            // 更新星标显示
            updateStarsBadge(data.stargazers_count);
            
            // 更新缓存
            const cacheData = {
                stars: data.stargazers_count,
                timestamp: new Date().getTime()
            };
            localStorage.setItem(cacheKey, JSON.stringify(cacheData));
        }
    } catch (error) {
        console.error('获取GitHub星标数量失败:', error);
        
        // 如果API请求失败但有旧缓存，尝试使用旧缓存
        if (cache && cache.stars) {
            console.log('API请求失败，使用过期缓存数据');
            updateStarsBadge(cache.stars);
        }
    }
}

// 更新星标显示
function updateStarsBadge(starsCount) {
    const badge = document.querySelector('.github-badge img');
    if (badge) {
        badge.setAttribute('src', `https://img.shields.io/github/stars/JSREI/page-redirect-goat?style=social&label=Star&count=${starsCount}`);
    }
}

// 页面加载完成后获取GitHub星标数量
document.addEventListener('DOMContentLoaded', fetchGithubStars); 