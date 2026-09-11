addLesson({
    categoryKey: 'word',
    categoryName: 'المفردات',
    title: 'أهم الكلمات المستخدمة في العمل والمكتب',
    excerpt: 'تعلم أهم المفردات الشائعة في بيئة العمل مع النطق الصوتي.',
    content: `
        <p>اضغط على زر التشغيل للاستماع للنطق الصحيح للمفردة:</p>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; margin: 15px 0;">
            <div style="font-size: 1.1rem; font-weight: bold; color: #0f172a; margin-bottom: 6px;">Deadline</div>
            <div style="color: #64748b; font-size: 0.9rem; margin-bottom: 8px;">الموعد النهائي لتسليم العمل</div>
            <div class="audio-player" onclick="playAudio('Deadline', this)">
                <button class="play-btn">▶</button>
                <div class="progress-bar"><div class="progress-fill"></div></div>
            </div>
        </div>
    `
});
