let currentSubject = 'geometry';
let currentTest = 'module1';
let currentQuestionIndex = 0;
let score = 0;
let activeRefTab = 'geometry';
const SESSION_RATE = 650;
const BILLING_PASSWORD = 'climb123'; // Change this value to update billing access password.
let billingUnlocked = sessionStorage.getItem('billingUnlocked') === '1';
let billingSessions = [];

const BILLING_SESSION_CSV = `date,time,tutee,sessions,status
2025-08-10,21:00,JC,1.0,Paid
2025-08-17,20:00,JC,0.5,Paid
2025-08-19,20:30,JC,1.0,Paid
2025-08-24,21:30,JC,0.5,Paid
2025-08-26,19:30,JC,1.0,Paid
2025-08-31,20:30,JC,1.0,Paid
2025-09-03,15:15,JC,1.0,Paid
2025-09-07,20:30,JC,1.0,Paid
2025-09-09,20:30,JC,1.0,Paid
2025-09-14,20:30,JC,1.0,Paid
2025-09-16,21:00,JC,0.5,Paid
2025-09-21,21:15,JC,1.0,Paid
2025-09-26,21:30,JC,1.0,Paid
2025-09-30,21:45,JC,0.5,Paid
2025-10-05,18:45,JC,0.67,Paid
2025-10-07,20:30,JC,1.0,Paid
2025-10-19,21:10,JC,1.0,Paid
2025-10-20,12:00,Julia,0.67,Paid
2025-10-27,12:00,Julia,1.0,Paid
2025-10-28,21:00,JC,1.0,Paid
2025-11-03,12:00,Julia,1.0,Unpaid
2025-11-11,21:10,JC,1.0,Unpaid
2025-11-16,20:30,JC,0.67,Unpaid
2026-01-20,05:00,JC,1,Unpaid
2026-01-24,22:30,JC,1,Unpaid
2026-01-27,20:00,JC,1,Unpaid
2026-02-04,20:00,JC,1,Unpaid`;

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
    billingSessions = parseBillingSessionsCSV(BILLING_SESSION_CSV);
    renderBillingDashboard();
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

function parseBillingSessionsCSV(data) {
    if (!data) return [];
    const lines = data.trim().split('\n').slice(1);
    return lines.map(line => {
        const [date, time, tutee, sessions, status] = line.split(',');
        const parsedSessions = Number.parseFloat(sessions);
        return {
            date: (date || '').trim(),
            time: (time || '').trim(),
            tutee: (tutee || '').trim(),
            sessions: Number.isFinite(parsedSessions) ? parsedSessions : 0,
            status: ((status || '').trim().toLowerCase() === 'paid') ? 'paid' : 'unpaid'
        };
    }).filter(item => item.date && item.time && item.tutee);
}

function formatPeso(amount) {
    return `₱${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatSessionCount(count) {
    return `${count} session${count === 1 ? '' : 's'}`;
}

function setBillingPasswordError(message = '') {
    const error = document.getElementById('billing-password-error');
    if (!error) return;
    if (message) {
        error.textContent = message;
        error.classList.remove('hidden');
    } else {
        error.classList.add('hidden');
    }
}

function renderBillingList(targetId, sessions, emptyText) {
    const list = document.getElementById(targetId);
    if (!list) return;
    list.innerHTML = '';

    if (!sessions.length) {
        const empty = document.createElement('div');
        empty.className = 'billing-empty';
        empty.textContent = emptyText;
        list.appendChild(empty);
        return;
    }

    const sorted = [...sessions].sort((a, b) => `${b.date} ${b.time}`.localeCompare(`${a.date} ${a.time}`));
    sorted.forEach(item => {
        const amount = item.sessions * SESSION_RATE;
        const entry = document.createElement('div');
        entry.className = `billing-item ${item.status}`;
        entry.innerHTML = `
            <div class="billing-item-top">
                <span class="billing-item-date">${item.date} ${item.time}</span>
                <span class="billing-status ${item.status}">${item.status.toUpperCase()}</span>
            </div>
            <div class="billing-item-bottom">
                <span>${item.tutee} • ${formatSessionCount(item.sessions)}</span>
                <strong>${formatPeso(amount)}</strong>
            </div>
        `;
        list.appendChild(entry);
    });
}

function renderBillingDashboard() {
    if (!billingSessions.length) return;

    const unpaidSessions = billingSessions.filter(item => item.status === 'unpaid');
    const unpaidTotal = unpaidSessions.reduce((sum, item) => sum + (item.sessions * SESSION_RATE), 0);

    const totalUnpaidEl = document.getElementById('billing-total-unpaid');
    const unpaidCountEl = document.getElementById('billing-unpaid-count');
    const totalLogsEl = document.getElementById('billing-total-logs');

    if (totalUnpaidEl) totalUnpaidEl.textContent = formatPeso(unpaidTotal);
    if (unpaidCountEl) unpaidCountEl.textContent = String(unpaidSessions.length);
    if (totalLogsEl) totalLogsEl.textContent = String(billingSessions.length);

    renderBillingList('billing-unpaid-list', unpaidSessions, 'No unpaid sessions right now.');
    renderBillingList('billing-log-list', billingSessions, 'No session logs found.');
}

function showBillingPasswordModal() {
    const modal = document.getElementById('billing-password-modal');
    const input = document.getElementById('billing-password-input');
    if (!modal) return;

    setBillingPasswordError('');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
    if (input) input.focus();
}

function closeBillingPasswordModal() {
    const modal = document.getElementById('billing-password-modal');
    const input = document.getElementById('billing-password-input');
    if (!modal) return;

    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
    if (input) input.value = '';
    setBillingPasswordError('');
}

function submitBillingPassword() {
    const input = document.getElementById('billing-password-input');
    if (!input) return;

    if (input.value === BILLING_PASSWORD) {
        billingUnlocked = true;
        sessionStorage.setItem('billingUnlocked', '1');
        closeBillingPasswordModal();
        renderBillingDashboard();
        navTo('billing');
    } else {
        setBillingPasswordError('Incorrect password. Try again.');
        input.focus();
    }
}

function handleBillingPasswordKeydown(event) {
    if (event.key === 'Enter') {
        submitBillingPassword();
    }
}

function openBilling() {
    if (!billingUnlocked) {
        showBillingPasswordModal();
        return;
    }
    renderBillingDashboard();
    navTo('billing');
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
    modal.classList.add('active');
    // Ensure MathJax renders if not already
    renderMath();
}

function closeQuickRef() {
    const modal = document.getElementById('quick-ref-modal');
    modal.classList.remove('active');
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

    if (subject === 'linear_functions' || subject === 'line_equation') {
        const titles = {
            'linear_functions': 'Linear Functions',
            'line_equation': 'Equation of a Line & Graphing'
        };
        document.getElementById('subject-title').textContent = titles[subject];

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

    // Dynamic Title Logic
    const titles = {
        'geometry': 'Parallel & Perpendicular Lines',
        'polynomials': 'Polynomial Functions',
        'circles': 'Circles'
    };
    document.getElementById('subject-title').textContent = titles[subject] || 'Module Selection';

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
        if (!mods || mods.length === 0) return;

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
            const subjectIcons = {
                polynomials: '✖️',
                geometry: '📐',
                circles: '⭕'
            };
            const icon = subjectIcons[subject] || '📘';
            card.innerHTML = `
                <div class="card-icon" style="margin-bottom:1rem; font-size:2.5rem;">${icon}</div>
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
    const subjectLabels = {
        geometry: 'Geometry / Lines',
        polynomials: 'Polynomials',
        circles: 'Geometry / Circles'
    };
    document.getElementById('quiz-subject-label').textContent = subjectLabels[currentSubject] || 'Subject';
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
            const formattedText = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
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
            const formattedText = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
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
            const formattedText = rawText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
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
    const quickRefModal = document.getElementById('quick-ref-modal');
    const billingModal = document.getElementById('billing-password-modal');
    if (event.target === quickRefModal) {
        closeQuickRef();
    }
    if (event.target === billingModal) {
        closeBillingPasswordModal();
    }
}

function switchQuickRefTab(tabId) {
    // Hide all sections - using class toggle for animation support
    document.querySelectorAll('.ref-section').forEach(el => {
        if (el.id === tabId) {
            el.classList.add('active');
            el.style.display = 'block'; // Ensure display is set
        } else {
            el.classList.remove('active');
            el.style.display = 'none';
        }
    });

    // Update Sidebar Navigation
    const buttons = document.querySelectorAll('.ref-nav-item');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        }
    });

    // Ensure MathJax renders on the newly visible content
    if (typeof renderMath === 'function') renderMath();
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
