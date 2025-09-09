export const projects = [
  {
    slug: 'information-efficient-ultrasound',
    title: 'Information-Efficient Ultrasound Sensing',
    description: 'Designing ultra-low-power pipeline for cardiovascular ultrasound by triggering bursts from PPG-derived heartbeat and reducing duty cycle without losing diagnostic signal fidelity.',
    tags: ['Research', 'Signal Processing', 'Healthcare Tech'],
    icon: 'fas fa-heartbeat',
    color: 'primary' as const,
    content: `
<h1>Cutting Power with Information Theory in Wearable Ultrasound</h1>
<h2>Role</h2>
<p>Lead researcher/engineer</p>
<h2>Dates</h2>
<p>2025—present</p>
<h2>TL;DR</h2>
<p>Designing an ultra-low-power pipeline for cardiovascular ultrasound by triggering bursts from a PPG-derived heartbeat and reducing duty cycle without losing diagnostic signal fidelity.</p>
<h2>Context</h2>
<p>Wearable ultrasound is data- and power-hungry. Always-on excitation and sampling waste energy.</p>
<h2>My Tasks</h2>
<p>Problem framing; modeling SNR vs. duty-cycle; designing PPG→ultrasound trigger; firmware sample-gating; analysis pipeline; experiments on phantoms.</p>
<h2>Methods & Stack</h2>
<p>PZT transducers; analog front-end; matched-filtering; burst excitation; R-wave gating (PPG proxy); mutual information estimates for feature retention; Python (NumPy/SciPy/Matplotlib); embedded C for timing; energy accounting.</p>
<h2>Key Contributions</h2>
<p>tbc</p>
<h2>Results/Impact</h2>
<p>tbc</p>
<h2>Challenges & Lessons</h2>
<p>tbc</p>
<h2>Artifacts</h2>
<p>tbc</p>
<h2>What's Next</h2>
<p>tbc</p>
    `
  },
  {
    slug: 'wearable-ultrasound-cardiovascular',
    title: 'Wearable Ultrasound Cardiovascular Sensor',
    description: 'Developing a wearable sensor to continuously monitor blood pressure using ultrasound echoes. Addressed challenges in transducer selection, acoustic coupling, phantom design, and analog front-end prototyping.',
    tags: ['Hardware', 'Medical Device', 'Signal Processing'],
    icon: 'fas fa-stethoscope',
    color: 'secondary' as const,
    content: `
<h1>Wearable Ultrasound-Based Blood Pressure Monitoring</h1>
<h2>Role</h2>
<p>Hardware Engineer, Prof. James Landay's HCI Lab (Co-Director, Stanford HAI)</p>
<h2>Dates</h2>
<p>March 2025—present</p>
<h2>Overview</h2>
<p>Developing a wearable sensor to continuously monitor blood pressure using ultrasound echoes. Addressed challenges in transducer selection, acoustic coupling, phantom design, and analog front-end (AFE) prototyping, while building Python pipelines for simulation and signal analysis.</p>
<h2>Key Contributions</h2>
<ul>
<li>Characterized PZT transducers with impedance sweeps; optimized resonance/Q factors for efficient drive frequencies.</li>
<li>Designed agarose/silicone vascular phantoms to mimic tissue attenuation and scattering, enabling repeatable test conditions.</li>
<li>Scoped AFE architecture with gain/noise tradeoff analysis; early layout decisions for low-noise, low-power operation.</li>
<li>Built Python workflows for filtering, envelope detection, and SNR analysis; validated feature stability across distances.</li>
</ul>
<h2>Impact</h2>
<p>Established repeatable phantom protocols and reliable ultrasound signatures, forming the foundation for next-stage energy-aware designs and multimodal fusion with optical sensors.</p>
<h2>Challenges & Lessons</h2>
<p>Tackled acoustic coupling drift, motion artifacts, and trade-offs between burst vs. continuous-wave excitation. Learned to balance hardware robustness with physiological realism.</p>
<h2>Artifacts</h2>
<p>Poster and presentation slides.</p>
<h2>What's Next</h2>
<p>Integrating PPG triggers, refining AFE + enclosure design, and running user studies toward a wearable prototype.</p>
    `
  },
  {
    slug: 'eeg-code-switching-research',
    title: 'EEG Code-Switching Research',
    description: 'Using EEG to study French↔English code-switching; built end-to-end preprocessing (artifact rejection, epoching, baseline) and ERP (N400) analysis; exploring transformer-based token/context predictors for switch likelihood.',
    tags: ['Neuroscience', 'Research', 'Signal Processing'],
    icon: 'fas fa-brain',
    color: 'accent' as const,
    content: `
<h1>Neural Signatures of Bilingual Code-Switching</h1>
<h2>Role</h2>
<p>Programmer/RA; experiment ops, preprocessing, analysis</p>
<h2>Dates</h2>
<p>Jan 2025—present</p>
<h2>TL;DR</h2>
<p>Using EEG to study French↔English code-switching; built end-to-end preprocessing (artifact rejection, epoching, baseline) and ERP (N400) analysis; exploring transformer-based token/context predictors for switch likelihood.</p>
<h2>Context</h2>
<p>How brain responses shift when speakers switch languages mid-sentence.</p>
<h2>My Tasks</h2>
<p>IRB/ops support; 50+ hours data collection; MATLAB/ERP-Studio pipeline; scripts for ICA/ASR, channel interpolation, epoching, and condition contrasts; preliminary modeling.</p>
<h2>Methods & Stack</h2>
<p>MATLAB, ERP-Studio; Python prototypes; event-aligned ERP averaging.</p>
<h2>Key Contributions</h2>
<ul>
<li>Reusable preprocessing toolkit + tutorial docs for new RAs.</li>
<li>Robust N400 extraction over switch vs. non-switch contexts.</li>
</ul>
<h2>Results/Impact</h2>
<p>Clean datasets and figures ready for internal presentations; foundation for publication-grade analyses.</p>
<h2>Challenges & Lessons</h2>
<p>Muscle/eye artifacts; bilingual balance; trigger timings; inter-subject variability.</p>
<h2>Artifacts</h2>
<p>Preprocessing scripts; ERP figures; slides</p>
<h2>What's Next</h2>
<p>Cross-lingual generalization and time–frequency analyses.</p>
    `
  },
  {
    slug: 'hk-productivity-council-robotics',
    title: 'HK Productivity Council — Robotics & AI Intern',
    description: 'Built transformer models on magnetic flux leakage data for rope defect regression/classification; trained YOLO for defect/PPE detection; shipped a Flask UI for technician reports; wrote a gov-standard AI architecture report.',
    tags: ['AI/ML', 'Computer Vision', 'Industry'],
    icon: 'fas fa-robot',
    color: 'primary' as const,
    content: `
<h1>Predictive Maintenance for Peak Tram + PPE Detection</h1>
<h2>Role</h2>
<p>Robotics/AI intern in the Robotics & AI division</p>
<h2>Dates</h2>
<p>Jun–Aug 2024</p>
<h2>TL;DR</h2>
<p>Built transformer models on magnetic flux leakage data for rope defect regression/classification; trained YOLO for defect/PPE detection; shipped a Flask UI for technician reports; wrote a gov-standard AI architecture report; presented to stakeholders.</p>
<h2>My Tasks</h2>
<p>Data prep; model design; eval; UI prototyping; client demos; report authoring; conference presentations.</p>
<h2>Methods & Stack</h2>
<p>Transformers (time series), YOLO, Python/Flask, OpenCV; SAM/NeRF literature scan for future diagnostics; stakeholder interviews.</p>
<h2>Key Contributions</h2>
<ul>
<li>Improved early defect prediction with supervised baselines + transformers.</li>
<li>Deployed YOLO pipelines to flag rope defects and PPE compliance in construction settings.</li>
<li>Built a simple report-generator UI to streamline workflows.</li>
<li>Authored compliance-minded architecture report for public-sector standards.</li>
</ul>
<h2>Results/Impact</h2>
<p>Better inspection coverage; faster technician handoffs; stronger safety posture.</p>
<h2>Challenges & Lessons</h2>
<p>Dataset drift; labeling noise; integrating CV predictions into daily operations.</p>
<h2>Artifacts</h2>
<p>Demo videos, Flask UI screenshots, internal reports.</p>
<h2>What's Next</h2>
<p>On-device models; active-learning loop with technician feedback.</p>
    `
  },
  {
    slug: 'slac-stanford-energy-genai',
    title: 'SLAC x Stanford Energy — GenAI & Grid Cybersecurity',
    description: 'Analyzed how LLMs lower attacker barriers (phishing, exploit scaffolding) and how they can bolster defense (anomaly detection, playbook automation). Produced state-of-the-union report, mapped opportunities.',
    tags: ['Cybersecurity', 'AI', 'Energy'],
    icon: 'fas fa-shield-alt',
    color: 'secondary' as const,
    content: `
<h1>Generative AI Risks & Defenses for the Electric Grid</h1>
<h2>Role</h2>
<p>Student researcher + Energy Club project member</p>
<h2>Dates</h2>
<p>Jan – Mar 2024</p>
<h2>TL;DR</h2>
<p>Analyzed how LLMs lower attacker barriers (phishing, exploit scaffolding) and how they can bolster defense (anomaly detection, playbook automation). Produced state-of-the-union report, mapped opportunities, and proposed digital twins, honeypots, and SOC workflows tailored to grid ops.</p>
<h2>My Tasks</h2>
<p>Literature/state-survey; IoT/smart-meter threat analysis; scenario design; stakeholder readouts.</p>
<h2>Methods & Stack</h2>
<p>Red/blue-team mental models; evaluation rubrics for LLM assistance; data-flow diagrams.</p>
<h2>Key Contributions</h2>
<ul>
<li>Clear taxonomy of attack/defense LLM use cases in grid contexts.</li>
<li>Decision frameworks for operator adoption under safety/regulatory constraints.</li>
<li>Briefings to peers; templates for pilot studies.</li>
</ul>
<h2>Results/Impact</h2>
<p>Sharpened understanding of risks; concrete pilots proposed.</p>
<h2>Challenges & Lessons</h2>
<p>Hallucination risk; auditability; incident response timing.</p>
<h2>Artifacts</h2>
<p>Report PDFs, slide decks</p>
<h2>What's Next</h2>
<p>tbc</p>
    `
  },
  {
    slug: 'cs107e-piano-tiles',
    title: 'CS107E — Bare-Metal "Piano Tiles"',
    description: 'Built a real-time rhythm game with no OS: precise timers, pixel-based animation, and MIDI sync to an electronic keyboard.',
    tags: ['Embedded', 'C Programming', 'Game Dev'],
    icon: 'fas fa-microchip',
    color: 'accent' as const,
    content: `
<h1>Piano Tiles on Microcontroller + MIDI</h1>
<h2>Role</h2>
<p>Low-level C programmer</p>
<h2>Dates</h2>
<p>Nov 2024</p>
<h2>TL;DR</h2>
<p>Built a real-time rhythm game with no OS: precise timers, pixel-based animation, and MIDI sync to an electronic keyboard.</p>
<h2>My Tasks</h2>
<p>Timer config; debouncing; fixed-point math; MIDI parser; frame pacing; LED driver over SPI.</p>
<h2>Methods & Stack</h2>
<p>C, register-level I/O, MIDI protocol, SPI LEDs, logic analyzer.</p>
<h2>Key Contributions</h2>
<p>Deterministic timing loop; decoupled MIDI ISR from render; tooling for latency/jitter profiling.</p>
<h2>Results/Impact</h2>
<p>Smooth gameplay; accurate note alignment; lab demo success.</p>
<h2>Challenges & Lessons</h2>
<p>ISR priority inversions; tight RAM/stack budgets.</p>
<h2>Artifacts</h2>
<p>Video demo; code snippets; timing plots.</p>
<h2>What's Next</h2>
<p>tbc</p>
    `
  },
  {
    slug: 'bioe-70q-earpop-buddy',
    title: 'BIOE 70Q — EarPop Buddy',
    description: '3D-printed modular trainer addressing over-pressurization risks: whistle feedback for too-hard exhalation and age-scaled balloon boxes tuned to typical lung capacities.',
    tags: ['Bioengineering', 'Medical Device', 'Design'],
    icon: 'fas fa-heartbeat',
    color: 'primary' as const,
    content: `
<h1>Safe Ear-Pressure Trainer for Kids</h1>
<h2>Role</h2>
<p>Designer + prototyper</p>
<h2>Dates</h2>
<p>Mar 2025</p>
<h2>TL;DR</h2>
<p>3D-printed modular trainer addressing over-pressurization risks: whistle feedback for too-hard exhalation and age-scaled balloon boxes tuned to typical lung capacities; built simple instructional site.</p>
<h2>My Tasks</h2>
<p>CAD + 3D print; airflow experiments; user-centric design; quick web copy.</p>
<h2>Methods & Stack</h2>
<p>CAD + 3D print; airflow experiments; user-centric design; quick web copy.</p>
<h2>Key Contributions</h2>
<p>Mechanism that constrains pressure mechanically; fun feedback for adherence; low-cost parts.</p>
<h2>Results/Impact</h2>
<p>Safer practice for Valsalva-style exercises; easier parental supervision.</p>
<h2>Challenges & Lessons</h2>
<p>tbc</p>
<h2>Artifacts</h2>
<p>tbc</p>
<h2>What's Next</h2>
<p>Pressure sensing + mobile companion app.</p>
    `
  },
  {
    slug: 'stanford-space-initiative-picubed',
    title: 'Stanford Space Initiative — PiCubed Avionics',
    description: 'Engineering the PiCubed avionics board, the satellite\'s core flight computer based on the RP2350 microcontroller. Focused on watchdog reliability, SPI/LED subsystem integration, and board-level debugging.',
    tags: ['Aerospace', 'Avionics', 'Systems'],
    icon: 'fas fa-satellite',
    color: 'secondary' as const,
    content: `
<h1>Stanford CubeSat (Launch: Jan 2026)</h1>
<h2>Role</h2>
<p>Avionics Engineer</p>
<h2>Dates</h2>
<p>Dec 2024—Present</p>
<h2>Overview</h2>
<p>Engineering the PiCubed avionics board, the satellite's core flight computer based on the RP2350 microcontroller. Focused on watchdog reliability, SPI/LED subsystem integration, and board-level debugging under space-grade reliability constraints.</p>
<h2>Key Contributions</h2>
<ul>
<li>Firmware Bring-Up: Brought the RP2350 stack online; implemented watchdog timer logic and verified reset recovery under injected fault conditions.</li>
<li>Debug & Visibility: Developed SPI-driven Neopixel LED system to visualize board states in real time, easing test and integration workflows.</li>
<li>Board-Level Reliability: Ran systematic fault-injection experiments; validated recovery paths and watchdog coverage.</li>
<li>Test Infrastructure: Designed early regression test harness concepts, bridging firmware and hardware to accelerate bring-up cycles.</li>
</ul>
<h2>Impact</h2>
<p>Increased fault tolerance and observability of the PiCubed avionics stack, improving test throughput and confidence in board stability ahead of flight integration.</p>
<h2>Challenges & Lessons</h2>
<p>tbc</p>
<h2>Artifacts</h2>
<p>Integration notes, debug logs, board test demos.</p>
<h2>What's Next</h2>
<p>Build automated test equipment (ATE) harness for regression campaigns, add telemetry hooks, and contribute to CubeSat-level systems integration and flight-readiness reviews.</p>
    `
  },
  {
    slug: 'stanford-robotics-calligraphy',
    title: 'Stanford Robotics Club — Robotic Calligraphy',
    description: 'Converted a 3D printer into a robotic calligraphy system by hijacking its stepper motors and limit switches. Built control pipelines to reproduce human brush strokes.',
    tags: ['Robotics', 'Controls', 'Cultural Heritage'],
    icon: 'fas fa-paint-brush',
    color: 'accent' as const,
    content: `
<h1>Chinese Calligraphy Robot</h1>
<h2>Role</h2>
<p>Hardware & Controls Engineer</p>
<h2>Dates</h2>
<p>2024—Present</p>
<h2>Overview</h2>
<p>Converted a 3D printer into a robotic calligraphy system by hijacking its stepper motors and limit switches. Built control pipelines to reproduce human brush strokes and designed hardware to support authentic Chinese calligraphy workflows.</p>
<h2>Key Contributions</h2>
<ul>
<li>Machine Repurposing: Rewired the printer's motion system, using only stepper motors + limit switches for homing and calibration. Controlled motion directly via serial (RPi ↔ Arduino IDE firmware), bypassing G-code.</li>
<li>Control & Planning: Implemented coordinate-based movement (x, y, z) for precise brush placement; synchronized stroke sequences to mimic pen-plotter behavior.</li>
<li>Human Data Capture: Built input system to record human pen trajectories; paired with camera feedback to detect unwritten grid boxes on paper.</li>
<li>Hardware Mods: 3D-printed a brush holder and auto-refill station to dip the pen in water/ink between strokes.</li>
<li>Embedded Integration: Developed microcontroller firmware and serial communication for real-time command execution and debugging.</li>
</ul>
<h2>Impact</h2>
<p>Demonstrated a low-cost platform that merges robotics, embedded systems, and cultural heritage. Used in demos to showcase how machines can preserve and reinterpret human artistry.</p>
<h2>Challenges & Lessons</h2>
<p>tbc</p>
<h2>Artifacts</h2>
<p>tbc</p>
<h2>What's Next</h2>
<p>Adding force-sensing brush tips for pressure-aware strokes and style-transfer algorithms to replay captured calligrapher signatures.</p>
    `
  },
  {
    slug: 'eesw-severn-tunnel-crack-detection',
    title: 'EESW — Severn Tunnel Crack Detection',
    description: 'Built a TensorFlow CNN and OpenCV pipeline to detect tunnel cracks from video; recognized by industry and invited by Aston Martin\'s COO to visit the factory; awarded Wales Engineering Student of the Year.',
    tags: ['Computer Vision', 'Infrastructure', 'Award'],
    icon: 'fas fa-mountain',
    color: 'primary' as const,
    content: `
<h1>Automating Tunnel Safety with CNNs</h1>
<h2>Role</h2>
<p>Assistant engineer (student team)</p>
<h2>Dates</h2>
<p>2021–2022</p>
<h2>TL;DR</h2>
<p>Built a TensorFlow CNN and OpenCV pipeline to detect tunnel cracks from video; recognized by industry and invited by Aston Martin's COO to visit the factory; awarded Wales Engineering Student of the Year among ~600 applicants.</p>
<h2>My Tasks</h2>
<p>Data capture; grayscale/denoise; patch extraction; CNN training; onsite tests on brick walls.</p>
<h2>Methods & Stack</h2>
<p>TensorFlow, OpenCV, Python, CNN architecture design.</p>
<h2>Key Contributions</h2>
<p>tbc</p>
<h2>Results/Impact</h2>
<p>Proof-of-concept that student ML can aid infrastructure safety; public recognition.</p>
<h2>Challenges & Lessons</h2>
<p>tbc</p>
<h2>Artifacts</h2>
<p>tbc</p>
<h2>What's Next</h2>
<p>Domain adaptation for low-light/wet surfaces; embedded inference.</p>
    `
  },
  {
    slug: 'tedx-biomimicry-talk',
    title: 'TEDxYouth@CardiffSixthFormCollege — Biomimicry Talk',
    description: 'Talk explored whale-fin aerodynamics → airplane efficiency and autonomous vehicles → congestion relief; argued for moving beyond brute industrial scaling to nature-inspired design; ~6k views.',
    tags: ['Public Speaking', 'BioMimicry', 'Design'],
    icon: 'fas fa-leaf',
    color: 'secondary' as const,
    content: `
<h1>Learning from Nature to Heal Nature</h1>
<h2>Role</h2>
<p>Founding member, speaker</p>
<h2>Dates</h2>
<p>2022</p>
<h2>TL;DR</h2>
<p>Talk explored whale-fin aerodynamics → airplane efficiency and autonomous vehicles → congestion relief; argued for moving beyond brute industrial scaling to nature-inspired design; ~6k views.</p>
<h2>Context</h2>
<p>tbc</p>
<h2>My Tasks</h2>
<p>tbc</p>
<h2>Methods & Stack</h2>
<p>tbc</p>
<h2>Key Contributions</h2>
<p>tbc</p>
<h2>Results/Impact</h2>
<p>tbc</p>
<h2>Challenges & Lessons</h2>
<p>tbc</p>
<h2>Artifacts</h2>
<p>Video link; slides.</p>
<h2>What's Next</h2>
<p>tbc</p>
    `
  }
]

export const researchProjects = [
  {
    slug: 'information-efficient-ultrasound-research',
    title: 'Information-Efficient Ultrasound Sensing',
    description: 'Designing ultra-low-power pipeline for cardiovascular ultrasound by triggering bursts from PPG-derived heartbeat and reducing duty cycle without losing diagnostic signal fidelity.',
    tags: ['Research', 'Signal Processing', 'Healthcare Tech'],
    icon: 'fas fa-heartbeat',
    color: 'primary' as const,
    content: `
# Cutting Power with Information Theory in Wearable Ultrasound

## Role
Lead researcher/engineer

## Dates
2025—present

## TL;DR
Designing an ultra-low-power pipeline for cardiovascular ultrasound by triggering bursts from a PPG-derived heartbeat and reducing duty cycle without losing diagnostic signal fidelity.

## Context
Wearable ultrasound is data- and power-hungry. Always-on excitation and sampling waste energy.

## My Tasks
Problem framing; modeling SNR vs. duty-cycle; designing PPG→ultrasound trigger; firmware sample-gating; analysis pipeline; experiments on phantoms.

## Methods & Stack
PZT transducers; analog front-end; matched-filtering; burst excitation; R-wave gating (PPG proxy); mutual information estimates for feature retention; Python (NumPy/SciPy/Matplotlib); embedded C for timing; energy accounting.

## Key Contributions
tbc

## Results/Impact
tbc

## Challenges & Lessons
tbc

## Artifacts
tbc

## What's Next
tbc
    `
  },
  {
    slug: 'eeg-code-switching-research',
    title: 'EEG Code-Switching Research',
    description: 'Using EEG to study French↔English code-switching; built end-to-end preprocessing (artifact rejection, epoching, baseline) and ERP (N400) analysis; exploring transformer-based token/context predictors for switch likelihood.',
    tags: ['Neuroscience', 'Research', 'Signal Processing'],
    icon: 'fas fa-brain',
    color: 'accent' as const,
    content: `
# Neural Signatures of Bilingual Code-Switching

## Role
Programmer/RA; experiment ops, preprocessing, analysis

## Dates
Jan 2025—present

## TL;DR
Using EEG to study French↔English code-switching; built end-to-end preprocessing (artifact rejection, epoching, baseline) and ERP (N400) analysis; exploring transformer-based token/context predictors for switch likelihood.

## Context
How brain responses shift when speakers switch languages mid-sentence.

## My Tasks
IRB/ops support; 50+ hours data collection; MATLAB/ERP-Studio pipeline; scripts for ICA/ASR, channel interpolation, epoching, and condition contrasts; preliminary modeling.

## Methods & Stack
MATLAB, ERP-Studio; Python prototypes; event-aligned ERP averaging.

## Key Contributions
- Reusable preprocessing toolkit + tutorial docs for new RAs.
- Robust N400 extraction over switch vs. non-switch contexts.

## Results/Impact
Clean datasets and figures ready for internal presentations; foundation for publication-grade analyses.

## Challenges & Lessons
Muscle/eye artifacts; bilingual balance; trigger timings; inter-subject variability.

## Artifacts
Preprocessing scripts; ERP figures; slides

## What's Next
Cross-lingual generalization and time–frequency analyses.
    `
  },
  {
    slug: 'wearable-ultrasound-cardiovascular-research',
    title: 'Wearable Ultrasound Cardiovascular Sensor',
    description: 'Developing a wearable sensor to continuously monitor blood pressure using ultrasound echoes. Addressed challenges in transducer selection, acoustic coupling, phantom design, and analog front-end prototyping.',
    tags: ['Hardware', 'Medical Device', 'Signal Processing'],
    icon: 'fas fa-stethoscope',
    color: 'secondary' as const,
    content: `
# Wearable Ultrasound-Based Blood Pressure Monitoring

## Role
Hardware Engineer, Prof. James Landay's HCI Lab (Co-Director, Stanford HAI)

## Dates
March 2025—present

## Overview
Developing a wearable sensor to continuously monitor blood pressure using ultrasound echoes. Addressed challenges in transducer selection, acoustic coupling, phantom design, and analog front-end (AFE) prototyping, while building Python pipelines for simulation and signal analysis.

## Key Contributions
- Characterized PZT transducers with impedance sweeps; optimized resonance/Q factors for efficient drive frequencies.
- Designed agarose/silicone vascular phantoms to mimic tissue attenuation and scattering, enabling repeatable test conditions.
- Scoped AFE architecture with gain/noise tradeoff analysis; early layout decisions for low-noise, low-power operation.
- Built Python workflows for filtering, envelope detection, and SNR analysis; validated feature stability across distances.

## Impact
Established repeatable phantom protocols and reliable ultrasound signatures, forming the foundation for next-stage energy-aware designs and multimodal fusion with optical sensors.

## Challenges & Lessons
Tackled acoustic coupling drift, motion artifacts, and trade-offs between burst vs. continuous-wave excitation. Learned to balance hardware robustness with physiological realism.

## Artifacts
Poster and presentation slides.

## What's Next
Integrating PPG triggers, refining AFE + enclosure design, and running user studies toward a wearable prototype.
    `
  }
]

export const coolIdeas = [
  {
    slug: 'fourier-transform',
    title: 'Fourier Transform',
    description: 'The mathematical magic that decomposes signals into their frequency components',
    icon: 'fas fa-wave-square',
    content: `
# The Fourier Transform: Mathematical Magic

## What is it?
The Fourier Transform is one of the most powerful mathematical tools ever developed, allowing us to decompose any signal into its constituent frequencies.

## Why it's Amazing
- Converts time domain to frequency domain
- Reveals hidden patterns in data
- Essential for digital signal processing
- Foundation of modern communications

## Real-World Applications
- MP3 compression
- MRI imaging
- Speech recognition
- Image processing

## The Beautiful Math
At its core, the Fourier Transform tells us that any periodic function can be expressed as a sum of sines and cosines.
    `
  },
  {
    slug: 'number-systems',
    title: 'Number Systems',
    description: 'How different bases reveal the structure and beauty of mathematics',
    icon: 'fas fa-calculator',
    content: `
# Number Systems: The Foundation of Mathematics

## Beyond Base 10
While we're used to decimal (base 10), exploring other number systems reveals fascinating mathematical structures.

## Binary (Base 2)
The language of computers, using only 0s and 1s to represent all information.

## Hexadecimal (Base 16)
Efficient representation for computer science, using digits 0-9 and letters A-F.

## Prime Bases
Using prime numbers as bases reveals interesting properties about divisibility and number theory.

## Why It Matters
Understanding different number systems deepens our appreciation for the arbitrary yet powerful nature of mathematical representation.
    `
  },
  {
    slug: 'invisible-hand',
    title: "Adam Smith's Invisible Hand",
    description: 'How individual self-interest can lead to collective benefit in market systems',
    icon: 'fas fa-hand-holding-usd',
    content: `
# The Invisible Hand: Economics' Most Famous Metaphor

## The Concept
Adam Smith's "invisible hand" describes how individual pursuit of self-interest can lead to beneficial outcomes for society as a whole.

## Market Mechanisms
- Price signals coordinate behavior
- Competition drives efficiency
- Supply and demand balance resources
- Innovation emerges from competition

## Modern Relevance
- Basis for free market economics
- Understanding market failures
- Role of regulation and intervention
- Applications to network effects and digital markets

## Philosophical Implications
The invisible hand raises profound questions about the relationship between individual agency and collective outcomes.
    `
  },
  {
    slug: 'le-chatelier-principle',
    title: "Le Chatelier's Principle",
    description: 'How systems respond to disturbances by seeking new equilibrium states',
    icon: 'fas fa-balance-scale',
    content: `
# Le Chatelier's Principle: The Art of Equilibrium

## The Principle
When a system in equilibrium is disturbed, it will shift to counteract the disturbance and establish a new equilibrium.

## Chemical Applications
- Predicting reaction behavior
- Optimizing industrial processes
- Understanding buffer systems
- Designing catalytic reactions

## Beyond Chemistry
This principle applies broadly:
- Economic markets
- Biological homeostasis
- Social systems
- Mechanical engineering

## Systems Thinking
Le Chatelier's principle teaches us to think about systems, feedback loops, and dynamic equilibrium in complex environments.
    `
  },
  {
    slug: 'information-theory',
    title: 'Information Theory',
    description: 'The mathematical framework for quantifying, storing, and communicating information',
    icon: 'fas fa-info-circle',
    content: `
# Information Theory: The Science of Communication

## Foundation
Developed by Claude Shannon, information theory provides the mathematical foundation for all digital communication.

## Key Concepts
- Entropy as a measure of information
- Channel capacity and limits
- Error correction and redundancy
- Compression algorithms

## Applications
- Internet protocols
- Data compression (ZIP, JPEG)
- Cryptography and security
- Machine learning and AI

## Philosophical Impact
Information theory changed how we think about knowledge, uncertainty, and the fundamental limits of communication.
    `
  },
  {
    slug: 'quantum-mechanics',
    title: 'Quantum Mechanics',
    description: 'The strange and wonderful world of quantum phenomena that defies classical intuition',
    icon: 'fas fa-atom',
    content: `
# Quantum Mechanics: Reality at the Smallest Scale

## The Quantum World
At atomic scales, particles behave in ways that completely contradict our everyday experience of reality.

## Key Phenomena
- Wave-particle duality
- Quantum superposition
- Entanglement and non-locality
- Uncertainty principle

## Modern Applications
- Quantum computing
- Quantum cryptography
- MRI and medical imaging
- Laser technology

## Philosophical Questions
Quantum mechanics raises profound questions about the nature of reality, measurement, and the role of consciousness in physics.
    `
  }
]

export const extracurriculars = [
  {
    name: 'Hong Kong Student Association (HKSA)',
    description: 'President 2425 - Leading cultural events and community building for Hong Kong students'
  },
  {
    name: 'Veritas Forum',
    description: 'Co-President 2526 - Exploring life\'s biggest questions through dialogue between faith and academia'
  },
  {
    name: 'Christian Union',
    description: 'Outreach - Building community and exploring faith in an academic environment'
  },
  {
    name: 'Stanford Healthcare Design Challenge',
    description: 'Marketing - Designing innovative solutions for healthcare challenges through interdisciplinary collaboration'
  },
  {
    name: 'Stanford Robotics Club',
    description: 'Hardware & Controls Engineer - Working on Chinese Calligraphy Robot project'
  },
  {
    name: 'Stanford Space Initiative',
    description: 'Avionics Engineer - Engineering PiCubed avionics board for CubeSat launch (Jan 2026)'
  },
  {
    name: 'Stanford Energy Club',
    description: 'Event Director - Organizing events and contributing to energy research projects'
  }
]
