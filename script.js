window.addEventListener('load', ()=>{
    
    const wrap = document.querySelector('.wrapper');
    const img = document.querySelectorAll('img');
    const text = document.querySelector('h1');
    const cur = document.querySelector('.cursor');
    const curIn = document.querySelector('.cursor-in');
    
    wrap.addEventListener('mousemove', e =>{
        const x = e.clientX;
        const y = e.clientY;
       
        text.style.transform = ` translate(${Math.floor(x / -300)}px, ${ Math.floor(y / -250)}px) `;
        img[0].style.transform = ` translate(${Math.floor(x / -300)}px, ${ Math.floor(y / -250)}px) `;
        img[1].style.transform = ` translate(${Math.floor(x / -30)}px, ${ Math.floor(y / -20)}px) `;
        img[2].style.transform = ` translate(${Math.floor(x / 100)}px, ${ Math.floor(y / 80)}px) `;
        img[3].style.transform = ` translate(${Math.floor(x / 150)}px, ${ Math.floor(y / 100)}px) scale(1.3)`;
        img[4].style.transform = ` translate(${Math.floor(x / -80)}px, ${ Math.floor(y / -100)}px) scale(1.3)`;
        
        cur.style.left = x + 'px';
        cur.style.top = y + 'px';
        
        curIn.style.left = x + 'px';
        curIn.style.top = y + 'px';
        
    })
    
})