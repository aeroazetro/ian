let currentSubject = 'geometry';
let currentTest = 'module1';
let currentQuestionIndex = 0;
let score = 0;
let activeRefTab = 'geometry';

// Theme Logic
// 1. Check LocalStorage
// 2. Fallback to System Preference
const getPreferredTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const savedTheme = getPreferredTheme();
document.documentElement.setAttribute('data-theme', savedTheme);

document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded successfully");
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = savedTheme === 'light' ? '🌙' : '☀️';
});

window.toggleTheme = function () {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = next === 'light' ? '🌙' : '☀️';
}

function renderMath() {
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false },
                { left: "\\[", right: "\\]", display: true }
            ]
        });
    }
}

// === IMPROVED QUICK REFERENCE ===
function openQuickRef() {
    const modal = document.getElementById('quick-ref-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 style="margin:0; font-size:1.5rem;">📐 Geometry Cheat Sheet</h2>
                <button class="modal-close" onclick="closeQuickRef()" style="font-size:2rem; line-height:0.5;">×</button>
            </div>
            <div class="modal-body">
                <div class="ref-container">
                    <div id="ref-content-area" class="ref-content-area" style="width: 100%;">
                        ${getRefContent('geometry')}
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
    renderMath();
}

function switchRefTab(tab) {
    activeRefTab = tab;
    // Update Sidebar UI
    document.querySelectorAll('.ref-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(tab === 'math' ? 'math' : 'verbal')) {
            btn.classList.add('active');
        }
    });
    // Update Content
    const area = document.getElementById('ref-content-area');
    area.innerHTML = getRefContent(tab);
    renderMath();
}

function getRefContent(tab) {
    return `
        <div class="ref-grid">
            <div class="ref-card">
                <h4>Slope ($m$)</h4>
                <div class="formula-box">$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$</div>
                <div class="formula-box">Rise over Run</div>
            </div>
            
            <div class="ref-card">
                <h4>Linear Equations</h4>
                <div class="formula-box"><strong>Slope-Intercept:</strong> $y = mx + b$</div>
                <div class="formula-box"><strong>Standard:</strong> $Ax + By = C$</div>
            </div>

            <div class="ref-card">
                <h4>Parallel Lines</h4>
                <ul>
                    <li>Have the <strong>SAME</strong> slope.</li>
                    <li>$m_1 = m_2$</li>
                    <li>Never intersect.</li>
                </ul>
            </div>

            <div class="ref-card">
                <h4>Perpendicular Lines</h4>
                <ul>
                    <li>Slopes are <strong>negative reciprocals</strong>.</li>
                    <li>$m_1 \\cdot m_2 = -1$</li>
                    <li>Example: If $m = 2$, perpendicular $m = -\\frac{1}{2}$.</li>
                </ul>
            </div>
        </div>
    `;
}

function closeQuickRef() {
    document.getElementById('quick-ref-modal').classList.remove('active');
}

// === CORE NAVIGATION ===
function scrollToSection(id) {
    if (document.getElementById('landing').classList.contains('hidden')) {
        navTo('landing');
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
}

function navTo(screenId) {
    // Hide all main sections
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));

    // Show target
    const target = document.getElementById(screenId);
    if (target) target.classList.remove('hidden');

    // Close overlays
    document.getElementById('feedback-overlay').classList.remove('active');

    // Scroll handling
    if (screenId === 'landing') {
        window.scrollTo(0, 0);
    }
}

// Subject Selection
function selectSubject(subject) {
    currentSubject = subject;
    const testGrid = document.getElementById('test-grid');
    testGrid.innerHTML = '';

    if (subject === 'linear_functions') {
        document.getElementById('subject-title').textContent = 'Linear Functions';

        const emptyState = document.createElement('div');
        emptyState.style.gridColumn = "1 / -1";
        emptyState.style.textAlign = "center";
        emptyState.style.padding = "4rem 2rem";
        emptyState.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">🚧</div>
            <h3>Module Under Construction</h3>
            <p style="color: var(--text-secondary);">Content for Linear Functions is being prepared. Check back soon!</p>
            <button class="btn btn-secondary" style="margin-top: 1rem;" onclick="navTo('landing')">Return Home</button>
        `;
        testGrid.appendChild(emptyState);
        navTo('test-selection');
        return;
    }

    // Default Geometry / Lines Logic
    document.getElementById('subject-title').textContent = 'Parallel & Perpendicular Lines';

    // Group modules by difficulty
    const rawModules = window.questions[subject] || {};
    const modulesByDiff = {
        'Foundation': [],
        'Intermediate': [],
        'Elite': []
    };

    // Sort valid modules into categories
    Object.keys(rawModules).forEach(key => {
        const mod = rawModules[key];
        const diff = mod.difficulty || 'Foundation'; // Default fallback
        if (!modulesByDiff[diff]) modulesByDiff[diff] = [];

        modulesByDiff[diff].push({
            id: key,
            ...mod
        });
    });

    // Render Categories
    const diffOrder = ['Foundation', 'Intermediate', 'Elite'];

    diffOrder.forEach(diff => {
        const mods = modulesByDiff[diff];
        if (mods.length === 0) return;

        // Category Header
        const catHeader = document.createElement('div');
        catHeader.style.gridColumn = "1 / -1";
        catHeader.style.marginTop = "2rem";
        catHeader.style.marginBottom = "1rem";

        let desc = "Build your core understanding.";
        if (diff === 'Intermediate') desc = "Apply concepts to standard problems.";
        if (diff === 'Elite') desc = "Complex synthesis and proofs.";

        catHeader.innerHTML = `
            <h3 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 0.25rem;">${diff} Level</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">${desc}</p>
            <hr style="border: 0; border-top: 1px solid var(--border); margin-top: 0.5rem;">
        `;
        testGrid.appendChild(catHeader);

        // Modules
        mods.forEach(mod => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.padding = '1.5rem';
            card.innerHTML = `
                <div class="card-icon" style="margin-bottom:1rem; font-size:2.5rem;">📐</div>
                <h3 style="font-size:1.1rem;">${mod.title}</h3>
                <p style="margin-bottom: 0.5rem; font-weight:600;">${mod.subtitle}</p>
                <p style="margin-bottom: 1rem; font-size: 0.9rem;">${mod.description}</p>
                <span class="badge" style="margin-top:auto;">Start</span>
            `;
            card.onclick = () => startTest(mod.id);
            testGrid.appendChild(card);
        });
    });

    navTo('test-selection');
}

// Quiz Functions
function startTest(testKey) {
    currentTest = testKey;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-subject-label').textContent = 'Geometry / Lines';
    navTo('quiz');
    loadQuestion();
}

function loadQuestion() {
    try {
        document.getElementById('feedback-overlay').classList.remove('active');

        // Ensure data exists or throw error
        if (!window.questions || !window.questions[currentSubject]) {
            throw new Error(`Data missing. Please reload. (Subject: ${currentSubject})`);
        }

        // Access the .questions array now
        const moduleData = window.questions[currentSubject][currentTest];
        const qData = moduleData.questions[currentQuestionIndex];
        const totalQ = moduleData.questions.length;

        document.getElementById('question-tracker').textContent = `Question ${currentQuestionIndex + 1} / ${totalQ}`;


        const passageEl = document.getElementById('reading-passage');
        const quizContainer = document.querySelector('.quiz-container');

        // Reset Layout
        passageEl.classList.add('hidden');
        quizContainer.classList.remove('split-mode');
        document.getElementById('question-text').textContent = '';
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        // LINKED PASSAGE MODE
        if (qData.passageText) {
            passageEl.textContent = qData.passageText;
            passageEl.classList.remove('hidden');
            quizContainer.classList.add('split-mode'); // Trigger CSS Grid Side-by-Side
        }

        // RENDER BASED ON TYPE

        // 0. FIGURE QUESTION
        if (qData.image) {
            const img = document.createElement('img');
            img.src = qData.image;
            img.className = 'question-figure';
            img.alt = "Question Diagram";

            const figureBox = document.createElement('div');
            figureBox.style.textAlign = 'center';
            figureBox.appendChild(img);
            // Insert before options container
            const qTextBox = document.getElementById('question-text');
            qTextBox.parentNode.insertBefore(figureBox, optionsContainer);
        }

        // 1. ERROR RECOGNITION
        if (qData.type === 'error_recognition') {
            // Render Question Text with Markdown Support (Bold)
            const rawText = qData.question || "";
            const formattedText = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            document.getElementById('question-text').innerHTML = formattedText;
            const sentenceBox = document.createElement('div');
            sentenceBox.className = 'error-sentence-box';

            // Clean the text of [A], [B] markers first
            let cleanText = qData.text.replace(/\[[A-D]\]\s*/g, '').replace(/\*/g, '');
            let htmlText = cleanText;

            // Sort segments by length to avoid replacing sub-segments accidentally (e.g., "is" vs "island")
            // though unlikely given the context, safest to do.
            // Actually, we must use the segments in order or carefully replace.

            qData.segments.forEach((seg, idx) => {
                // We create the replacement HTML. 
                // We must be careful not to replace inside already replaced tags.
                // A safe way is to split the string? Or just replace global?
                // Given the specific nature of these questions, simple replacement is usually safe enough if text is unique.
                const replacement = `
                    <span class="sentence-segment" onclick="handleAnswer(${idx}, this)" data-idx="${idx}">
                        <span class="segment-text">${seg.text}</span>
                        <span class="segment-label">${seg.label}</span>
                    </span>
                `;
                htmlText = htmlText.replace(seg.text, replacement);
            });

            sentenceBox.innerHTML = htmlText;
            optionsContainer.appendChild(sentenceBox);

            // Add Option E (No Error)
            const noErrorBtn = document.createElement('button');
            noErrorBtn.className = 'option-btn';
            noErrorBtn.style.marginTop = '1.5rem';
            noErrorBtn.onclick = () => handleAnswer(4, noErrorBtn);
            noErrorBtn.innerHTML = `<div class="option-marker">E</div><span>NO ERROR</span>`;
            optionsContainer.appendChild(noErrorBtn);
        }
        // 2. SENTENCE ORDERING
        else if (qData.type === 'sentence_ordering') {
            // Render Question Text with Markdown Support (Bold)
            const rawText = qData.question || "";
            const formattedText = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            document.getElementById('question-text').innerHTML = formattedText;

            const orderBox = document.createElement('div');
            orderBox.className = 'ordering-box';
            orderBox.innerHTML = qData.options.map(s => `<div class="order-item">${s}</div>`).join('');
            optionsContainer.appendChild(orderBox);

            const choices = qData.orderingChoices || ['Option A', 'Option B', 'Option C', 'Option D'];
            choices.forEach((choiceText, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.onclick = () => handleAnswer(idx, btn);
                const label = String.fromCharCode(65 + idx);
                btn.innerHTML = `<div class="option-marker">${label}</div><span>${choiceText}</span>`;
                optionsContainer.appendChild(btn);
            });

        }
        // 3. STANDARD
        else {
            // Render Question Text with Markdown Support (Bold)
            const rawText = qData.question || "";
            const formattedText = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            document.getElementById('question-text').innerHTML = formattedText;
            qData.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.onclick = () => handleAnswer(idx, btn);
                const letter = String.fromCharCode(65 + idx); // A, B, C, D, E...
                btn.innerHTML = `<div class="option-marker">${letter}</div><span>${opt}</span>`;
                optionsContainer.appendChild(btn);
            });
        }

        renderMath();
    } catch (e) {
        console.error("Load Error:", e);
        document.getElementById('question-text').textContent = "⚠️ Error loading question: " + e.message;
        document.getElementById('options-container').innerHTML = `<div style="padding:1rem; color:var(--text-secondary)">Please tell the developer: ${e.message}</div>`;
    }
}

function formatErrorSentence(text) {
    return text.replace(/\[([A-D])\]/g, '<span class="error-badge">$1</span>');
}

function handleAnswer(selectedIndex, btnElement) {
    // Select both buttons and segments
    const interactiveElements = document.querySelectorAll('.option-btn, .sentence-segment');
    interactiveElements.forEach(el => {
        el.disabled = true; // Works for buttons
        el.style.pointerEvents = 'none'; // Works for spans/divs
    });

    const qData = window.questions[currentSubject][currentTest].questions[currentQuestionIndex];
    const isCorrect = selectedIndex === qData.correctAnswer;

    if (isCorrect) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('incorrect');

        // Highlight the correct answer
        // We need to find the element that corresponds to the correct index
        // Since we might have buttons OR segments, we check data-idx or implicit order?
        // Safest is to check both collections.

        if (qData.type === 'error_recognition') {
            const allSegments = document.querySelectorAll('.sentence-segment');
            if (allSegments[qData.correctAnswer]) {
                allSegments[qData.correctAnswer].classList.add('correct');
            }
        } else {
            const allBtns = document.querySelectorAll('.option-btn');
            if (allBtns[qData.correctAnswer]) {
                allBtns[qData.correctAnswer].classList.add('correct');
            }
        }
    }

    showFeedback(isCorrect, qData);
}

function showFeedback(isCorrect, qData) {
    const overlay = document.getElementById('feedback-overlay');
    document.getElementById('feedback-status').textContent = isCorrect ? 'Correct!' : 'Incorrect';
    document.getElementById('feedback-status').style.color = isCorrect ? 'var(--success)' : 'var(--error)';

    const correctContainer = document.getElementById('feedback-correct-answer');
    if (!isCorrect) {
        // If ordered/advanced, we might default to just showing explanation or finding the text
        let correctText = '';
        if (qData.type === 'sentence_ordering') correctText = "See ordering above";
        else if (qData.type === 'error_recognition') correctText = qData.segments[qData.correctAnswer].text;
        else correctText = qData.options[qData.correctAnswer];

        correctContainer.innerHTML = `Correct Answer: ${correctText}`;
        correctContainer.style.display = 'block';
    } else {
        correctContainer.style.display = 'none';
    }

    document.getElementById('feedback-explanation').innerHTML = qData.solution;
    renderMath();

    const totalQ = window.questions[currentSubject][currentTest].questions.length;
    document.querySelector('.btn-next').textContent = (currentQuestionIndex === totalQ - 1) ? 'View Results' : 'Next Question →';
    overlay.classList.add('active');
}

function nextQuestion() {
    const totalQ = window.questions[currentSubject][currentTest].questions.length;
    if (currentQuestionIndex < totalQ - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishExam();
    }
}

function finishExam() {
    navTo('results');
    const totalQ = window.questions[currentSubject][currentTest].questions.length;
    document.getElementById('score-display').textContent = `${score}/${totalQ}`;

    const pct = (score / totalQ) * 100;
    let rating = 'Keep Practicing';
    if (pct >= 90) rating = 'Excellent (Elite Standard)';
    else if (pct >= 80) rating = 'Very Good (Advanced)';
    else if (pct >= 60) rating = 'Good (Proficient)';

    document.getElementById('rating-text').textContent = rating;
}

// Window click for modal close
window.onclick = function (event) {
    const modal = document.getElementById('quick-ref-modal');
    if (event.target === modal) {
        closeQuickRef();
    }
}

// SKIP LOGIC
let hasSeenSkipWarning = false;

function handleSkipClick() {
    if (hasSeenSkipWarning) {
        confirmSkip();
    } else {
        const modal = document.getElementById('skip-modal');
        modal.classList.remove('hidden');
        // Small delay to allow display flex to apply before opacity transition
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
}

function closeSkipModal() {
    const modal = document.getElementById('skip-modal');
    modal.classList.remove('active');
    // Wait for transition to finish before hiding
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function confirmSkip() {
    hasSeenSkipWarning = true;
    closeSkipModal();

    const totalQ = window.questions[currentSubject][currentTest].questions.length;
    if (currentQuestionIndex < totalQ - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishExam();
    }
}

// TOGGLE THEME
function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}
