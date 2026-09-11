addLesson({
    categoryKey: 'devace',
    categoryName: 'نصائح التعلم',
    title: 'طريقة الظل (Shadowing Technique)',
    excerpt: 'أفضل طريقة لتحسين النطق والطلاقة عبر التكرار المباشر.',
    content: `
        <p>جرب تطبيق تقنية الظل بالتكرار فور سماع هذه الجملة:</p>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">Practice makes perfect.</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">التدريب يؤدي إلى الإتقان.</div>
            <div class="audio-player" onclick="playAudio('Practice makes perfect.', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>
    `
});
