addLesson({
    categoryKey: 'quze',
    categoryName: 'الاختبارات',
    title: 'اختبار الاستماع والنطق السريع',
    excerpt: 'استمع إلى الجملة وكررها بصوت عالٍ للتدرب على الاستماع.',
    content: `
        <p>استمع للجملة التالية ومارس النطق مع المشغل الصوتي:</p>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">Can you repeat that, please?</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">هل يمكنك إعادة ذلك من فضلك؟</div>
            <div class="audio-player" onclick="playAudio('Can you repeat that, please?', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>
    `
});
