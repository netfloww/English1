addLesson({
    categoryKey: 'mastk',
    categoryName: 'الأخطاء الشائعة',
    title: 'الفرق بين Listen و Hear',
    excerpt: 'تصحيح الخلط بين الاستماع الصامت والاستماع الفعال.',
    content: `
        <p>استمع للنطق الصحيح للجملة السليمة مع الاستماع للأنغام:</p>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">I am listening to music.</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">أنا أستمع إلى الموسيقى (الاستخدام الصحيح)</div>
            <div class="audio-player" onclick="playAudio('I am listening to music.', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>
    `
});
