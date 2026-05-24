const UNITS = [
{
  id: 'u1',
  icon: '⚡',
  title: 'Unit 1: Smart Sensor Basics',
  subtitle: '7 Hours — Introduction, Characteristics, Technologies, Digital Output',
  questions: [
    {
      q: 'Define Smart Sensor. Explain its architecture with block diagram and advantages over conventional sensors.',
      points: [
        { head: 'Definition', desc: 'A smart sensor is a sensor combined with processing electronics that can measure, process, and communicate data digitally.' },
        { head: 'Block Diagram Components', desc: 'Sensing element → Signal conditioner → ADC → Microprocessor → Memory → Communication interface → Output.' },
        { head: 'Self-Calibration', desc: 'Smart sensors can calibrate themselves automatically, reducing manual effort and errors.' },
        { head: 'Self-Diagnostics', desc: 'They detect their own faults and report errors, improving system reliability.' },
        { head: 'Digital Communication', desc: 'Output is digital (I2C, SPI, UART), easy to connect to microcontrollers and networks.' },
        { head: 'Embedded Processing', desc: 'Onboard processor filters noise, computes values, and makes local decisions.' },
        { head: 'Advantages over Conventional', desc: 'More accurate, noise resistant, easy to network, reduced wiring, intelligent output vs simple analog voltage.' }
      ]
    },
    {
      q: 'Differentiate between Sensor and Transducer with suitable examples and applications.',
      points: [
        { head: 'Sensor Definition', desc: 'A device that detects a physical quantity and responds to it — output may be electrical or non-electrical.' },
        { head: 'Transducer Definition', desc: 'A device that converts one form of energy to another — always produces an electrical output from physical input.' },
        { head: 'Key Difference', desc: 'All transducers can be sensors but not all sensors are transducers. Sensor detects; transducer converts.' },
        { head: 'Sensor Examples', desc: 'LDR (light), Thermocouple (heat), Microphone (sound) — detect and respond to physical change.' },
        { head: 'Transducer Examples', desc: 'Piezoelectric crystal (pressure → voltage), Loudspeaker (electrical → sound), Strain gauge.' },
        { head: 'Application — Sensor', desc: 'Temperature sensing in weather stations using thermistor — gives resistance change.' },
        { head: 'Application — Transducer', desc: 'Ultrasonic sensor (transducer) in parking assist — converts electrical to ultrasound and back.' }
      ]
    },
    {
      q: 'Explain the nature of sensors and discuss desirable characteristics of an ideal sensor.',
      points: [
        { head: 'Nature of Sensors', desc: 'Sensors interact with the physical world and convert measurands (temperature, pressure, light) into measurable signals.' },
        { head: 'Sensitivity', desc: 'Ratio of change in output to change in input. High sensitivity = detects small changes.' },
        { head: 'Selectivity', desc: 'Ability to respond only to the target measurand and ignore interference.' },
        { head: 'Accuracy', desc: 'Closeness of measured value to true value. Expressed as % of full-scale reading.' },
        { head: 'Repeatability', desc: 'Same output for same input under same conditions — essential for reliability.' },
        { head: 'Wide Range', desc: 'Should measure over a broad range without loss of accuracy.' },
        { head: 'Low Cost & Robustness', desc: 'Economical to manufacture and should withstand harsh environments.' }
      ]
    },
    {
      q: 'Explain static and dynamic characteristics of sensors: sensitivity, accuracy, precision, linearity, hysteresis, resolution and drift.',
      points: [
        { head: 'Sensitivity', desc: 'Change in output per unit change in input. E.g., 5mV/°C means 5mV output change for 1°C change.' },
        { head: 'Accuracy & Precision', desc: 'Accuracy = closeness to true value. Precision = repeatability. A sensor can be precise but not accurate.' },
        { head: 'Linearity', desc: 'How closely output follows a straight line across the range. Non-linearity = deviation from ideal line.' },
        { head: 'Hysteresis', desc: 'Different outputs for same input when approached from different directions (increasing vs decreasing).' },
        { head: 'Resolution', desc: 'Smallest change in input detectable by the sensor. E.g., 0.1°C resolution thermometer.' },
        { head: 'Drift', desc: 'Slow change in output over time without any input change — caused by aging, temperature.' },
        { head: 'Dynamic Characteristics', desc: 'Response time, rise time, bandwidth — how fast sensor responds to changing inputs.' }
      ]
    },
    {
      q: 'Discuss different sensing technologies used in smart sensors.',
      points: [
        { head: 'Resistive Sensing', desc: 'Resistance changes with measurand — e.g., thermistors (temp), strain gauges (force), LDR (light).' },
        { head: 'Capacitive Sensing', desc: 'Capacitance changes with displacement, humidity, proximity — used in touchscreens, pressure sensors.' },
        { head: 'Inductive Sensing', desc: 'Inductance changes with position of magnetic material — used in proximity and position sensors.' },
        { head: 'Piezoelectric Sensing', desc: 'Crystal generates voltage when mechanically stressed — used in accelerometers, microphones.' },
        { head: 'Optical Sensing', desc: 'Light-based detection using photodiodes, LDRs — used in presence, distance, color detection.' },
        { head: 'Thermoelectric Sensing', desc: 'Seebeck effect — voltage generated at junction of two dissimilar metals — e.g., thermocouples.' },
        { head: 'MEMS Technology', desc: 'Micro Electro Mechanical Systems — tiny sensors integrated on chips — accelerometers, gyroscopes.' }
      ]
    },
    {
      q: 'Explain digital output sensors and compare them with analog sensors.',
      points: [
        { head: 'Digital Output Sensor', desc: 'Produces discrete binary output (0 or 1) or serial data (I2C, SPI) — directly readable by microcontrollers.' },
        { head: 'Examples of Digital Sensors', desc: 'DHT11 (temperature/humidity), PIR motion sensor, encoder, digital compass.' },
        { head: 'Analog Sensor Output', desc: 'Continuous voltage or current proportional to measurand — needs ADC to convert to digital.' },
        { head: 'Noise Immunity', desc: 'Digital sensors are more immune to electrical noise compared to analog sensors.' },
        { head: 'Long Distance Transmission', desc: 'Digital signals travel longer distances without degradation; analog signals degrade with distance.' },
        { head: 'Processing Required', desc: 'Analog needs external ADC; digital sensor has built-in ADC and processing.' },
        { head: 'Cost & Complexity', desc: 'Digital sensors cost more but simplify system design; analog cheaper but need extra circuitry.' }
      ]
    },
    {
      q: 'Draw and explain the block diagram of a smart sensing system.',
      points: [
        { head: 'Sensing Element', desc: 'Primary component that responds to physical stimulus — converts it to raw electrical signal.' },
        { head: 'Signal Conditioning', desc: 'Amplifies, filters, and adjusts the raw signal to remove noise and scale it properly.' },
        { head: 'Analog to Digital Converter (ADC)', desc: 'Converts conditioned analog signal to digital numbers for processing.' },
        { head: 'Microprocessor/DSP', desc: 'Processes digital data — applies calibration, compensation, and decision algorithms.' },
        { head: 'Memory', desc: 'Stores calibration data, lookup tables, and measured values temporarily or permanently.' },
        { head: 'Communication Interface', desc: 'Sends processed data to external systems — I2C, SPI, UART, wireless protocols.' },
        { head: 'Power Management', desc: 'Regulates power supply; sleep/wake modes for energy efficiency in battery-operated systems.' }
      ]
    },
    {
      q: 'Write short notes on: (a) Sensor characteristics (b) Sensor selection criteria',
      points: [
        { head: '(a) Static Characteristics', desc: 'Sensitivity, accuracy, range, resolution, linearity, hysteresis — describe steady-state behavior.' },
        { head: '(a) Dynamic Characteristics', desc: 'Response time, bandwidth, rise time — describe how sensor reacts to changing inputs over time.' },
        { head: '(b) Measurand Type', desc: 'Select sensor based on what is being measured — temperature, pressure, light, motion, etc.' },
        { head: '(b) Range & Sensitivity', desc: 'Sensor range must cover expected measurand range with adequate sensitivity.' },
        { head: '(b) Environmental Conditions', desc: 'Operating temperature, humidity, vibration — sensor must be rated for the environment.' },
        { head: '(b) Output Compatibility', desc: 'Output type (analog/digital) must match the interfacing system (ADC resolution, protocol).' },
        { head: '(b) Cost & Power', desc: 'Total cost, power consumption, and availability from suppliers affect selection.' }
      ]
    }
  ],
  mcqs: [
    { q: 'A smart sensor differs from a conventional sensor by having:', opts: ['Only a sensing element', 'Embedded processing and communication', 'Higher physical size', 'No calibration needed'], ans: 1, explain: 'Smart sensors include onboard processing, memory, and communication interfaces along with the sensing element.' },
    { q: 'Which of the following is NOT a property of an ideal sensor?', opts: ['High sensitivity', 'High hysteresis', 'Wide range', 'Low drift'], ans: 1, explain: 'High hysteresis is undesirable — it means the sensor gives different outputs for same input depending on direction of change.' },
    { q: 'Hysteresis in a sensor refers to:', opts: ['Speed of response', 'Difference in output for same input approached from different directions', 'Minimum detectable change', 'Deviation from linear response'], ans: 1, explain: 'Hysteresis is the lag between increasing and decreasing input responses — same physical input gives different output.' },
    { q: 'The Seebeck effect is used in:', opts: ['Piezoelectric sensors', 'MEMS sensors', 'Thermocouples', 'Capacitive sensors'], ans: 2, explain: 'The Seebeck effect produces voltage at the junction of two dissimilar metals due to temperature difference — used in thermocouples.' },
    { q: 'Drift in a sensor is caused by:', opts: ['Fast input changes', 'Aging and temperature variations over time', 'High bandwidth operation', 'Digital conversion errors'], ans: 1, explain: 'Drift is a slow change in output without any change in input, mainly due to component aging, temperature effects.' },
    { q: 'Which communication interface is commonly used by digital output sensors?', opts: ['AM radio', 'I2C / SPI / UART', 'Ethernet only', 'Analog current loop only'], ans: 1, explain: 'Digital sensors use serial interfaces like I2C, SPI, or UART to communicate directly with microcontrollers.' },
    { q: 'Resolution of a sensor is defined as:', opts: ['Maximum measurand it can handle', 'Smallest detectable change in input', 'Speed of response', 'Its output voltage range'], ans: 1, explain: 'Resolution is the smallest change in input that produces a detectable change in output.' },
    { q: 'MEMS stands for:', opts: ['Micro Electronic Memory Systems', 'Micro Electro Mechanical Systems', 'Modular Electromagnetic Measuring Systems', 'Multi-Energy Microcontroller Systems'], ans: 1, explain: 'MEMS = Micro Electro Mechanical Systems — microscale devices combining electrical and mechanical components.' }
  ],
  notes: [
    { title: 'Key Definitions', items: ['Sensor: detects physical quantity', 'Transducer: converts one energy form to another', 'Smart Sensor: sensor + processor + communication', 'Measurand: quantity being measured'] },
    { title: 'Sensing Technologies', items: ['Resistive (thermistors, LDR)', 'Capacitive (touchscreens)', 'Inductive (proximity)', 'Piezoelectric (accelerometers)', 'Optical (photodiodes)', 'Thermoelectric (thermocouples)', 'MEMS (chip-scale)'] },
    { title: 'Static Characteristics', items: ['Sensitivity = ΔOutput/ΔInput', 'Accuracy: closeness to true value', 'Precision: repeatability', 'Linearity: straight-line response', 'Hysteresis: direction-dependent output', 'Resolution: smallest detectable change', 'Drift: slow output change over time'] },
    { title: 'Smart Sensor Block Diagram', items: ['1. Sensing element', '2. Signal conditioning', '3. ADC', '4. Microprocessor', '5. Memory', '6. Communication interface', '7. Power management'] }
  ]
},
{
  id: 'u2',
  icon: '🎯',
  title: 'Unit 2: Motion and Presence Sensors',
  subtitle: '7 Hours — Ultrasonic, Microwave, Capacitive, Optical Sensors',
  questions: [
    {
      q: 'Explain construction, working principle and applications of ultrasonic detectors with neat diagram.',
      points: [
        { head: 'Construction', desc: 'Consists of a transmitter (piezoelectric crystal) that emits ultrasonic pulses and a receiver that detects echoes.' },
        { head: 'Working Principle', desc: 'Transmitter emits 20kHz–200kHz sound pulses. These reflect off objects and return to receiver. Distance = (Speed × Time)/2.' },
        { head: 'Piezoelectric Element', desc: 'Crystal vibrates at ultrasonic frequency when AC voltage applied — converts electrical to mechanical energy.' },
        { head: 'Echo Detection', desc: 'Receiver detects reflected pulse. Time-of-flight (TOF) measured to calculate distance.' },
        { head: 'Range & Frequency', desc: 'Typical range: 2cm to 4m. Higher frequency = better resolution but shorter range.' },
        { head: 'Applications', desc: 'Parking sensors, liquid level measurement, robotic obstacle avoidance, industrial distance measurement.' },
        { head: 'Advantages', desc: 'Works in dark, transparent objects detection, not affected by object color — but affected by temperature.' }
      ]
    },
    {
      q: 'Describe the working of microwave motion detectors and explain Doppler principle.',
      points: [
        { head: 'Microwave Motion Detector', desc: 'Uses microwave radio frequency (typically 5.8GHz or 10.5GHz) to detect motion by Doppler shift.' },
        { head: 'Doppler Effect Principle', desc: 'When a wave source and observer are in relative motion, the received frequency differs from transmitted frequency.' },
        { head: 'Doppler Formula', desc: 'Δf = 2v·f₀/c where v = target velocity, f₀ = transmitted frequency, c = speed of light.' },
        { head: 'Working', desc: 'Transmitter emits continuous microwave signal. Moving object reflects it with frequency shift. Receiver detects the shift.' },
        { head: 'Advantages over PIR', desc: 'Works through walls and non-metallic materials; not affected by temperature changes.' },
        { head: 'Applications', desc: 'Security systems, automatic door openers, speed radar guns, industrial conveyor monitoring.' },
        { head: 'Limitation', desc: 'False triggers from vibration, fans — needs proper shielding. Cannot detect stationary objects.' }
      ]
    },
    {
      q: 'Explain capacitive occupancy detectors with construction and industrial applications.',
      points: [
        { head: 'Principle', desc: 'Measures change in capacitance caused by presence of a person or object near the sensing electrode.' },
        { head: 'Construction', desc: 'Two conductive plates form capacitor. Human body (high permittivity) near plates changes capacitance value.' },
        { head: 'Detection Method', desc: 'Capacitance change is converted to frequency or voltage change by oscillator circuit.' },
        { head: 'Self-Capacitance Mode', desc: 'Single electrode — measures capacitance between electrode and ground. Used in touchscreens.' },
        { head: 'Mutual-Capacitance Mode', desc: 'Two electrodes — transmitter and receiver. Finger disturbs field between them. Used in multi-touch.' },
        { head: 'Industrial Applications', desc: 'Liquid level sensing, people counting at entry points, non-contact object detection in production lines.' },
        { head: 'Advantages', desc: 'No mechanical wear, works through non-metallic barriers, sensitive to small changes, low power.' }
      ]
    },
    {
      q: 'Discuss the construction and working of optical presence sensors.',
      points: [
        { head: 'Types', desc: 'Three types: Through-beam, Retro-reflective, and Diffuse (proximity) sensors.' },
        { head: 'Through-Beam Type', desc: 'Transmitter and receiver on opposite sides. Object interrupts beam → detected. Longest range, most reliable.' },
        { head: 'Retro-Reflective Type', desc: 'Transmitter and receiver on same side. Beam reflects off retroreflector back to receiver. Object breaks beam.' },
        { head: 'Diffuse/Proximity Type', desc: 'Transmitter and receiver together. Emits light; if object is close it reflects light back to receiver.' },
        { head: 'Light Sources Used', desc: 'IR LED (most common), visible red or laser — IR avoids interference from ambient visible light.' },
        { head: 'Applications', desc: 'Object counting on conveyor belts, box detection, door-open sensors, liquid level in transparent containers.' },
        { head: 'Advantages', desc: 'Fast response, no physical contact, high accuracy, works at long distances with through-beam type.' }
      ]
    },
    {
      q: 'Compare ultrasonic, microwave and optical sensors used for motion detection.',
      points: [
        { head: 'Operating Principle', desc: 'Ultrasonic: sound reflection. Microwave: Doppler shift of RF waves. Optical: light beam interruption or reflection.' },
        { head: 'Frequency Used', desc: 'Ultrasonic: 20kHz–200kHz. Microwave: 5–24GHz. Optical: visible/IR light (300THz+).' },
        { head: 'Range', desc: 'Ultrasonic: up to 4m. Microwave: up to 15m+. Optical (through-beam): up to 30m+.' },
        { head: 'Penetration', desc: 'Microwave passes through walls/objects. Ultrasonic doesn't. Optical blocked by any opaque surface.' },
        { head: 'Affected By', desc: 'Ultrasonic: temperature, wind. Microwave: metallic reflections. Optical: dust, fog, ambient light.' },
        { head: 'Cost', desc: 'Ultrasonic: cheapest. Optical: moderate. Microwave: most expensive.' },
        { head: 'Best Application', desc: 'Ultrasonic: robots, tanks. Microwave: security. Optical: production line counting, precision detection.' }
      ]
    },
    {
      q: 'Explain motion sensing techniques used in industrial automation systems.',
      points: [
        { head: 'PIR (Passive Infrared)', desc: 'Detects infrared radiation from moving warm bodies — used in occupancy detection, lighting control.' },
        { head: 'Ultrasonic Sensing', desc: 'Measures time-of-flight of sound — used for distance measurement, obstacle avoidance in robots.' },
        { head: 'Inductive Proximity', desc: 'Detects metallic objects without contact using electromagnetic field — used in metal part counting.' },
        { head: 'Optical Sensing', desc: 'Through-beam or reflective — used in high-speed counting, part presence/absence on conveyors.' },
        { head: 'Encoder-Based Motion', desc: 'Rotary or linear encoders detect position and speed of motors — used in CNC machines, robotics.' },
        { head: 'Machine Vision', desc: 'Camera-based systems with image processing — detects motion, defects, and orientation of parts.' },
        { head: 'Advantages in Industry', desc: 'Reduces human intervention, increases speed and accuracy, enables 24/7 operation.' }
      ]
    },
    {
      q: 'Discuss the role of motion and presence sensors in security and surveillance systems.',
      points: [
        { head: 'PIR in Burglar Alarms', desc: 'Detects heat signature of intruder — passive, low power, standard in home security systems.' },
        { head: 'Microwave in Perimeter Security', desc: 'Detects movement through walls and non-metallic barriers — hard to fool, reliable in all weather.' },
        { head: 'Optical Barriers', desc: 'Laser or IR beam barriers at entry points — trigger alarm when beam is broken by intruder.' },
        { head: 'Video Motion Detection', desc: 'Camera-based software analyzes frame differences — detects and logs any movement in field of view.' },
        { head: 'Smart Integration', desc: 'Sensors connected to IoT gateways send alerts to smartphones — enables remote monitoring.' },
        { head: 'False Alarm Reduction', desc: 'Dual-technology sensors (PIR + microwave) reduce false alarms by requiring both to trigger.' },
        { head: 'Industrial CCTV Support', desc: 'Motion sensors trigger cameras to record only when motion detected — saves storage, power.' }
      ]
    },
    {
      q: 'Draw and explain occupancy detection system using smart sensors.',
      points: [
        { head: 'System Overview', desc: 'Combines PIR, ultrasonic, or capacitive sensors with a processor to determine room/area occupancy.' },
        { head: 'PIR Sensor', desc: 'Detects initial entry of a person by sensing body heat — wakes up the system from sleep mode.' },
        { head: 'Ultrasonic Verification', desc: 'Confirms presence even when person is stationary — overcomes PIR limitation with still people.' },
        { head: 'Counting Algorithm', desc: 'Directional sensing (entry vs exit) counts number of people in/out to maintain occupancy count.' },
        { head: 'MCU Processing', desc: 'Microcontroller reads sensor data, runs algorithm, and controls HVAC, lights, or access systems.' },
        { head: 'Applications', desc: 'Smart lighting (lights on/off with occupancy), HVAC control, conference room booking, fire evacuation.' },
        { head: 'Energy Savings', desc: 'Turning off systems in unoccupied areas can save 30–40% energy in commercial buildings.' }
      ]
    }
  ],
  mcqs: [
    { q: 'Ultrasonic sensors measure distance using:', opts: ['Doppler frequency shift', 'Time of flight of sound pulses', 'Capacitance change', 'Light reflection intensity'], ans: 1, explain: 'Distance = (Speed of sound × Time of flight) / 2. The sensor measures time for echo to return.' },
    { q: 'The Doppler effect in microwave motion detectors causes:', opts: ['Amplitude reduction of signal', 'Frequency shift of reflected signal', 'Phase reversal of signal', 'Attenuation of signal'], ans: 1, explain: 'Moving target reflects microwave with different frequency. The shift (Δf) is proportional to target velocity.' },
    { q: 'Capacitive sensors detect presence by measuring change in:', opts: ['Resistance', 'Inductance', 'Capacitance', 'Frequency'], ans: 2, explain: 'Human body has high permittivity. When near electrode, it changes the capacitance between plates.' },
    { q: 'Which optical sensor type has the longest detection range?', opts: ['Diffuse type', 'Retro-reflective type', 'Through-beam type', 'Proximity type'], ans: 2, explain: 'Through-beam type: transmitter and receiver are separate. No reflection loss, so longest range up to 30m+.' },
    { q: 'PIR sensors detect motion by sensing:', opts: ['Sound waves from moving objects', 'Infrared radiation emitted by warm bodies', 'Reflected microwave signals', 'Capacitance change near body'], ans: 1, explain: 'PIR = Passive Infrared. Detects change in IR radiation when warm body moves across sensor field.' },
    { q: 'Which sensor can detect motion through walls?', opts: ['Optical sensor', 'Ultrasonic sensor', 'Microwave sensor', 'PIR sensor'], ans: 2, explain: 'Microwave signals pass through non-metallic materials like walls, so microwave sensors detect through walls.' },
    { q: 'Dual-technology sensors in security systems combine:', opts: ['Ultrasonic + optical', 'PIR + microwave', 'Capacitive + ultrasonic', 'Temperature + motion'], ans: 1, explain: 'PIR + microwave combination reduces false alarms — both must trigger before alarm activates.' },
    { q: 'Ultrasonic sensors are typically affected by:', opts: ['Object color', 'Ambient light levels', 'Temperature and wind', 'Electromagnetic interference'], ans: 2, explain: 'Speed of sound varies with temperature. Wind can deflect sound pulses causing inaccurate readings.' }
  ],
  notes: [
    { title: 'Sensor Comparison Table', items: ['Ultrasonic: sound, 4m, cheap, temp affected', 'Microwave: RF, 15m, costly, passes walls', 'Optical: light, 30m, moderate, needs clear path', 'PIR: IR heat, 5m, cheapest, body heat only'] },
    { title: 'Doppler Equation', items: ['Δf = 2v·f₀/c', 'v = target speed', 'f₀ = transmitted frequency', 'c = speed of light (3×10⁸ m/s)', 'Higher speed = larger frequency shift'] },
    { title: 'Optical Sensor Types', items: ['Through-beam: separate TX/RX, longest range', 'Retro-reflective: TX+RX same side, reflector used', 'Diffuse: TX+RX together, reflects off object', 'All use IR LED as light source'] },
    { title: 'Security System Sensors', items: ['PIR: standard burglar alarm', 'Microwave: all-weather, through-wall', 'Laser barrier: perimeter protection', 'Dual-tech: reduces false alarms', 'Video motion: camera-based detection'] }
  ]
},
{
  id: 'u3',
  icon: '💡',
  title: 'Unit 3: Light and Temperature Sensors',
  subtitle: '7 Hours — Photodiode, Phototransistor, LDR, CCD, CMOS, Thermoelectric, Optical Temp',
  questions: [
    {
      q: 'Explain construction and operation of Photodiode with characteristics and applications.',
      points: [
        { head: 'Construction', desc: 'P-N junction diode with a window/lens to expose junction to light. Operated in reverse bias.' },
        { head: 'Working Principle', desc: 'Photons hit P-N junction → generate electron-hole pairs → minority carriers → reverse current (photocurrent).' },
        { head: 'Reverse Bias Operation', desc: 'Operated under reverse bias in photoconductive mode — current proportional to light intensity. Fast response.' },
        { head: 'Photovoltaic Mode', desc: 'No external bias — generates voltage proportional to light. Used in solar cells and precision instruments.' },
        { head: 'I-V Characteristics', desc: 'In dark: tiny leakage current. In light: current increases linearly with light intensity.' },
        { head: 'Speed', desc: 'Very fast response time (nanoseconds) — suitable for optical communication, fiber optics, laser detection.' },
        { head: 'Applications', desc: 'Optical fiber communication, remote controls, smoke detectors, medical instruments, barcode readers.' }
      ]
    },
    {
      q: 'Describe working of Phototransistor and compare it with Photodiode.',
      points: [
        { head: 'Construction', desc: 'BJT (NPN) with base region exposed to light through lens/window. Base terminal often left open.' },
        { head: 'Working', desc: 'Light generates base current → transistor amplifies → large collector current flows. Light controls transistor.' },
        { head: 'Gain', desc: 'Phototransistor provides current gain (hFE ≈ 100–1000) — much higher sensitivity than photodiode.' },
        { head: 'Speed Comparison', desc: 'Photodiode: faster (ns response). Phototransistor: slower (µs response) due to carrier storage in base.' },
        { head: 'Sensitivity Comparison', desc: 'Phototransistor is more sensitive (amplified output). Photodiode needs external amplifier for same.' },
        { head: 'Linearity', desc: 'Photodiode: better linearity. Phototransistor: less linear at high light levels due to saturation.' },
        { head: 'Applications', desc: 'Phototransistor: optocouplers, proximity switches, object detection. Photodiode: fiber optics, high-speed.' }
      ]
    },
    {
      q: 'Explain Photoresistor (LDR) with characteristics and applications.',
      points: [
        { head: 'Construction', desc: 'Semiconductor material (CdS or CdSe) zigzag track on insulating substrate with two metal contacts.' },
        { head: 'Working Principle', desc: 'Light hits semiconductor → generates free carriers → resistance decreases with increasing light intensity.' },
        { head: 'Dark vs Light Resistance', desc: 'Dark: resistance 1MΩ–10MΩ. Bright light: resistance drops to 100Ω–1kΩ. Large dynamic range.' },
        { head: 'Characteristics', desc: 'Slow response time (10ms–100ms). Non-linear response. Sensitive to visible light. Cheap.' },
        { head: 'Spectral Response', desc: 'CdS peaks at 540nm (green light). CdSe peaks at 720nm (red/near-IR). Not suitable for UV.' },
        { head: 'Applications', desc: 'Automatic street lights, camera exposure control, night lights, burglar alarms, garden lighting.' },
        { head: 'Limitations', desc: 'Slow response (not for high-speed), non-linear, contains Cadmium (RoHS restricted in some regions).' }
      ]
    },
    {
      q: 'Compare Photodiode, Phototransistor and Photoresistor.',
      points: [
        { head: 'Operating Principle', desc: 'Photodiode: photocurrent at P-N junction. Phototransistor: transistor amplified photocurrent. LDR: resistance change.' },
        { head: 'Speed', desc: 'Photodiode: fastest (ns). Phototransistor: medium (µs). LDR: slowest (10–100ms).' },
        { head: 'Sensitivity', desc: 'LDR: high sensitivity to visible light. Phototransistor: high gain (amplified). Photodiode: moderate, needs amp.' },
        { head: 'Output Type', desc: 'Photodiode: current. Phototransistor: current (amplified). LDR: resistance change.' },
        { head: 'Linearity', desc: 'Photodiode: most linear. Phototransistor: moderate. LDR: very non-linear.' },
        { head: 'Cost', desc: 'LDR: cheapest. Photodiode: moderate. Phototransistor: moderate.' },
        { head: 'Best Use Case', desc: 'Photodiode: fiber optics, speed. Phototransistor: optocouplers, switching. LDR: simple light/dark control.' }
      ]
    },
    {
      q: 'Explain CCD imaging sensors with neat diagram.',
      points: [
        { head: 'CCD Definition', desc: 'Charge-Coupled Device — array of photo-sensitive capacitors (pixels) that collect charge proportional to light.' },
        { head: 'Photoelectric Effect', desc: 'Each pixel absorbs photons → generates charge (electrons). More light = more charge collected.' },
        { head: 'Charge Transfer', desc: 'Charge is shifted row by row, column by column to output register — like a bucket brigade.' },
        { head: 'Output Register & ADC', desc: 'Output register converts charge to voltage serially. External ADC converts to digital pixel values.' },
        { head: 'Architecture', desc: 'Full-frame CCD: entire area light-sensitive. Interline CCD: alternate columns — faster readout.' },
        { head: 'Image Quality', desc: 'CCD: high image quality, low noise, high fill factor — preferred for astronomy, medical imaging.' },
        { head: 'Power Consumption', desc: 'CCD consumes more power than CMOS. Requires multiple supply voltages for charge transfer clocking.' }
      ]
    },
    {
      q: 'Describe construction and working of CMOS image sensors.',
      points: [
        { head: 'Construction', desc: 'Array of pixels on CMOS chip. Each pixel has photodiode + amplifier + address transistors — "active pixel sensor".' },
        { head: 'Active Pixel Design', desc: 'Each pixel independently amplifies and reads its signal — unlike CCD which shifts charge.' },
        { head: 'Working', desc: 'Photodiode collects charge → in-pixel amplifier converts to voltage → row/column address selects pixel → ADC converts.' },
        { head: 'On-Chip Integration', desc: 'ADC, timing, noise reduction, and image processing circuits all on same chip — reduces cost.' },
        { head: 'Rolling Shutter', desc: 'Rows read sequentially — causes "jello effect" in fast motion. Global shutter variant avoids this.' },
        { head: 'Low Power', desc: 'CMOS uses standard logic supply (1.8V–3.3V). Lower power than CCD — ideal for mobile devices.' },
        { head: 'Applications', desc: 'Smartphones, webcams, automotive cameras, drones, AR/VR headsets, security cameras.' }
      ]
    },
    {
      q: 'Compare CCD and CMOS imaging sensors.',
      points: [
        { head: 'Readout Method', desc: 'CCD: charge shifted sequentially to one output. CMOS: each pixel read individually via row/column addressing.' },
        { head: 'Image Quality', desc: 'CCD: better image quality, lower noise. CMOS: improving rapidly, now comparable in modern sensors.' },
        { head: 'Power Consumption', desc: 'CCD: higher power (multiple supply voltages). CMOS: lower power (single supply, standard logic).' },
        { head: 'Speed', desc: 'CMOS: faster readout due to parallel pixel addressing. CCD: slower serial readout.' },
        { head: 'Cost', desc: 'CMOS: cheaper (standard fab process). CCD: expensive (specialized fabrication).' },
        { head: 'Integration', desc: 'CMOS: ADC, processor can be on same chip. CCD: needs external chips for ADC and processing.' },
        { head: 'Application', desc: 'CCD: medical/scientific/astronomy. CMOS: smartphones, consumer cameras, automotive (90%+ market now).' }
      ]
    },
    {
      q: 'Explain construction and operation of thermoelectric temperature sensors.',
      points: [
        { head: 'Seebeck Effect Principle', desc: 'When two dissimilar metals are joined and junctions are at different temperatures, a voltage is produced.' },
        { head: 'Thermocouple Construction', desc: 'Two different metal wires (e.g., Iron-Constantan, Chromel-Alumel) joined at one end (hot junction).' },
        { head: 'Hot and Cold Junction', desc: 'Hot junction: measurement point. Cold junction (reference junction): at known temperature (0°C or measured separately).' },
        { head: 'Seebeck Coefficient', desc: 'EMF produced per degree temperature difference. e.g., Type K thermocouple: ~41 µV/°C.' },
        { head: 'Thermocouple Types', desc: 'Type K (Chromel-Alumel): -200°C to 1350°C. Type J: Iron-Constantan. Type T: Copper-Constantan.' },
        { head: 'Thermistor vs Thermocouple', desc: 'Thermistor: NTC/PTC resistor, more sensitive, small range. Thermocouple: wide range, less sensitive.' },
        { head: 'Applications', desc: 'Furnaces, turbines, kilns, industrial processes — anywhere requiring wide temperature range measurement.' }
      ]
    },
    {
      q: 'Discuss optical temperature sensors with applications.',
      points: [
        { head: 'Principle', desc: 'Every object emits infrared radiation proportional to its temperature — Stefan-Boltzmann law: P = εσT⁴.' },
        { head: 'Infrared (IR) Thermometer', desc: 'Lens focuses IR radiation from object onto detector. No contact needed — measures from a distance.' },
        { head: 'Thermopile Detector', desc: 'Array of thermocouples connected in series — converts IR radiation to voltage proportional to temperature.' },
        { head: 'Pyrometer', desc: 'Measures very high temperatures (>1000°C) by detecting visible/near-IR radiation from hot objects.' },
        { head: 'Fiber Optic Temperature Sensor', desc: 'Light travels through optical fiber to hot region. Fluorescence decay time indicates temperature.' },
        { head: 'Advantages', desc: 'Non-contact, fast response, measures moving/hazardous objects, works at extreme temperatures.' },
        { head: 'Applications', desc: 'Medical (ear/forehead thermometers), industrial (molten metal, glass), HVAC, firefighting, PCB inspection.' }
      ]
    },
    {
      q: 'Compare thermoelectric and optical temperature sensors.',
      points: [
        { head: 'Measurement Method', desc: 'Thermoelectric (thermocouple): contact measurement at junction. Optical (IR): non-contact, remote sensing.' },
        { head: 'Temperature Range', desc: 'Thermocouple: -200°C to 1750°C. IR sensor: -50°C to 3000°C (pyrometers higher).' },
        { head: 'Contact Requirement', desc: 'Thermocouple: must be in contact with object. IR sensor: completely non-contact measurement.' },
        { head: 'Response Time', desc: 'IR sensor: very fast (milliseconds). Thermocouple: seconds to minutes depending on mass.' },
        { head: 'Accuracy', desc: 'Thermocouple: ±1–2°C with cold junction compensation. IR sensor: ±1–2°C but affected by emissivity.' },
        { head: 'Cost', desc: 'Thermocouple: very cheap. IR thermometer: moderate. Pyrometer: expensive.' },
        { head: 'Applications', desc: 'Thermocouple: furnaces, engines. IR: medical, food safety, PCB testing, firefighting, moving objects.' }
      ]
    }
  ],
  mcqs: [
    { q: 'A photodiode is normally operated in:', opts: ['Forward bias', 'Reverse bias', 'Zero bias', 'Saturation region'], ans: 1, explain: 'Photodiode in reverse bias (photoconductive mode) gives current proportional to light intensity with fast response.' },
    { q: 'Phototransistor has higher sensitivity than photodiode because:', opts: ['It uses less power', 'It provides current amplification (gain)', 'It has smaller junction area', 'It works at higher voltages'], ans: 1, explain: 'Phototransistor amplifies photocurrent by its hFE gain (100–1000×), giving much higher output for same light.' },
    { q: 'In a photoresistor (LDR), resistance:', opts: ['Increases with increasing light', 'Decreases with increasing light', 'Remains constant with light', 'Is independent of light'], ans: 1, explain: 'Light generates free carriers in semiconductor, reducing resistance. Bright light → low resistance (100Ω).' },
    { q: 'CCD image sensors transfer charge using:', opts: ['Direct pixel addressing', 'Wireless transmission', 'Sequential bucket-brigade shift registers', 'Random access memory'], ans: 2, explain: 'CCD shifts charge row by row like a bucket brigade to the output register where it is converted to voltage.' },
    { q: 'CMOS image sensors have lower power consumption because:', opts: ['They use smaller pixels', 'They operate at standard logic supply voltage', 'They capture fewer frames', 'They have no ADC'], ans: 1, explain: 'CMOS uses standard CMOS logic supply (1.8–3.3V) and consumes less power than CCD multi-voltage operation.' },
    { q: 'The Seebeck effect states that:', opts: ['Resistance changes with temperature', 'Two dissimilar metals at different temperatures generate a voltage', 'IR radiation is proportional to temperature', 'Capacitance changes with heat'], ans: 1, explain: 'Seebeck effect: EMF is generated at junction of two dissimilar metals when junctions are at different temperatures.' },
    { q: 'Optical temperature sensors (IR thermometers) work on:', opts: ['Seebeck effect', 'Stefan-Boltzmann law of blackbody radiation', 'Doppler effect', 'Photoelectric effect'], ans: 1, explain: 'All objects emit IR radiation proportional to T⁴ per Stefan-Boltzmann law. IR sensor measures this remotely.' },
    { q: 'Type K thermocouple is made of:', opts: ['Iron and Constantan', 'Copper and Constantan', 'Chromel and Alumel', 'Platinum and Rhodium'], ans: 2, explain: 'Type K = Chromel (Ni-Cr alloy) and Alumel (Ni-Al alloy). Most common, range -200°C to 1350°C.' }
  ],
  notes: [
    { title: 'Light Sensor Quick Comparison', items: ['LDR: cheap, slow, non-linear, simple applications', 'Photodiode: fast (ns), linear, fiber optics', 'Phototransistor: sensitive, medium speed, switching', 'CCD: best quality, expensive, scientific', 'CMOS: cheap, fast, mobile & consumer'] },
    { title: 'Thermocouple Types', items: ['Type K: Chromel-Alumel, -200 to 1350°C', 'Type J: Iron-Constantan, -40 to 750°C', 'Type T: Copper-Constantan, -200 to 350°C', 'Type R/S: Pt-Rh, high temp >1400°C'] },
    { title: 'CCD vs CMOS', items: ['CCD: better quality, slow, high power, costly', 'CMOS: fast readout, low power, cheap, on-chip ADC', 'CMOS now dominates (smartphones, cameras)', 'CCD still used in science/astronomy'] },
    { title: 'IR Sensor Formula', items: ['Stefan-Boltzmann: P = εσT⁴', 'ε = emissivity (0–1)', 'σ = 5.67×10⁻⁸ W/m²K⁴', 'T = absolute temperature (Kelvin)', 'Higher T → exponentially more IR radiation'] }
  ]
},
{
  id: 'u4',
  icon: '🔌',
  title: 'Unit 4: Sensor Interfacing with Microcontrollers',
  subtitle: '7 Hours — Signal Conditioning, ADC, MCU Control, Integration Techniques',
  questions: [
    {
      q: 'Explain amplification and signal conditioning techniques used in sensor interfacing.',
      points: [
        { head: 'Why Signal Conditioning?', desc: 'Raw sensor output is often weak (mV), noisy, or in wrong format — must be conditioned before ADC.' },
        { head: 'Amplification', desc: 'Op-amp circuits (inverting, non-inverting) amplify weak sensor signals to ADC input range (0–3.3V or 0–5V).' },
        { head: 'Instrumentation Amplifier', desc: 'Specialized op-amp with high CMRR — used with differential sensors like Wheatstone bridge.' },
        { head: 'Filtering', desc: 'Low-pass filter removes high-frequency noise above signal bandwidth. Anti-aliasing before ADC.' },
        { head: 'Offsetting', desc: 'Adds or subtracts DC offset to shift signal into ADC input range. E.g., sensor output -1V to +1V shifted to 0–3V.' },
        { head: 'Linearization', desc: 'Hardware or software lookup tables correct non-linear sensor output (e.g., thermocouple, thermistor).' },
        { head: 'Isolation', desc: 'Optocoupler or transformer isolates high-voltage sensor circuits from low-voltage MCU circuits.' }
      ]
    },
    {
      q: 'Discuss integrated signal conditioning in smart sensors.',
      points: [
        { head: 'Integrated Signal Conditioner', desc: 'Single IC combines amplifier, filter, ADC, and sometimes calibration — replaces discrete component design.' },
        { head: 'ASIC Approach', desc: 'Application-Specific Integrated Circuit designed for specific sensor type — minimizes PCB area and cost.' },
        { head: 'Examples', desc: 'MAX31865 (RTD conditioner), ADS1115 (16-bit ADC with PGA), INA219 (current sensing with I2C).' },
        { head: 'Programmable Gain Amplifier (PGA)', desc: 'Gain set digitally — allows same IC to handle sensors with different output ranges.' },
        { head: 'Benefits', desc: 'Smaller PCB, fewer components, better matched components, factory calibrated, lower system noise.' },
        { head: 'Smart Sensor ICs', desc: 'Include EEPROM for calibration constants, temperature compensation, self-test functions on chip.' },
        { head: 'Communication', desc: 'Integrated conditioners output via I2C, SPI or UART directly — plug into MCU without external ADC.' }
      ]
    },
    {
      q: 'Explain digital conversion process (ADC/DAC) used in sensor systems.',
      points: [
        { head: 'ADC Purpose', desc: 'Converts continuous analog sensor signal to discrete digital number for MCU processing.' },
        { head: 'Resolution', desc: 'N-bit ADC divides reference voltage into 2ᴺ steps. 10-bit ADC: 1024 steps. 16-bit: 65536 steps.' },
        { head: 'Sampling Rate', desc: 'Must follow Nyquist theorem: sample rate ≥ 2× highest signal frequency to avoid aliasing.' },
        { head: 'SAR ADC', desc: 'Successive Approximation Register — fast, medium resolution (8–16 bit), most common in MCUs.' },
        { head: 'Sigma-Delta ADC', desc: 'High resolution (16–24 bit), slower speed — used for precision measurements like weight scales.' },
        { head: 'DAC Usage', desc: 'Digital to Analog — MCU outputs analog control signals for actuators, calibration references.' },
        { head: 'Reference Voltage', desc: 'ADC accuracy depends on stable reference voltage (Vref). Better Vref = more accurate conversion.' }
      ]
    },
    {
      q: 'Explain the role of MCU control in smart sensor systems.',
      points: [
        { head: 'Sensor Control', desc: 'MCU sends control signals to configure sensor range, sampling rate, power mode via I2C/SPI registers.' },
        { head: 'Data Acquisition', desc: 'MCU reads sensor data periodically (polling) or on interrupt when data is ready.' },
        { head: 'Data Processing', desc: 'Applies calibration, averaging, filtering algorithms on raw data in firmware.' },
        { head: 'Interrupt Handling', desc: 'Sensor triggers MCU interrupt on threshold breach — MCU wakes from sleep for energy efficiency.' },
        { head: 'Communication Protocol', desc: 'MCU acts as master on I2C/SPI bus — controls sensor timing, addresses multiple sensors.' },
        { head: 'Decision Making', desc: 'MCU compares sensor values against limits and takes action — actuate relay, send alert, log data.' },
        { head: 'Power Management', desc: 'MCU puts sensor to sleep when not needed — essential for battery-powered IoT devices.' }
      ]
    },
    {
      q: 'Discuss different microcontrollers used for sensor interfacing.',
      points: [
        { head: 'Arduino (ATmega328P)', desc: '8-bit, 10-bit ADC, I2C/SPI/UART. Most popular for prototyping. 5V logic. Good sensor library support.' },
        { head: 'ESP32', desc: '32-bit dual-core, 12-bit ADC, Wi-Fi + Bluetooth, 18 ADC channels. Ideal for IoT sensor nodes.' },
        { head: 'STM32', desc: '32-bit ARM Cortex-M, 12–16 bit ADC, multiple I2C/SPI/UART, low power modes. Industrial applications.' },
        { head: 'Raspberry Pi Pico (RP2040)', desc: 'Dual ARM Cortex-M0+, 12-bit ADC, PIO (programmable I/O) for custom protocols. Low cost.' },
        { head: 'PIC Microcontrollers', desc: 'Microchip PIC — robust, many variants, used in industrial sensor systems. Good analog peripherals.' },
        { head: 'Selection Criteria', desc: 'Choose based on: ADC resolution needed, number of sensor channels, power budget, communication protocols.' },
        { head: 'RTOS Support', desc: 'ESP32/STM32 support FreeRTOS — runs multiple sensor tasks concurrently with deterministic timing.' }
      ]
    },
    {
      q: 'Explain sensor integration techniques with suitable block diagram.',
      points: [
        { head: 'Sensor Fusion', desc: 'Combining data from multiple sensors to get more accurate/complete information — e.g., IMU (accelerometer + gyroscope).' },
        { head: 'Kalman Filter', desc: 'Mathematical algorithm that combines noisy sensor data with system model to give best estimate of true value.' },
        { head: 'Multiplexing', desc: 'Single ADC reads multiple sensors using analog multiplexer — reduces cost and MCU pin count.' },
        { head: 'I2C Multi-Sensor Bus', desc: 'Multiple sensors on same two-wire I2C bus with unique addresses — simple wiring for up to 127 devices.' },
        { head: 'Interrupt-Driven Integration', desc: 'Each sensor triggers interrupt when ready — MCU handles multiple sensors without constant polling.' },
        { head: 'DMA Transfer', desc: 'Direct Memory Access moves sensor data from ADC to memory without CPU involvement — efficient for high-speed.' },
        { head: 'Edge Computing', desc: 'Process sensor data locally at the device — reduces latency and bandwidth to cloud server.' }
      ]
    },
    {
      q: 'Discuss system considerations in sensor interfacing.',
      points: [
        { head: 'Power Supply Noise', desc: 'Sensor accuracy affected by noisy power rail — use decoupling capacitors (100nF + 10µF) near sensor.' },
        { head: 'Grounding', desc: 'Separate analog and digital grounds, connected at single point — prevents digital noise from corrupting analog signals.' },
        { head: 'PCB Layout', desc: 'Keep analog sensor traces short and away from digital traces. Use ground plane for shielding.' },
        { head: 'Calibration', desc: 'Factory or field calibration accounts for component tolerances and environmental offsets.' },
        { head: 'Temperature Compensation', desc: 'Sensor characteristics drift with temperature — compensation needed for precision measurements.' },
        { head: 'EMI/EMC', desc: 'Electromagnetic interference from motors, switching circuits — use shielded cables, ferrite beads, proper filtering.' },
        { head: 'Reliability & Redundancy', desc: 'In critical systems, use multiple sensors for cross-validation — detect sensor failure and failover.' }
      ]
    },
    {
      q: 'Draw and explain complete sensor interfacing architecture with MCU.',
      points: [
        { head: 'Physical Sensor', desc: 'Converts physical quantity (temperature, pressure) to electrical signal (voltage, current, resistance).' },
        { head: 'Signal Conditioning Circuit', desc: 'Amplifies and filters raw sensor output — brings it to ADC input range with clean signal.' },
        { head: 'ADC', desc: 'Internal or external ADC converts analog signal to digital. Resolution: typically 10–16 bit in embedded systems.' },
        { head: 'MCU (Processor)', desc: 'Reads ADC data, applies calibration algorithms, makes decisions, stores data in memory.' },
        { head: 'Memory (Flash/EEPROM/RAM)', desc: 'Flash: stores firmware. EEPROM: stores calibration data. RAM: temporary sensor readings.' },
        { head: 'Communication Interface', desc: 'MCU sends processed data via UART/USB to PC, or I2C/SPI to display, or WiFi/BLE to cloud.' },
        { head: 'Power Supply', desc: 'Regulated supply (3.3V/5V) with filtering for sensor circuit and MCU. Battery with LDO for portable.' }
      ]
    }
  ],
  mcqs: [
    { q: 'An instrumentation amplifier is preferred for sensor interfacing because it has:', opts: ['High output current', 'High Common Mode Rejection Ratio (CMRR)', 'Low input impedance', 'Single supply operation only'], ans: 1, explain: 'High CMRR rejects noise common to both inputs — critical for low-level differential signals from bridge sensors.' },
    { q: 'The Nyquist theorem requires sampling rate to be:', opts: ['Equal to signal frequency', 'Less than signal frequency', 'At least twice the highest signal frequency', 'Ten times the signal frequency'], ans: 2, explain: 'Nyquist: fs ≥ 2fmax. Sampling below this causes aliasing — false lower frequencies appear in digitized data.' },
    { q: 'A 12-bit ADC has how many quantization levels?', opts: ['144', '1200', '4096', '8192'], ans: 2, explain: '2¹² = 4096 levels. More bits = finer resolution. Quantization step = Vref/4096.' },
    { q: 'SAR ADC (Successive Approximation) is most suitable for:', opts: ['Very high precision (>20 bit)', 'Medium speed, medium resolution applications', 'Power measurements only', 'RF signal sampling'], ans: 1, explain: 'SAR ADC is fast and gives 8–16 bit resolution — perfect balance for most sensor applications in MCUs.' },
    { q: 'I2C bus uses how many wires?', opts: ['1', '2', '4', '8'], ans: 1, explain: 'I2C uses 2 wires: SDA (data) and SCL (clock). Multiple devices share the bus using unique 7-bit addresses.' },
    { q: 'Which MCU is best suited for IoT sensor nodes with WiFi?', opts: ['ATmega328P (Arduino Uno)', 'ESP32', 'PIC16F84', '8051'], ans: 1, explain: 'ESP32 has built-in WiFi + Bluetooth, 12-bit ADC, dual-core 32-bit CPU — ideal for IoT sensor applications.' },
    { q: 'Decoupling capacitors in sensor circuits are used to:', opts: ['Increase gain', 'Filter power supply noise near the sensor IC', 'Convert analog to digital', 'Increase sampling rate'], ans: 1, explain: '100nF + 10µF capacitors near sensor power pins filter high-frequency noise and supply transients.' },
    { q: 'Sensor fusion combines data from multiple sensors to:', opts: ['Reduce cost', 'Get more accurate/complete information', 'Increase power consumption', 'Simplify PCB design'], ans: 1, explain: 'Sensor fusion (e.g., Kalman filter) combines accelerometer + gyroscope for accurate orientation — better than either alone.' }
  ],
  notes: [
    { title: 'Signal Chain Steps', items: ['1. Sensor (physical → electrical)', '2. Amplifier (gain)', '3. Filter (noise removal)', '4. ADC (analog → digital)', '5. MCU (processing)', '6. Communication (output)'] },
    { title: 'ADC Types Comparison', items: ['SAR: fast, 8–16 bit, most MCUs', 'Sigma-Delta: slow, 16–24 bit, precision', 'Flash ADC: very fast, low resolution', 'Pipeline: high speed, medium resolution'] },
    { title: 'MCU Comparison', items: ['Arduino: 8-bit, 10-bit ADC, beginner', 'ESP32: 32-bit, WiFi/BT, IoT', 'STM32: 32-bit ARM, industrial', 'RP2040: dual-core, PIO, low cost'] },
    { title: 'PCB Design Rules', items: ['Separate analog/digital ground planes', 'Connect grounds at single point', '100nF decoupling near every IC', 'Short analog traces, away from digital', 'Use shielded cable for long runs'] }
  ]
},
{
  id: 'u5',
  icon: '📶',
  title: 'Unit 5: Wireless Sensor Networks',
  subtitle: '7 Hours — WSN Architecture, RF Sensing, Telemetry, RF MEMS',
  questions: [
    {
      q: 'Explain architecture and components of Wireless Sensor Network (WSN) with diagram.',
      points: [
        { head: 'Definition', desc: 'A WSN is a network of spatially distributed autonomous sensor nodes that monitor physical conditions and communicate wirelessly.' },
        { head: 'Sensor Node (Mote)', desc: 'Core element: contains sensing unit, processing unit, transceiver, and power unit (battery/energy harvester).' },
        { head: 'Sensing Unit', desc: 'Physical sensors + ADC — collects environmental data (temperature, humidity, vibration, etc.).' },
        { head: 'Processing Unit', desc: 'Microcontroller + memory — processes sensor data, runs routing algorithms, manages communication.' },
        { head: 'Transceiver', desc: 'RF radio module — transmits and receives data wirelessly. Zigbee, 6LoWPAN, LoRa, BLE common protocols.' },
        { head: 'Gateway/Base Station', desc: 'Aggregates data from all sensor nodes and forwards to internet/cloud via Ethernet, WiFi, or cellular.' },
        { head: 'Management Station', desc: 'Server or cloud platform — stores, processes, visualizes data. Sends commands back to sensor nodes.' }
      ]
    },
    {
      q: 'Discuss wireless data communication techniques used in sensor systems.',
      points: [
        { head: 'Zigbee (IEEE 802.15.4)', desc: 'Low power, 250kbps, mesh network, 2.4GHz — ideal for home automation, industrial WSN, up to 100m.' },
        { head: 'Bluetooth Low Energy (BLE)', desc: '2.4GHz, very low power, 1–2Mbps — used in wearables, short-range sensor devices, smartphones.' },
        { head: 'Wi-Fi (IEEE 802.11)', desc: 'High speed, high power, 2.4/5GHz — used when high data rate needed; not ideal for battery sensors.' },
        { head: 'LoRa/LoRaWAN', desc: 'Long range (>10km rural), very low power, low data rate — ideal for smart agriculture, asset tracking.' },
        { head: 'NB-IoT/LTE-M', desc: 'Cellular IoT — uses existing 4G/5G network. Wide coverage, low power — smart metering, tracking.' },
        { head: 'Z-Wave', desc: '868/908 MHz, mesh, low power — popular in smart home security and automation systems.' },
        { head: 'Selection Criteria', desc: 'Choose based on range, data rate, power budget, cost, and existing infrastructure.' }
      ]
    },
    {
      q: 'Explain industrial wireless sensing networks and their applications.',
      points: [
        { head: 'Industrial WSN Requirements', desc: 'More reliable than consumer WSN — needs high uptime, deterministic latency, EMI resistance.' },
        { head: 'WirelessHART', desc: 'Industrial standard built on IEEE 802.15.4. Self-organizing mesh, redundant paths, time-slotted communication.' },
        { head: 'ISA100.11a', desc: 'ISA standard for industrial automation — supports multiple protocols, high security, process control.' },
        { head: 'Applications: Condition Monitoring', desc: 'Vibration sensors on motors/pumps detect bearing faults early — prevents costly breakdowns.' },
        { head: 'Applications: Process Monitoring', desc: 'Temperature, pressure, flow sensors in chemical plants — real-time process control without wiring.' },
        { head: 'Applications: Asset Tracking', desc: 'RFID + GPS + WSN track tools, equipment, vehicles across large industrial sites.' },
        { head: 'Safety', desc: 'Gas leak detection, fire sensors — wireless nodes in hazardous areas where wiring is impractical.' }
      ]
    },
    {
      q: 'Discuss RF sensing technology and its applications.',
      points: [
        { head: 'RF Sensing Concept', desc: 'Uses radio frequency signals to sense environment — measures changes in RF propagation caused by objects or conditions.' },
        { head: 'Wi-Fi Sensing', desc: 'Analyzes Wi-Fi signal patterns (CSI — Channel State Information) to detect motion, breathing, gestures.' },
        { head: 'Radar-Based RF Sensing', desc: 'Transmits RF pulse, analyzes reflections — measures distance, velocity, and object presence.' },
        { head: 'RFID Sensing', desc: 'Passive RFID tags powered by reader RF field — used for proximity, identity, and inventory sensing.' },
        { head: 'Ground Penetrating Radar', desc: 'Low-frequency RF penetrates ground — used for detecting buried pipes, cables, archaeological survey.' },
        { head: 'Medical RF Sensing', desc: 'Microwave/mm-wave used to detect heart rate, respiration, glucose levels non-invasively.' },
        { head: 'Environmental RF Sensing', desc: 'Monitors soil moisture, rainfall, and atmospheric conditions using RF propagation characteristics.' }
      ]
    },
    {
      q: 'Explain Telemetry with block diagram and industrial applications.',
      points: [
        { head: 'Telemetry Definition', desc: 'Automated measurement and wireless transmission of data from remote or inaccessible locations to receiving station.' },
        { head: 'Block Diagram', desc: 'Sensor → Signal Conditioner → Encoder/Modulator → RF Transmitter → [wireless link] → Receiver → Decoder → Display/Store.' },
        { head: 'Modulation Techniques', desc: 'FM, AM, PCM (digital) — PCM telemetry most common today. Data encoded as binary frames.' },
        { head: 'Industrial Applications', desc: 'Oil pipeline monitoring, power grid monitoring, dam water levels — where physical access is difficult.' },
        { head: 'Aerospace Telemetry', desc: 'Transmits aircraft/rocket performance data (speed, altitude, temperature) to ground control in real-time.' },
        { head: 'Medical Telemetry', desc: 'Patient ECG, heart rate, BP transmitted wirelessly to nursing station — enables mobile patient monitoring.' },
        { head: 'Vehicle Telematics', desc: 'OBD + GPS + cellular — monitors vehicle location, speed, fuel, and diagnostics remotely.' }
      ]
    },
    {
      q: 'Explain construction and applications of RF MEMS.',
      points: [
        { head: 'RF MEMS Definition', desc: 'Micro Electro Mechanical Systems designed for radio frequency applications — tiny mechanical switches and resonators.' },
        { head: 'MEMS Switch Construction', desc: 'Cantilever or bridge structure suspended over contact. Electrostatic force deflects beam to make/break RF circuit.' },
        { head: 'Working Principle', desc: 'Applied voltage creates electrostatic attraction → movable beam pulls down → closes RF signal path.' },
        { head: 'Advantages', desc: 'Very low insertion loss (0.1–0.2 dB), high isolation, low power consumption, no DC power in ON state.' },
        { head: 'MEMS Resonator/Filter', desc: 'Mechanical resonance at RF frequency — replaces bulky quartz crystals in filters, oscillators.' },
        { head: 'Applications', desc: 'Reconfigurable antennas, phased array radar, cellular phone band switching, satellite communication.' },
        { head: 'Limitations', desc: 'Slow switching speed (µs vs ns for PIN diodes), sensitive to vibration, packaging challenges.' }
      ]
    },
    {
      q: 'Compare wired and wireless sensor networks.',
      points: [
        { head: 'Installation', desc: 'Wired: complex, expensive cable laying. Wireless: quick deployment, flexible placement, no cables.' },
        { head: 'Reliability', desc: 'Wired: highly reliable, no RF interference. Wireless: subject to RF interference, multipath fading.' },
        { head: 'Maintenance', desc: 'Wired: easy to diagnose cable faults. Wireless: need battery replacement, RF troubleshooting.' },
        { head: 'Data Rate', desc: 'Wired (Ethernet): Gbps. Wireless: Zigbee 250kbps, Wi-Fi 1Gbps, LoRa 50kbps — varies widely.' },
        { head: 'Scalability', desc: 'Wireless: easily add nodes anywhere. Wired: adding nodes requires new cable runs.' },
        { head: 'Power', desc: 'Wired: power over cable (PoE). Wireless: battery or energy harvesting — power is a constraint.' },
        { head: 'Cost', desc: 'Wireless: cheaper installation for large areas. Wired: cheaper hardware, higher installation cost.' }
      ]
    },
    {
      q: 'Discuss applications of WSN in industrial monitoring and IoT.',
      points: [
        { head: 'Predictive Maintenance', desc: 'Vibration and temperature sensors on machines send data to AI — predicts failures before they occur.' },
        { head: 'Smart Agriculture', desc: 'Soil moisture, temperature, humidity sensors guide automated irrigation — saves 30–50% water.' },
        { head: 'Smart Grid', desc: 'Sensors monitor power lines, transformers — detect faults, optimize energy distribution in real time.' },
        { head: 'Environmental Monitoring', desc: 'Air quality, water quality, noise — distributed sensor nodes provide city-wide pollution maps.' },
        { head: 'Smart Buildings', desc: 'HVAC, lighting, occupancy, energy sensors — integrated control reduces building energy consumption.' },
        { head: 'Healthcare IoT', desc: 'Wearable sensors (heart rate, glucose, SpO2) transmit data to cloud for remote patient monitoring.' },
        { head: 'Supply Chain', desc: 'GPS + temperature + humidity sensors on packages ensure cold chain integrity, track location.' }
      ]
    }
  ],
  mcqs: [
    { q: 'A WSN sensor node consists of:', opts: ['Only sensing and power unit', 'Sensing, processing, transceiver, and power unit', 'Only processor and radio', 'Display, keyboard, and radio'], ans: 1, explain: 'Complete sensor node = sensing unit (sensor+ADC) + processing (MCU+memory) + transceiver (radio) + power unit.' },
    { q: 'Zigbee operates at which frequency band?', opts: ['433 MHz', '868 MHz', '2.4 GHz', '5 GHz'], ans: 2, explain: 'Zigbee uses 2.4GHz globally (also 868MHz in Europe, 915MHz in US). Based on IEEE 802.15.4 standard.' },
    { q: 'LoRa is best suited for applications requiring:', opts: ['High data rate, short range', 'Long range, low data rate, low power', 'High power, medium range', 'Video streaming'], ans: 1, explain: 'LoRa (Long Range) provides 10+ km range with <50kbps data rate at very low power — perfect for IoT sensors.' },
    { q: 'WirelessHART is used in:', opts: ['Home automation', 'Industrial process automation', 'Consumer electronics', 'Military communications'], ans: 1, explain: 'WirelessHART is an industrial wireless standard for process automation, built on IEEE 802.15.4 with mesh networking.' },
    { q: 'RF MEMS switches are preferred over PIN diode switches because they have:', opts: ['Faster switching speed', 'Lower insertion loss and higher isolation', 'Higher power handling', 'Lower cost'], ans: 1, explain: 'RF MEMS: 0.1–0.2 dB insertion loss vs 1–2 dB for PIN diodes. Much better isolation. Lower power in steady state.' },
    { q: 'Telemetry is defined as:', opts: ['Local measurement without transmission', 'Automated remote measurement and wireless data transmission', 'Wired data transfer system', 'Manual meter reading'], ans: 1, explain: 'Telemetry = automated measurement + wireless transmission from remote/inaccessible locations to base station.' },
    { q: 'The gateway in a WSN is responsible for:', opts: ['Sensing physical data', 'Aggregating node data and forwarding to internet/cloud', 'Powering sensor nodes', 'Only data storage'], ans: 1, explain: 'Gateway collects data from all sensor nodes and connects the WSN to the internet or cloud server.' },
    { q: 'CSI (Channel State Information) is used in:', opts: ['Zigbee mesh routing', 'Wi-Fi sensing for gesture/motion detection', 'LoRa modulation', 'GPS tracking'], ans: 1, explain: 'CSI analysis of Wi-Fi signals detects how objects disturb RF propagation — enables contactless motion and gesture sensing.' }
  ],
  notes: [
    { title: 'WSN Protocols Comparison', items: ['Zigbee: 2.4GHz, 250kbps, mesh, 100m', 'BLE: 2.4GHz, 1-2Mbps, short range', 'LoRa: sub-GHz, 50kbps, 10km+', 'Wi-Fi: 2.4/5GHz, 1Gbps, 100m', 'NB-IoT: cellular, 200kbps, nationwide'] },
    { title: 'WSN Node Components', items: ['Sensing unit: sensors + ADC', 'Processing unit: MCU + flash/RAM', 'Transceiver: RF radio module', 'Power unit: battery + energy harvester', 'Optional: GPS, display'] },
    { title: 'Industrial Standards', items: ['WirelessHART: HART + IEEE 802.15.4', 'ISA100.11a: ISA industrial standard', 'Both: mesh, encrypted, deterministic', 'Used in: oil/gas, chemical, water treatment'] },
    { title: 'Telemetry Block Diagram', items: ['Sensor → Conditioner → Encoder', '→ Modulator → RF Transmitter', '→ [Wireless Link]', '→ RF Receiver → Decoder', '→ Display / Database / Control'] }
  ]
},
{
  id: 'u6',
  icon: '🚗',
  title: 'Unit 6: Smart Sensor Applications',
  subtitle: '7 Hours — Automotive, Industrial, Consumer, Future Trends, Trusted Sensing',
  questions: [
    {
      q: 'Discuss automotive applications of smart sensors.',
      points: [
        { head: 'Engine Management', desc: 'O2 sensor, MAP sensor, MAF sensor — measure exhaust oxygen, manifold pressure, air mass for optimal fuel injection.' },
        { head: 'Safety Systems (ADAS)', desc: 'Radar, LiDAR, ultrasonic, cameras — enable adaptive cruise control, automatic emergency braking, lane keep assist.' },
        { head: 'Wheel Speed Sensors', desc: 'Hall effect sensors on each wheel — feed ABS (Anti-lock Braking) and traction control systems.' },
        { head: 'Airbag (Crash Sensors)', desc: 'MEMS accelerometers detect rapid deceleration — trigger airbag deployment within 30ms of collision.' },
        { head: 'Tire Pressure Monitoring (TPMS)', desc: 'Pressure sensor + RF transmitter in each wheel — warns driver of low tire pressure for safety.' },
        { head: 'Temperature & Cooling', desc: 'Coolant temperature sensor, exhaust temp sensor — prevent overheating, enable thermal management.' },
        { head: 'Parking Sensors', desc: 'Ultrasonic sensors on bumpers — detect obstacles during parking, alert driver with audio/visual warning.' }
      ]
    },
    {
      q: 'Explain applications of smart sensors in industrial robotics.',
      points: [
        { head: 'Force/Torque Sensors', desc: 'Mounted on robot wrist — measure forces during assembly, enable compliant motion and safe human-robot interaction.' },
        { head: 'Vision Systems', desc: 'CCD/CMOS cameras + machine vision — identify objects, verify position, inspect quality, guide pick-and-place.' },
        { head: 'Proximity Sensors', desc: 'Inductive, capacitive, optical sensors detect part presence, end-of-travel, and collision avoidance.' },
        { head: 'Encoders', desc: 'Rotary encoders on each joint provide precise position feedback — closed-loop servo control.' },
        { head: 'Tactile Sensors', desc: 'Array of pressure sensors on robot fingertips — detect object texture, slip, and grip force.' },
        { head: 'LiDAR for Navigation', desc: '3D point cloud mapping in mobile robots (AMR/AGV) — obstacle avoidance, path planning in warehouses.' },
        { head: 'Safety Sensors', desc: 'Laser scanners, safety mats detect human entry into robot workspace — triggers immediate stop.' }
      ]
    },
    {
      q: 'Discuss consumer applications of smart sensor technologies.',
      points: [
        { head: 'Smartphones', desc: 'Accelerometer, gyroscope, proximity, ambient light, fingerprint, barometer — enable orientation, auto-brightness, AR.' },
        { head: 'Wearables', desc: 'Smartwatches/fitness bands: heart rate (PPG), SpO2, skin temperature, GPS, accelerometer, ECG.' },
        { head: 'Smart Home', desc: 'Smart thermostat (Nest), motion sensors for lighting, smoke/CO detectors, door/window sensors.' },
        { head: 'Gaming', desc: 'Motion controllers (Nintendo Wii, PlayStation Move) use accelerometers and gyroscopes for gesture gaming.' },
        { head: 'Voice Assistants', desc: 'MEMS microphones in Alexa, Google Home — far-field voice capture with noise cancellation.' },
        { head: 'Health Monitoring', desc: 'Pulse oximeters, blood glucose monitors, smart scales — provide real-time health data to apps.' },
        { head: 'Smart Appliances', desc: 'Washing machines with load sensors, refrigerators with temperature sensors, vacuum robots with SLAM.' }
      ]
    },
    {
      q: 'Explain future sensor and semiconductor capabilities.',
      points: [
        { head: 'Nano-Sensors', desc: 'Sensors built at nanometer scale using nanotechnology — detect single molecules, atoms, viruses.' },
        { head: 'Flexible/Wearable Sensors', desc: 'Sensors printed on flexible substrates — conform to skin for continuous health monitoring without discomfort.' },
        { head: 'Energy Harvesting', desc: 'Sensors powered by ambient energy (solar, vibration, RF, body heat) — battery-free operation.' },
        { head: 'AI-Integrated Sensors', desc: 'On-sensor machine learning (TinyML) — sensors that interpret data locally without cloud dependency.' },
        { head: 'Quantum Sensors', desc: 'Use quantum phenomena (entanglement, superposition) for ultra-precise measurements of gravity, magnetic fields.' },
        { head: '5nm/3nm Process Nodes', desc: 'Smaller transistors → lower power, more processing on chip, more sensors integrated in one IC.' },
        { head: 'Neuromorphic Sensing', desc: 'Brain-inspired sensor chips — process sensor data like biological neural networks, extremely energy-efficient.' }
      ]
    },
    {
      q: 'Discuss software sensing and its importance.',
      points: [
        { head: 'Definition', desc: 'Software sensing uses algorithms and existing data/sensors to infer parameters not directly measured by hardware.' },
        { head: 'Virtual Sensors', desc: 'Mathematical model computes unmeasured values from related measured values — e.g., estimating tire wear from speed/acceleration patterns.' },
        { head: 'Machine Learning Sensing', desc: 'Neural networks trained on sensor data learn to detect patterns — fault detection, anomaly identification.' },
        { head: 'Kalman Filter as Software Sensor', desc: 'Combines imperfect measurements with system model to estimate true state — used in GPS/IMU fusion.' },
        { head: 'Sensor Health Monitoring', desc: 'Software monitors sensor output statistics — detects drift, failure, or calibration issues automatically.' },
        { head: 'Reducing Hardware Cost', desc: 'Software sensing can replace expensive hardware sensors — saves cost while maintaining measurement quality.' },
        { head: 'Importance in IoT', desc: 'Edge devices with limited sensors use software sensing to extract more information from existing hardware.' }
      ]
    },
    {
      q: 'Explain concept of trusted sensing.',
      points: [
        { head: 'Definition', desc: 'Trusted sensing ensures that sensor data is authentic, unaltered, and from a verified source — critical for safety-critical systems.' },
        { head: 'Authentication', desc: 'Sensor node authenticates to the network using cryptographic keys — prevents rogue sensor data injection.' },
        { head: 'Data Integrity', desc: 'Digital signatures or checksums ensure data has not been tampered with during transmission.' },
        { head: 'Secure Boot', desc: 'Sensor firmware verified before execution — prevents malicious firmware from being loaded on device.' },
        { head: 'Tamper Detection', desc: 'Hardware security module (HSM) detects physical tampering — erases keys if device is opened.' },
        { head: 'Applications', desc: 'Autonomous vehicles (trust LiDAR/radar data), medical devices (trust patient vitals), smart grid (trust meter readings).' },
        { head: 'Standards', desc: 'IEC 62443 (industrial cybersecurity), ISO 21434 (automotive cybersecurity) define trusted sensing requirements.' }
      ]
    },
    {
      q: 'Discuss system requirements for smart sensor deployment.',
      points: [
        { head: 'Measurement Requirements', desc: 'Define measurand, range, accuracy, resolution, and sampling rate needed for the application.' },
        { head: 'Environmental Requirements', desc: 'Operating temperature, humidity, pressure, vibration, chemical exposure — sensor must be rated.' },
        { head: 'Power Requirements', desc: 'Battery life target, available power source, sleep current budget, energy harvesting feasibility.' },
        { head: 'Communication Requirements', desc: 'Protocol (I2C/WiFi/LoRa), range, data rate, latency, and security requirements.' },
        { head: 'Reliability Requirements', desc: 'MTBF (Mean Time Between Failures), redundancy needs, acceptable downtime for the application.' },
        { head: 'Cost Requirements', desc: 'BOM (Bill of Materials) cost, installation cost, maintenance cost, total cost of ownership.' },
        { head: 'Regulatory Requirements', desc: 'FCC/CE/ATEX certification, RoHS compliance, industry standards (IEC, ISO) that must be met.' }
      ]
    },
    {
      q: 'Explain role of smart sensors in Industry 4.0 and IoT.',
      points: [
        { head: 'Industry 4.0 Overview', desc: 'Fourth industrial revolution: CPS (Cyber-Physical Systems), IoT, AI, big data, automation integrated in manufacturing.' },
        { head: 'Smart Sensors as Foundation', desc: 'Every Industry 4.0 application starts with sensors — they provide real-world data to digital twin and AI systems.' },
        { head: 'Digital Twin', desc: 'Real-time sensor data creates virtual model of physical machine — simulate, predict, optimize without touching real system.' },
        { head: 'Predictive Maintenance', desc: 'Vibration, temp, current sensors on machines — AI detects anomalies and predicts failure before it happens.' },
        { head: 'Connected Factory', desc: 'All machines, conveyors, robots equipped with sensors communicating on industrial IoT network — complete visibility.' },
        { head: 'Quality Control', desc: 'Vision sensors and inline measurement sensors detect defects in real-time — 100% inspection instead of sampling.' },
        { head: 'Energy Management', desc: 'Power sensors on every machine — identify energy waste, optimize production scheduling, reduce carbon footprint.' }
      ]
    }
  ],
  mcqs: [
    { q: 'MEMS accelerometers in cars are used for:', opts: ['Fuel injection control', 'Airbag deployment detection', 'Steering control', 'Radio tuning'], ans: 1, explain: 'MEMS accelerometers detect rapid deceleration during collision and trigger airbag inflation within 30ms.' },
    { q: 'TPMS in vehicles stands for:', opts: ['Traction Power Management System', 'Tire Pressure Monitoring System', 'Thermal Protection Module Sensor', 'Transmission Parameter Measurement System'], ans: 1, explain: 'TPMS monitors tire pressure using pressure sensor + RF transmitter in each wheel — mandatory in new vehicles.' },
    { q: 'In industrial robotics, encoder sensors provide:', opts: ['Force measurement', 'Temperature monitoring', 'Precise position/speed feedback for servo control', 'Vision data'], ans: 2, explain: 'Rotary encoders on each robot joint give precise angle/position — essential for closed-loop servo control.' },
    { q: 'Trusted sensing ensures:', opts: ['Faster sensor response', 'Data authenticity, integrity, and verified source', 'Lower sensor cost', 'Higher sensor resolution'], ans: 1, explain: 'Trusted sensing uses cryptography and authentication to ensure sensor data is genuine and unaltered.' },
    { q: 'Software sensing (virtual sensors) refers to:', opts: ['Sensors made from software chips', 'Using algorithms to infer unmeasured parameters from existing sensor data', 'Wireless sensor networks', 'Software updates for sensor firmware'], ans: 1, explain: 'Virtual sensors use mathematical models/ML to estimate unmeasured values from available sensor readings.' },
    { q: 'TinyML in smart sensors enables:', opts: ['Faster wireless transmission', 'Machine learning inference directly on the sensor node', 'Better ADC resolution', 'Longer battery life through bigger battery'], ans: 1, explain: 'TinyML runs ML models on microcontrollers — sensors can interpret data locally without cloud round-trip.' },
    { q: 'Digital Twin in Industry 4.0 is a:', opts: ['Physical backup machine', 'Virtual real-time model of a physical asset using sensor data', 'Digital display screen', 'Type of PLC controller'], ans: 1, explain: 'Digital twin = real-time virtual replica of physical machine fed by sensor data — enables simulation and optimization.' },
    { q: 'Which sensor technology enables autonomous vehicle self-driving?', opts: ['Only cameras', 'Only GPS', 'Combination of LiDAR, radar, cameras, and ultrasonic sensors', 'Only ultrasonic sensors'], ans: 2, explain: 'Autonomous vehicles use sensor fusion: LiDAR (3D map), radar (velocity), cameras (vision), ultrasonic (parking).' }
  ],
  notes: [
    { title: 'Automotive Sensors', items: ['O2/MAP/MAF: engine management', 'ABS: hall-effect wheel speed', 'MEMS accel: airbag deployment', 'TPMS: tire pressure RF monitoring', 'Ultrasonic: parking assistance', 'LiDAR/Radar: ADAS, self-driving'] },
    { title: 'Consumer Electronics Sensors', items: ['Accelerometer: screen rotation, gaming', 'Gyroscope: AR/VR, stabilization', 'PPG: heart rate in wearables', 'MEMS mic: voice assistants', 'Ambient light: auto-brightness', 'Fingerprint: biometric security'] },
    { title: 'Future Sensor Trends', items: ['Nano-sensors: molecular detection', 'Flexible sensors: skin-conforming', 'Energy harvesting: battery-free', 'TinyML: on-device AI', 'Quantum sensors: ultra-precision', 'Neuromorphic: brain-inspired chips'] },
    { title: 'Industry 4.0 Sensor Uses', items: ['Digital Twin: real-time virtual model', 'Predictive maintenance: AI + vibration', 'Connected factory: IIoT networks', '100% quality inspection: vision sensors', 'Energy management: power monitoring'] }
  ]
}
];
