addLesson({
    categoryKey: 'voce',
    categoryName: 'الصوتيات والنطق',
    title: 'سر نطق حرف R في اللهجة الأمريكية',
    excerpt: 'تعلم كيفية نطق حرف R بشكل صحيح وبدون تكلف.',
    content: `
        <p>لاحظ كيف يتم تفخيم حرف الـ R في الكلمة التالية عند الاستماع:</p>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">Water</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">ماء</div>
            <div class="audio-player" onclick="playAudio('Water', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>
    `
});
