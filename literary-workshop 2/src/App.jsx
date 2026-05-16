import { useState } from "react";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const G = "#d4b778";
const DIM = "#5a5040";
const MID = "#c8c0b0";
const DARK = "#0e0c0a";
const BORDER = "rgba(255,255,255,0.08)";

const THEORY_CARDS = [
  { id: "t1", category: "Act Structure", front: "What does Act 1 establish in literary fiction?", back: "The character's ordinary emotional world, the central lack/desire, the governing tension, the emotional atmosphere, and what will eventually have to change. The protagonist usually has avoidance patterns, contradictions, and blind spots." },
  { id: "t2", category: "Act Structure", front: "What is the Act 1 turning point?", back: "The moment the protagonist can no longer remain psychologically or situationally static. The central tension becomes unavoidable — could be beginning an affair, returning home, receiving news, or simply failing to leave." },
  { id: "t3", category: "Act Structure", front: "What are the three deepening layers of Act 2?", back: "External (consequences, entanglement), Internal (emotional pressure), and Thematic (clarity about what the story is 'really about'). All three deepen simultaneously." },
  { id: "t4", category: "Act Structure", front: "What happens at the midpoint of literary fiction?", back: "The character gains partial awareness — not full understanding, but they begin seeing what they want, what they fear, or what the real conflict is. Or they commit more deeply to denial. The midpoint often changes the meaning of the story." },
  { id: "t5", category: "Act Structure", front: "How does Act 2 typically end?", back: "The character's existing way of operating collapses. Their emotional strategy stops working. Illusions fail, relationships fracture, avoidance becomes impossible." },
  { id: "t6", category: "Act Structure", front: "What is Act 3 really asking?", back: "Has the character changed? Or were they incapable of changing? The protagonist is forced into truth, choice, self-recognition, surrender, transformation, or tragedy." },
  { id: "t7", category: "Diagnostic", front: "What is the dominant question for each act?", back: "Act 1: 'What's wrong?' — Act 2: 'What now?' — Act 3: 'What must be faced?'" },
  { id: "t8", category: "Diagnostic", front: "What is the character state in each act?", back: "Act 1: Unaware / Avoiding — Act 2: Struggling / Repeating — Act 3: Confronting / Transforming" },
  { id: "t9", category: "Core Principle", front: "What is the key difference between commercial and literary fiction structure?", back: "Commercial fiction structures around plot events. Literary fiction structures around psychological or relational change. Both still move through stability → disruption → escalation → crisis → transformation." },
  { id: "t10", category: "Core Principle", front: "What is the most useful question to mark act transitions?", back: "Not 'What act am I in?' but: 'What has fundamentally changed in the character's relationship to the central tension?'" },
  { id: "t11", category: "Core Principle", front: "What is the 'identity pressure' lens for story structure?", back: "Every story is about pressure applied to identity: (1) character begins with a stable self-concept, (2) story destabilises it, (3) pressure exposes contradictions, (4) ending resolves or destroys that identity." },
  { id: "t12", category: "Paragraph Craft", front: "What makes a paragraph earn its place in a scene?", back: "A paragraph earns its place by doing at least two of: advancing action, deepening character, shifting atmosphere, or landing a new piece of information. A paragraph that only describes setting without charge is dead weight." },
  { id: "t13", category: "Paragraph Craft", front: "How should a paragraph change from its first sentence to its last?", back: "The paragraph should arrive somewhere different from where it began. Even in description, there is movement — in understanding, in emotional register, or in what the reader now knows." },
  { id: "t14", category: "Paragraph Craft", front: "What is paragraph rhythm in a scene?", back: "The alternation of long and short paragraphs creates pace. Short paragraphs accelerate and isolate. Long paragraphs immerse. A scene with no variation is monotonous regardless of content." },
  { id: "t15", category: "Scene Structure", front: "What is the difference between a scene and a passage?", back: "A scene has an engine — a want, an obstacle, a change in state. A passage is observation without pressure. Literary fiction needs both, but scenes carry the story. A passage earns its place by charging what surrounds it." },
  { id: "t16", category: "Scene Structure", front: "What must change by the end of a scene?", back: "Something must shift: the power between characters, a character's understanding, the emotional weather, or what the reader knows. A scene that ends in the same state it began is a missed opportunity." },
  { id: "t17", category: "Sentence Craft", front: "What makes a sentence in literary fiction 'earn' its length?", back: "A long sentence earns its length through rhythm, accumulation of precise detail, or mimicking the way thought/emotion actually moves. It should never be long because the writer was unsure where to stop." },
  { id: "t18", category: "Sentence Craft", front: "What is Chekhov's principle about detail?", back: "Every detail must do more than one job — it must simultaneously show character, advance atmosphere, and carry thematic weight. If a gun appears in Act 1, it must fire. Cut anything that only does one job." },
];

const SEED_PROMPTS = [
  { id: "w1", level: "Paragraph", focus: "subtext", title: "The Avoidance", instruction: "Write a paragraph (4–6 sentences) in which two characters talk about something completely unimportant while the real subject hangs unspoken between them. We should feel the real subject without it being named.", criteria: ["Is the real subject invisible but felt?", "Does the dialogue/action feel natural?", "Is there pressure building underneath?"] },
  { id: "w2", level: "Paragraph", focus: "rhythm", title: "Arrival Scene", instruction: "Write a short paragraph (3–5 sentences) of a character arriving somewhere they've been before. The place should feel different now — but never tell us why. Use only what they notice.", criteria: ["Does the place feel charged without explanation?", "Does each sentence move the paragraph somewhere?", "Are there any adjectives doing work that concrete nouns should do?"] },
  { id: "w3", level: "Paragraph", focus: "interiority", title: "The Half-Thought", instruction: "Write a paragraph in which a character almost understands something about themselves — but the thought slips away or gets redirected. Show the approach and the retreat without naming either.", criteria: ["Does the character get close to insight?", "Is the pullback believable?", "Do we understand more than the character does?"] },
  { id: "w4", level: "Paragraph", focus: "detail", title: "The Weight of an Object", instruction: "Write a paragraph built around a single ordinary object. The object must carry the scene's emotional weight. Do not name the emotion — let the object do the work.", criteria: ["Does the object carry the emotion?", "Is the emotion implied rather than stated?", "Could any word be cut?"] },
  { id: "w5", level: "Scene", focus: "subtext", title: "The Act 1 Opening", instruction: "Write an opening scene (80–120 words). Establish the character's ordinary world AND plant the first hint of what will destabilise it — without announcing either.", criteria: ["Do we feel the ordinary world?", "Is there a hint of tension or lack?", "Does the character's emotional position emerge?", "Is there forward pull?"] },
  { id: "w6", level: "Scene", focus: "rhythm", title: "The Compressed History", instruction: "Write a short scene (100–150 words) that implies a long history between two people without stating it. Give us the relationship's whole arc through what's not said and what's done habitually.", criteria: ["Does the relationship history feel implied, not explained?", "Is there tension under the surface?", "Does each paragraph move?"] },
];

const GROQ_MODELS = [
  { id: "llama-3.3-70b-versatile", label: "Llama 3.3 70B (best quality)" },
  { id: "llama-3.1-8b-instant", label: "Llama 3.1 8B (fastest)" },
  { id: "qwen-qwq-32b", label: "Qwen QwQ 32B (strong reasoning)" },
];

const FOCUS_OPTIONS = ["random", "rhythm", "subtext", "interiority", "detail", "based on history"];

// ─── PROMPTS ─────────────────────────────────────────────────────────────────

const GENERATE_EXERCISE_SYSTEM = `You are a literary fiction writing teacher in the tradition of Chekhov and Carver. Generate a single paragraph-level writing exercise.

Respond ONLY with a JSON object, no markdown, no preamble:
{
  "title": "short evocative title",
  "level": "Paragraph" or "Scene",
  "focus": one of: "rhythm", "subtext", "interiority", "detail",
  "instruction": "precise 2-3 sentence instruction for what to write",
  "criteria": ["3-4 short evaluation criteria as questions"]
}

The exercise must target paragraph structure — how paragraphs move, breathe, and build. Avoid vague prompts. Make the constraint specific and craft-focused.`;

const FEEDBACK_SYSTEM = `You are a literary fiction editor. Your feedback is objective, precise, and unsentimental. You do not encourage mediocrity.

Score the submission out of 100 with a breakdown across four dimensions (25 points each):
- IMPLICATION (25): emotion shown vs stated; subtext vs explanation
- MOVEMENT (25): does the paragraph/scene arrive somewhere different from where it started?
- DETAIL (25): specificity, necessity, multi-functionality of each detail
- RHYTHM (25): sentence variation, cadence, control of pace

Respond ONLY with a JSON object, no markdown:
{
  "total": <number 0-100>,
  "scores": {
    "implication": <0-25>,
    "movement": <0-25>,
    "detail": <0-25>,
    "rhythm": <0-25>
  },
  "working": "1-2 specific things that work, quoted from the text",
  "central_issue": "one core craft problem, named precisely",
  "rewrite": "rewrite the weakest sentence to demonstrate the fix",
  "question": "one diagnostic question for the writer"
}

Be direct. Quote from the text. Do not soften criticism with compliments. Total under 300 words across all fields.`;

const SCENE_ANALYSIS_SYSTEM = `You are a literary fiction editor specialising in paragraph and scene structure.

The writer has submitted a passage. Break it into its natural paragraphs and analyse each one, then give an overall scene assessment.

Respond ONLY with a JSON object, no markdown:
{
  "paragraphs": [
    {
      "index": 1,
      "text": "first ~15 words of paragraph...",
      "function": "what this paragraph does structurally (one phrase)",
      "strength": "what works",
      "weakness": "what doesn't, or null if strong",
      "movement": "where does it begin vs end emotionally/informationally?"
    }
  ],
  "scene": {
    "total": <0-100>,
    "scores": {
      "implication": <0-25>,
      "movement": <0-25>,
      "detail": <0-25>,
      "rhythm": <0-25>
    },
    "engine": "what is driving this scene (want/obstacle/change)?",
    "what_changes": "what has shifted by the end, or 'nothing — this is a passage not a scene'",
    "central_issue": "the single most important structural problem",
    "next_paragraph": "a specific suggestion for what the next paragraph should do"
  }
}`;

const ANALYSIS_SYSTEM = `You are a literary fiction editor. Analyse the submitted prose for:

RHYTHM: Sentence length variation, cadence, where it breathes and where it rushes.
IMPLICATION: What is shown vs stated. Flag any emotion named rather than enacted.
DETAIL: Specificity and necessity of each detail. Does it do more than one job?
MOVEMENT: Where does the passage begin vs end? Does it arrive somewhere?

Score out of 100 with the same breakdown (25 pts each: implication, movement, detail, rhythm).

Respond ONLY with JSON, no markdown:
{
  "total": <0-100>,
  "scores": { "implication": <0-25>, "movement": <0-25>, "detail": <0-25>, "rhythm": <0-25> },
  "rhythm": "analysis",
  "implication": "analysis",
  "detail": "analysis",
  "movement": "analysis"
}`;

// ─── API ──────────────────────────────────────────────────────────────────────

async function callGroq(apiKey, model, systemPrompt, userMessage) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      max_tokens: 1200,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Groq error ${res.status}`);
  }
  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content || "";
  return raw;
}

function parseJSON(raw) {
  const clean = raw.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}

// ─── UI HELPERS ───────────────────────────────────────────────────────────────

const btn = (active) => ({
  background: active ? "rgba(212,183,120,0.12)" : "none",
  border: `1px solid ${active ? "rgba(212,183,120,0.3)" : "transparent"}`,
  color: active ? G : DIM,
  padding: "6px 16px", borderRadius: 2, cursor: "pointer",
  fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2,
  textTransform: "uppercase", transition: "all 0.2s",
});

function ScoreBar({ label, score, max = 25 }) {
  const pct = Math.round((score / max) * 100);
  const color = pct >= 80 ? "#4ade80" : pct >= 55 ? G : "#f87171";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
      <div style={{ width: 100, fontSize: 11, letterSpacing: 1, color: DIM, textTransform: "uppercase", flexShrink: 0 }}>{label}</div>
      <div style={{ flex: 1, height: 4, background: "#1a1810", borderRadius: 2 }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 2, transition: "width 0.8s ease" }} />
      </div>
      <div style={{ width: 36, textAlign: "right", fontSize: 12, color, fontFamily: "'Raleway', sans-serif" }}>{score}/{max}</div>
    </div>
  );
}

function ScoreCard({ scores, total }) {
  const color = total >= 80 ? "#4ade80" : total >= 55 ? G : "#f87171";
  return (
    <div style={{ background: "rgba(0,0,0,0.4)", border: `1px solid ${BORDER}`, borderRadius: 3, padding: "20px 24px", marginBottom: 16 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20 }}>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 40, color, lineHeight: 1 }}>{total}</div>
        <div style={{ fontSize: 14, color: DIM }}>/100</div>
      </div>
      <ScoreBar label="Implication" score={scores.implication} />
      <ScoreBar label="Movement" score={scores.movement} />
      <ScoreBar label="Detail" score={scores.detail} />
      <ScoreBar label="Rhythm" score={scores.rhythm} />
    </div>
  );
}

function FeedbackBlock({ data }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ScoreCard scores={data.scores} total={data.total} />
      {[
        ["What's Working", data.working],
        ["Central Issue", data.central_issue],
        ["Rewrite", data.rewrite],
        ["Question to Sit With", data.question],
      ].map(([label, content]) => content && (
        <div key={label} style={{ borderLeft: `2px solid ${label === "Central Issue" ? "#f87171" : label === "What's Working" ? "#4ade80" : G}`, paddingLeft: 16 }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: DIM, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.8, color: "#b0a898" }}>{content}</div>
        </div>
      ))}
    </div>
  );
}

// ─── SETTINGS ────────────────────────────────────────────────────────────────

function Settings({ apiKey, setApiKey, model, setModel, onDone }) {
  const [draft, setDraft] = useState(apiKey);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div>
        <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Setup</div>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8", marginBottom: 12 }}>Connect Groq</div>
        <div style={{ fontSize: 14, color: DIM, lineHeight: 1.75 }}>
          Free API key at <a href="https://console.groq.com" style={{ color: G }}>console.groq.com</a> — no credit card needed.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={{ fontSize: 11, letterSpacing: 2, color: DIM, textTransform: "uppercase" }}>Groq API Key</label>
        <input type="password" value={draft} onChange={e => setDraft(e.target.value)} placeholder="gsk_..."
          style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 3, color: "#e0d8cc", fontFamily: "'Lora', serif", fontSize: 16, padding: "12px 16px", outline: "none", width: "100%", boxSizing: "border-box" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={{ fontSize: 11, letterSpacing: 2, color: DIM, textTransform: "uppercase" }}>Model</label>
        <select value={model} onChange={e => setModel(e.target.value)}
          style={{ background: "#1a1510", border: `1px solid ${BORDER}`, borderRadius: 3, color: MID, fontFamily: "'Lora', serif", fontSize: 16, padding: "12px 16px", outline: "none", width: "100%" }}>
          {GROQ_MODELS.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
        </select>
      </div>
      <button onClick={() => { setApiKey(draft); onDone(); }} disabled={!draft.trim()}
        style={{ background: draft.trim() ? "#3a2e18" : "#1a1510", color: draft.trim() ? G : "#3a3028", border: `1px solid ${draft.trim() ? "rgba(212,183,120,0.3)" : "transparent"}`, padding: "12px 28px", borderRadius: 2, cursor: draft.trim() ? "pointer" : "not-allowed", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", alignSelf: "flex-start" }}>
        Save & Start →
      </button>
    </div>
  );
}

// ─── FLASHCARD ────────────────────────────────────────────────────────────────

function FlashCard({ card, onResult, onSkip }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <div onClick={() => setFlipped(f => !f)}
        style={{ width: "100%", minHeight: 200, background: flipped ? "rgba(212,183,120,0.10)" : "rgba(255,255,255,0.04)", border: `1px solid ${flipped ? "rgba(212,183,120,0.4)" : BORDER}`, borderRadius: 4, padding: "36px 32px", cursor: "pointer", transition: "all 0.3s ease", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 16 }}>{card.category} — {flipped ? "Answer" : "Question"}</div>
        <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 17, lineHeight: 1.7, color: flipped ? "#f0ead8" : MID }}>{flipped ? card.back : card.front}</div>
        {!flipped && <div style={{ marginTop: 20, fontSize: 11, color: "#6a6355", letterSpacing: 1 }}>CLICK TO REVEAL</div>}
      </div>
      {flipped && (
        <div style={{ display: "flex", gap: 12 }}>
          {[["Got it ✓", "#2a6b3a", "#4ade80"], ["Almost", "#4a4020", G], ["Again ✗", "#5a2020", "#f87171"]].map(([label, bg, color]) => (
            <button key={label} onClick={() => onResult(label)}
              style={{ background: bg, color, border: `1px solid ${color}40`, padding: "8px 20px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase" }}>{label}</button>
          ))}
        </div>
      )}
      <button onClick={onSkip} style={{ background: "none", border: "none", color: "#4a4438", cursor: "pointer", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>Skip →</button>
    </div>
  );
}

// ─── EXERCISE ─────────────────────────────────────────────────────────────────

function Exercise({ prompt, apiKey, model, onXp, history, onAddToScene }) {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = async () => {
    if (!text.trim() || text.trim().length < 20) return;
    if (!apiKey) { setError("Add your Groq API key in Settings first."); return; }
    setLoading(true); setError(null); setFeedback(null);
    try {
      const historyCtx = history.length > 0
        ? `\n\nWriter's recent struggle areas from previous exercises: ${history.slice(-3).map(h => h.central_issue).filter(Boolean).join("; ")}`
        : "";
      const userMsg = `Exercise: "${prompt.title}"\nInstruction: ${prompt.instruction}\nCriteria: ${prompt.criteria.join("; ")}${historyCtx}\n\nSubmission:\n\n${text}`;
      const raw = await callGroq(apiKey, model, FEEDBACK_SYSTEM, userMsg);
      const data = parseJSON(raw);
      setFeedback(data);
      onXp(data.total ? Math.round(data.total / 2) : 10, data);
    } catch (e) {
      setError(e.message || "Something went wrong. Check your API key.");
    }
    setLoading(false);
  };

  const wc = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ borderLeft: `2px solid ${G}`, paddingLeft: 20 }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 6 }}>{prompt.level} · {prompt.focus}</div>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 16, lineHeight: 1.75, color: MID }}>{prompt.instruction}</div>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {prompt.criteria.map(c => <span key={c} style={{ fontSize: 10, color: "#6a6050", border: "1px solid #2a2520", padding: "3px 10px", borderRadius: 20 }}>{c}</span>)}
      </div>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Write here…" rows={7}
        style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 3, color: "#e0d8cc", fontFamily: "'Lora', serif", fontSize: 16, lineHeight: 1.8, padding: "16px", resize: "vertical", outline: "none", width: "100%", boxSizing: "border-box" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <button onClick={submit} disabled={loading || text.trim().length < 20}
          style={{ background: loading ? "#2a2520" : "#3a2e18", color: loading ? "#4a4438" : G, border: `1px solid rgba(212,183,120,${loading ? 0.1 : 0.3})`, padding: "10px 24px", borderRadius: 2, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
          {loading ? "Reading…" : "Get Feedback"}
        </button>
        {feedback && onAddToScene && (
          <button onClick={() => onAddToScene(text)}
            style={{ background: "rgba(212,183,120,0.06)", color: G, border: `1px solid rgba(212,183,120,0.2)`, padding: "10px 20px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
            + Add to Scene
          </button>
        )}
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#4a4438" }}>{wc} words</span>
      </div>
      {error && <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 3, padding: "14px 18px", fontSize: 13, color: "#f87171", lineHeight: 1.6 }}>{error}</div>}
      {feedback && (
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 12 }}>Editor's Notes</div>
          <FeedbackBlock data={feedback} />
        </div>
      )}
    </div>
  );
}

// ─── GENERATE EXERCISE ────────────────────────────────────────────────────────

function GenerateExercise({ apiKey, model, history, onXp, onAddToScene }) {
  const [focus, setFocus] = useState("random");
  const [generated, setGenerated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = async () => {
    if (!apiKey) { setError("Add your Groq API key in Settings first."); return; }
    setLoading(true); setError(null); setGenerated(null);
    try {
      const historyCtx = history.length > 0 && focus === "based on history"
        ? `The writer has struggled with: ${history.slice(-5).map(h => h.central_issue).filter(Boolean).join("; ")}. Generate an exercise that targets their weakest area.`
        : focus === "random"
        ? "Choose any focus — rhythm, subtext, interiority, or detail."
        : `Focus specifically on: ${focus}.`;
      const raw = await callGroq(apiKey, model, GENERATE_EXERCISE_SYSTEM, historyCtx);
      const data = parseJSON(raw);
      setGenerated({ ...data, id: `gen-${Date.now()}` });
    } catch (e) {
      setError(e.message || "Generation failed. Check your API key.");
    }
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 11, letterSpacing: 2, color: DIM, textTransform: "uppercase" }}>Generate Exercise</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {FOCUS_OPTIONS.map(f => (
            <button key={f} onClick={() => setFocus(f)}
              style={{ background: focus === f ? "rgba(212,183,120,0.12)" : "none", border: `1px solid ${focus === f ? "rgba(212,183,120,0.3)" : BORDER}`, color: focus === f ? G : DIM, padding: "6px 14px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase" }}>
              {f}
            </button>
          ))}
        </div>
        <button onClick={generate} disabled={loading}
          style={{ background: loading ? "#1a1510" : "#3a2e18", color: loading ? DIM : G, border: `1px solid rgba(212,183,120,${loading ? 0.1 : 0.3})`, padding: "10px 24px", borderRadius: 2, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", alignSelf: "flex-start" }}>
          {loading ? "Generating…" : "Generate →"}
        </button>
      </div>
      {error && <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 3, padding: "14px 18px", fontSize: 13, color: "#f87171" }}>{error}</div>}
      {generated && (
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24 }}>
          <Exercise key={generated.id} prompt={generated} apiKey={apiKey} model={model} onXp={onXp} history={history} onAddToScene={onAddToScene} />
        </div>
      )}
    </div>
  );
}

// ─── SCENE BUILDER ────────────────────────────────────────────────────────────

function SceneBuilder({ apiKey, model, onXp, sceneBuffer, setSceneBuffer }) {
  const [text, setText] = useState(sceneBuffer || "");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyse = async () => {
    if (!text.trim() || text.trim().length < 40) return;
    if (!apiKey) { setError("Add your Groq API key in Settings first."); return; }
    setLoading(true); setError(null); setAnalysis(null);
    try {
      const raw = await callGroq(apiKey, model, SCENE_ANALYSIS_SYSTEM, `Analyse this scene:\n\n${text}`);
      const data = parseJSON(raw);
      setAnalysis(data);
      onXp(data.scene?.total ? Math.round(data.scene.total / 2) : 10, data.scene);
    } catch (e) {
      setError(e.message || "Analysis failed.");
    }
    setLoading(false);
  };

  const wc = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ fontSize: 14, color: DIM, lineHeight: 1.7 }}>
        Write or paste your scene freely. The AI will break it into paragraphs, analyse each one's structural function, and score the scene as a whole.
        {sceneBuffer && <span style={{ color: G }}> Paragraphs from exercises have been added below.</span>}
      </div>
      <textarea value={text} onChange={e => { setText(e.target.value); setSceneBuffer(e.target.value); }} placeholder="Write or paste your scene here…" rows={12}
        style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 3, color: "#e0d8cc", fontFamily: "'Lora', serif", fontSize: 16, lineHeight: 1.85, padding: "16px", resize: "vertical", outline: "none", width: "100%", boxSizing: "border-box" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={analyse} disabled={loading || text.trim().length < 40}
          style={{ background: loading ? "#2a2520" : "#3a2e18", color: loading ? "#4a4438" : G, border: `1px solid rgba(212,183,120,${loading ? 0.1 : 0.3})`, padding: "10px 24px", borderRadius: 2, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
          {loading ? "Analysing…" : "Analyse Scene"}
        </button>
        {text && <button onClick={() => { setText(""); setSceneBuffer(""); setAnalysis(null); }}
          style={{ background: "none", border: `1px solid #2a2520`, color: DIM, padding: "10px 16px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
          Clear
        </button>}
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#4a4438" }}>{wc} words</span>
      </div>
      {error && <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 3, padding: "14px 18px", fontSize: 13, color: "#f87171" }}>{error}</div>}
      {analysis && (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 16 }}>Paragraph Breakdown</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {analysis.paragraphs?.map((p, i) => (
                <div key={i} style={{ background: "rgba(0,0,0,0.25)", border: `1px solid ${p.weakness ? "rgba(248,113,113,0.15)" : "rgba(74,222,128,0.1)"}`, borderRadius: 3, padding: "16px 20px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                    <div style={{ fontSize: 10, color: G, letterSpacing: 2, textTransform: "uppercase" }}>¶{p.index}</div>
                    <div style={{ fontSize: 11, color: DIM, fontStyle: "italic" }}>{p.function}</div>
                  </div>
                  <div style={{ fontSize: 13, color: "#7a7060", fontStyle: "italic", marginBottom: 10 }}>"{p.text}…"</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ fontSize: 13, color: "#4ade80", lineHeight: 1.6 }}>↑ {p.strength}</div>
                    {p.weakness && <div style={{ fontSize: 13, color: "#f87171", lineHeight: 1.6 }}>↓ {p.weakness}</div>}
                    <div style={{ fontSize: 12, color: DIM, lineHeight: 1.6, borderTop: `1px solid ${BORDER}`, paddingTop: 6, marginTop: 2 }}>Movement: {p.movement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 16 }}>Scene Assessment</div>
            <ScoreCard scores={analysis.scene.scores} total={analysis.scene.total} />
            {[
              ["Engine", analysis.scene.engine],
              ["What Changes", analysis.scene.what_changes],
              ["Central Issue", analysis.scene.central_issue],
              ["Next Paragraph Should…", analysis.scene.next_paragraph],
            ].map(([label, content]) => content && (
              <div key={label} style={{ borderLeft: `2px solid ${label === "Central Issue" ? "#f87171" : G}`, paddingLeft: 16, marginBottom: 14 }}>
                <div style={{ fontSize: 10, letterSpacing: 2, color: DIM, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.8, color: "#b0a898" }}>{content}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── ANALYSIS ─────────────────────────────────────────────────────────────────

function Analysis({ apiKey, model, onXp }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyse = async () => {
    if (!text.trim() || text.trim().length < 20) return;
    if (!apiKey) { setError("Add your Groq API key in Settings first."); return; }
    setLoading(true); setError(null); setResult(null);
    try {
      const raw = await callGroq(apiKey, model, ANALYSIS_SYSTEM, `Analyse this:\n\n${text}`);
      const data = parseJSON(raw);
      setResult(data);
      onXp(data.total ? Math.round(data.total / 2) : 10, null);
    } catch (e) {
      setError(e.message || "Analysis failed.");
    }
    setLoading(false);
  };

  const wc = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ fontSize: 14, color: DIM, lineHeight: 1.7 }}>Paste a paragraph or passage from your own work for close structural analysis.</div>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your prose here…" rows={9}
        style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 3, color: "#e0d8cc", fontFamily: "'Lora', serif", fontSize: 16, lineHeight: 1.8, padding: "16px", resize: "vertical", outline: "none", width: "100%", boxSizing: "border-box" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={analyse} disabled={loading || text.trim().length < 20}
          style={{ background: loading ? "#2a2520" : "#3a2e18", color: loading ? "#4a4438" : G, border: `1px solid rgba(212,183,120,${loading ? 0.1 : 0.3})`, padding: "10px 24px", borderRadius: 2, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
          {loading ? "Reading…" : "Analyse Prose"}
        </button>
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#4a4438" }}>{wc} words</span>
      </div>
      {error && <div style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 3, padding: "14px 18px", fontSize: 13, color: "#f87171" }}>{error}</div>}
      {result && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <ScoreCard scores={result.scores} total={result.total} />
          {[["Rhythm", result.rhythm], ["Implication", result.implication], ["Detail", result.detail], ["Movement", result.movement]].map(([label, content]) => content && (
            <div key={label} style={{ borderLeft: `2px solid ${G}`, paddingLeft: 16 }}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: DIM, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.8, color: "#b0a898" }}>{content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [mode, setMode] = useState("home");
  const [apiKey, setApiKey] = useState(() => { try { return localStorage.getItem("groq_key") || ""; } catch { return ""; } });
  const [model, setModel] = useState(() => { try { return localStorage.getItem("groq_model") || GROQ_MODELS[0].id; } catch { return GROQ_MODELS[0].id; } });
  const [cardIdx, setCardIdx] = useState(0);
  const [promptIdx, setPromptIdx] = useState(0);
  const [xp, setXp] = useState(() => { try { return parseInt(localStorage.getItem("lf_xp") || "0"); } catch { return 0; } });
  const [history, setHistory] = useState([]);
  const [sceneBuffer, setSceneBuffer] = useState("");
  const [cardStats, setCardStats] = useState({ got: 0 });
  const [exerciseTab, setExerciseTab] = useState("seed");

  const saveKey = (k) => { setApiKey(k); try { localStorage.setItem("groq_key", k); } catch {} };
  const saveModel = (m) => { setModel(m); try { localStorage.setItem("groq_model", m); } catch {} };

  const addXp = (n, feedbackData) => {
    const nx = xp + n;
    setXp(nx);
    try { localStorage.setItem("lf_xp", String(nx)); } catch {}
    if (feedbackData?.central_issue) {
      setHistory(h => [...h.slice(-9), feedbackData]);
    }
  };

  const addToScene = (text) => {
    setSceneBuffer(prev => prev ? prev + "\n\n" + text : text);
    setMode("scene");
  };

  const handleCard = (result) => {
    if (result === "Got it ✓") { setCardStats(s => ({ got: s.got + 1 })); addXp(15, null); }
    if (result === "Almost") addXp(5, null);
    setCardIdx(i => (i + 1) % THEORY_CARDS.length);
  };

  const level = Math.floor(xp / 100) + 1;
  const levelXp = xp % 100;

  const nav = [
    { id: "home", label: "Home" },
    { id: "theory", label: "Theory" },
    { id: "exercises", label: "Exercises" },
    { id: "scene", label: "Scene" },
    { id: "analysis", label: "Analyse" },
    { id: "settings", label: "⚙" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: DARK, color: MID, fontFamily: "'Crimson Text', Georgia, serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Raleway:wght@300;400;600&display=swap');
        * { box-sizing: border-box; }
        html, body { height: 100%; overscroll-behavior: none; }
        body { padding-top: env(safe-area-inset-top); padding-bottom: env(safe-area-inset-bottom); }
        @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        textarea::placeholder { color: #3a3530; }
        textarea { -webkit-appearance: none; font-size: 16px !important; }
        input { -webkit-appearance: none; font-size: 16px !important; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0e0c0a; } ::-webkit-scrollbar-thumb { background: #2a2520; }
        details summary { list-style: none; } details summary::-webkit-details-marker { display: none; }
        select option { background: #1a1510; }
      `}</style>

      {/* Header */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: 9, letterSpacing: 5, color: "#5a5040", textTransform: "uppercase" }}>The Workshop</div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 15, color: G, marginTop: 1 }}>Literary Fiction Practice</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: 2, color: "#4a4438", textTransform: "uppercase" }}>Lv {level}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
              <div style={{ width: 60, height: 3, background: "#1a1810", borderRadius: 2 }}>
                <div style={{ width: `${levelXp}%`, height: "100%", background: G, borderRadius: 2, transition: "width 0.5s" }} />
              </div>
              <span style={{ fontSize: 9, color: "#6a5a38" }}>{xp} XP</span>
            </div>
          </div>
          <nav style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {nav.map(n => (
              <button key={n.id} onClick={() => setMode(n.id)} style={btn(mode === n.id)}>{n.label}</button>
            ))}
          </nav>
        </div>
      </div>

      {!apiKey && mode !== "settings" && (
        <div style={{ background: "rgba(212,183,120,0.08)", borderBottom: "1px solid rgba(212,183,120,0.2)", padding: "10px 20px", fontSize: 13, color: G, display: "flex", alignItems: "center", gap: 12 }}>
          <span>Add your free Groq API key to enable AI feedback.</span>
          <button onClick={() => setMode("settings")} style={{ background: "none", border: `1px solid ${G}`, color: G, padding: "4px 12px", borderRadius: 2, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>Set Up →</button>
        </div>
      )}

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "36px 20px", animation: "fadeIn 0.4s ease" }}>

        {mode === "settings" && (
          <Settings apiKey={apiKey} setApiKey={saveKey} model={model} setModel={saveModel} onDone={() => setMode("home")} />
        )}

        {mode === "home" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 14 }}>Daily Practice</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 24, color: "#e8dfc8", lineHeight: 1.4, marginBottom: 10 }}>Write every day.<br />See every sentence.</div>
              <div style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.75 }}>Paragraph structure exercises, AI-scored feedback, and a scene builder that chains your work into a whole.</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { id: "theory", icon: "◈", title: "Theory Cards", sub: `${THEORY_CARDS.length} cards — paragraph craft, scene structure, act theory` },
                { id: "exercises", icon: "✦", title: "Exercises", sub: "Seed prompts + AI-generated. Scored feedback with breakdown." },
                { id: "scene", icon: "◎", title: "Scene Builder", sub: "Write freely. AI breaks into paragraphs and analyses structure.", full: true },
                { id: "analysis", icon: "⊙", title: "Prose Autopsy", sub: "Paste your own work for scored analysis." },
              ].map(card => (
                <div key={card.id} onClick={() => setMode(card.id)}
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 3, padding: "20px 18px", cursor: "pointer", gridColumn: card.full ? "1 / -1" : "auto" }}>
                  <div style={{ fontSize: 16, color: G, marginBottom: 8 }}>{card.icon}</div>
                  <div style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#d0c8b8", marginBottom: 4 }}>{card.title}</div>
                  <div style={{ fontSize: 12, color: DIM, lineHeight: 1.6 }}>{card.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 20 }}>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 14, lineHeight: 1.85, color: "#5a5040", fontStyle: "italic", borderLeft: "1px solid #2a2520", paddingLeft: 16 }}>
                "Don't tell me the moon is shining; show me the glint of light on broken glass."
                <div style={{ marginTop: 6, fontStyle: "normal", fontSize: 11, color: "#3a3530", letterSpacing: 1 }}>— Anton Chekhov</div>
              </div>
            </div>
          </div>
        )}

        {mode === "theory" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Theory</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8" }}>Structure Flashcards</div>
              </div>
              <div style={{ textAlign: "right", fontSize: 11, color: "#4a4438" }}>
                <div>{cardIdx + 1} / {THEORY_CARDS.length}</div>
                <div style={{ marginTop: 4, color: "#4ade8080" }}>✓ {cardStats.got}</div>
              </div>
            </div>
            <FlashCard card={THEORY_CARDS[cardIdx]} onResult={handleCard} onSkip={() => setCardIdx(i => (i + 1) % THEORY_CARDS.length)} />
            <div style={{ display: "flex", gap: 2 }}>
              {THEORY_CARDS.map((_, i) => (
                <div key={i} onClick={() => setCardIdx(i)}
                  style={{ flex: 1, height: 3, borderRadius: 2, cursor: "pointer", background: i === cardIdx ? G : i < cardIdx ? "#3a3020" : "#1a1810", transition: "background 0.2s" }} />
              ))}
            </div>
          </div>
        )}

        {mode === "exercises" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Exercises</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8" }}>Paragraph Practice</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 2, borderBottom: `1px solid ${BORDER}`, paddingBottom: 0 }}>
              {[["seed", "Seed Prompts"], ["generate", "Generate New"]].map(([id, label]) => (
                <button key={id} onClick={() => setExerciseTab(id)}
                  style={{ background: "none", border: "none", borderBottom: `2px solid ${exerciseTab === id ? G : "transparent"}`, color: exerciseTab === id ? G : DIM, padding: "8px 16px", cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: -1 }}>
                  {label}
                </button>
              ))}
            </div>
            {exerciseTab === "seed" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {SEED_PROMPTS.map((p, i) => (
                    <button key={p.id} onClick={() => setPromptIdx(i)}
                      style={{ background: i === promptIdx ? "rgba(212,183,120,0.10)" : "none", border: `1px solid ${i === promptIdx ? "rgba(212,183,120,0.3)" : BORDER}`, color: i === promptIdx ? G : "#4a4438", padding: "4px 12px", borderRadius: 2, cursor: "pointer", fontFamily: "inherit", fontSize: 11 }}>
                      {p.title}
                    </button>
                  ))}
                </div>
                <Exercise key={SEED_PROMPTS[promptIdx].id} prompt={SEED_PROMPTS[promptIdx]} apiKey={apiKey} model={model} onXp={addXp} history={history} onAddToScene={addToScene} />
              </div>
            )}
            {exerciseTab === "generate" && (
              <GenerateExercise apiKey={apiKey} model={model} history={history} onXp={addXp} onAddToScene={addToScene} />
            )}
          </div>
        )}

        {mode === "scene" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Scene Builder</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8", marginBottom: 4 }}>Build & Analyse a Scene</div>
            </div>
            <SceneBuilder apiKey={apiKey} model={model} onXp={addXp} sceneBuffer={sceneBuffer} setSceneBuffer={setSceneBuffer} />
          </div>
        )}

        {mode === "analysis" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: 4, color: DIM, textTransform: "uppercase", marginBottom: 8 }}>Prose Autopsy</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: 22, color: "#e0d8c8", marginBottom: 4 }}>Analyse Your Own Writing</div>
            </div>
            <Analysis apiKey={apiKey} model={model} onXp={addXp} />
          </div>
        )}

      </div>
    </div>
  );
}
