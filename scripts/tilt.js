document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const w      = rect.width;
      const h      = rect.height;
  
      const originX = (x / w) * 100;
      const originY = (y / h) * 100;
      card.style.transformOrigin = `${originX}% ${originY}%`;
  
      const rotateX =  (y - h/2) / 8;
      const rotateY =  (x - w/2) / 8;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
      const shadowX = -rotateY * 2;
      const shadowY =  rotateX * 2;
      card.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.2)`;
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transformOrigin = '50% 50%';
      card.style.transform       = 'rotateX(0) rotateY(0)';
      card.style.boxShadow       = '';
    });
  });