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
    },
    {
      q: 'Explain the concept of self-calibration and self-diagnostics in smart sensors with examples.',
      points: [
        { head: 'Self-Calibration Definition', desc: 'Automatic adjustment of sensor output to match true value without manual intervention.' },
        { head: 'Calibration Algorithm', desc: 'Microprocessor compares stored reference values with measured values and applies correction factors.' },
        { head: 'Temperature Compensation', desc: 'Adjusts readings based on temperature drift — e.g., RTD sensor calibrates itself across temp range.' },
        { head: 'Zero and Span Calibration', desc: 'Zero: output at minimum input. Span: output range. Smart sensor adjusts both automatically.' },
        { head: 'Self-Diagnostics Function', desc: 'Built-in tests detect sensor faults, open circuits, short circuits, and report error codes.' },
        { head: 'Fault Detection Methods', desc: 'Checks sensor response time, output range validity, communication line health, power supply.' },
        { head: 'Error Reporting', desc: 'Reports status code (0=OK, 1=Low battery, 2=Sensor fault) via digital output or communication protocol.' },
        { head: 'Example: Smart RTD', desc: 'RTD (Resistance Temperature Detector) with onboard electronics: auto-calibrates at -20°C and +50°C reference points.' }
      ]
    },
    {
      q: 'Compare analog and digital output sensors. Discuss advantages of digital sensors in industrial applications.',
      points: [
        { head: 'Analog Output Range', desc: '4-20mA current loop or 0-10V voltage — continuous signal proportional to measurand.' },
        { head: 'Digital Output Format', desc: 'Serial (I2C/SPI/UART) or parallel binary — discrete digital values (0s and 1s).' },
        { head: 'Noise Immunity', desc: 'Digital: immune to EMI (electromagnetic interference). Analog: degrades over long cable runs (>100m).' },
        { head: 'Signal Conditioning', desc: 'Analog needs external amplifier, filter, ADC. Digital includes all onboard — plug-and-play.' },
        { head: 'Industrial Reliability', desc: 'Digital with checksum/parity detects transmission errors. Analog cannot detect if signal corrupted.' },
        { head: 'Multi-Sensor Networks', desc: 'Digital I2C/SPI daisy-chain multiple sensors on 2 wires. Analog needs separate wire per sensor.' },
        { head: 'Smart Features', desc: 'Digital sensors include calibration data, sensor ID, status flags, setpoint configuration — all accessible.' },
        { head: 'Installation Cost', desc: 'Digital: lower wiring cost (fewer cables), faster commissioning. Analog: more expensive installation.' },
        { head: 'Industry 4.0 Alignment', desc: 'Digital sensors integrate seamlessly into IoT, Industry 4.0, and smart factory ecosystems.' }
      ]
    },
    {
      q: 'Explain the role of signal processing and data fusion in improving sensor accuracy.',
      points: [
        { head: 'Raw Signal Noise', desc: 'Sensors output noisy signal — high-frequency spikes, low-frequency drift from temperature and aging.' },
        { head: 'Filtering Technique', desc: 'Low-pass filter removes high-frequency noise. Example: 1kHz sensor with 100Hz cutoff filter.' },
        { head: 'Averaging Algorithm', desc: 'Take multiple samples (n=10) and compute mean — reduces random noise by factor of sqrt(n).' },
        { head: 'Calibration Correction', desc: 'Apply stored offset and gain factors: True_Value = (Raw_Reading - Offset) / Gain.' },
        { head: 'Sensor Fusion Definition', desc: 'Combine multiple sensor inputs to get better estimate than any single sensor.' },
        { head: 'Fusion Example', desc: 'Accelerometer + Gyroscope fused with Kalman filter gives accurate 3D orientation without drift.' },
        { head: 'Kalman Filter Principle', desc: 'Weighting: trust accurate but slow sensor less, noisy but fast sensor more — optimal blend.' },
        { head: 'Redundancy Check', desc: 'Use 3 sensors: if one deviates >threshold, flag it as faulty, use other two for voting.' },
        { head: 'Real-World Gain', desc: 'Sensor fusion in smartphones: accelerometer+magnetometer+GPS gives drift-free position; crucial for navigation.' }
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
        { head: 'Penetration', desc: 'Microwave passes through walls/objects. Ultrasonic does not. Optical blocked by any opaque surface.' },
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
    },
    {
      q: 'Discuss the factors affecting accuracy of ultrasonic sensors and methods to improve their performance.',
      points: [
        { head: 'Temperature Effect', desc: 'Speed of sound changes with temp: ~0.6 m/s per °C. At 25°C = 343 m/s, at 0°C = 331 m/s.' },
        { head: 'Compensation Method', desc: 'Measure temperature, apply correction: v_actual = 331 + 0.6 × T. Then recalculate distance.' },
        { head: 'Humidity Effect', desc: 'Sound travels slower in dry air than humid air at same temperature.' },
        { head: 'Beam Width Limitation', desc: 'Ultrasonic has ~15-20 degree beam angle. Object must be within cone, not at side angle.' },
        { head: 'Reflectivity', desc: 'Soft materials (foam, cotton) absorb ultrasound; hard surfaces (metal, concrete) reflect well.' },
        { head: 'Distance Linearity', desc: 'Accuracy is ±1-2cm at close range, but error increases proportionally at large distances.' },
        { head: 'Noise Immunity', desc: 'Electrical noise rejected by filtering. Acoustic noise (machinery) can cause false echoes.' },
        { head: 'Multiple Sensor Setup', desc: 'Use redundant ultrasonic sensors at slightly different angles — majority voting rejects outliers.' },
        { head: 'Sensor Fusion', desc: 'Combine ultrasonic with IR or LiDAR — each compensates for weaknesses of the other.' }
      ]
    },
    {
      q: 'Design a smart occupancy detection system using motion and presence sensors. Explain working principles.',
      points: [
        { head: 'System Objective', desc: 'Accurately detect if room is occupied, count people entering/exiting, trigger lights/HVAC accordingly.' },
        { head: 'PIR Sensor Role', desc: 'Detects infrared radiation from humans — triggers initial wake-up of system from sleep mode.' },
        { head: 'Ultrasonic Confirmation', desc: 'Measures distance to moving object — confirms PIR detection and differentiates human from pet.' },
        { head: 'Microwave Sensor', desc: 'Detects motion even behind curtains/door — confirms occupancy when person is stationary.' },
        { head: 'Person Counting', desc: 'Direction sensing: if motion crosses threshold A then B = entering; B then A = exiting.' },
        { head: 'Time-Out Logic', desc: 'If no motion for 5 minutes, assume room unoccupied, initiate HVAC/light shutdown.' },
        { head: 'Dual-Sensor Voting', desc: 'PIR AND ultrasonic must both trigger (configurable AND/OR logic) — reduces false alarms.' },
        { head: 'MCU Algorithm', desc: 'Reads sensors every 100ms, applies hysteresis filter, updates occupancy flag, sends I2C/RF command.' },
        { head: 'Real-World Deployment', desc: 'Commercial systems save 30-40% energy; average office: 1000m2 = 10-15 sensor nodes.' }
      ]
    },
    {
      q: 'Explain the advantages and limitations of capacitive occupancy sensors in touchscreen and proximity applications.',
      points: [
        { head: 'Capacitive Principle', desc: 'Measures capacitance between electrode and ground, or between two electrodes (mutual capacitance).' },
        { head: 'Touchscreen Design', desc: 'Projected Capacitive (PCAP): X-Y grid of electrodes, finger touch reduces capacitance at that location.' },
        { head: 'Multi-Touch Capability', desc: 'Simultaneous detection of multiple touch points — PCAP can track up to 10 fingers in smartphones.' },
        { head: 'Liquid Level Detection', desc: 'Capacitive sensor outside non-conductive tank measures dielectric change as liquid level changes.' },
        { head: 'Advantage: Through Material', desc: 'Works through glass, plastic, wood — no line-of-sight needed like optical sensors.' },
        { head: 'Sensitivity Control', desc: 'Adjustable thresholds allow tuning sensitivity — can reject accidental touches, optimize response.' },
        { head: 'Disadvantage: Environmental', desc: 'Humidity, temperature, nearby conductors (metal objects) cause false triggering or drift.' },
        { head: 'Noise Immunity Problem', desc: 'RFI (radio frequency interference) from WiFi, cell towers, power lines causes noise.' },
        { head: 'Solution: Shielding', desc: 'Faraday cage around electrode, twisted pair cabling, low-impedance drive — minimizes coupling.' }
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
    },
    {
      q: 'Design and explain a practical optical communication system using photodiode receiver.',
      points: [
        { head: 'System Overview', desc: 'Transmitter: LED or laser modulated with digital signal. Channel: fiber optic cable. Receiver: photodiode + transimpedance amplifier.' },
        { head: 'LED Transmitter', desc: 'Infrared LED driven by logic signal (1=ON, 0=OFF) at data rate (e.g., 9600 baud for RS232).' },
        { head: 'Photodiode Receiver', desc: 'IR photodiode detects modulated light, produces current proportional to received light intensity.' },
        { head: 'Transimpedance Amplifier', desc: 'Converts photodiode current (nanoamps) to voltage (millivolts) using op-amp with feedback resistor.' },
        { head: 'Signal Recovery', desc: 'Low-pass filter removes high-frequency noise, then Schmitt trigger recovers digital 0/1 from analog signal.' },
        { head: 'Range Limitation', desc: 'Maximum range depends on LED power, cable attenuation, receiver sensitivity. Typical: 10-100 meters.' },
        { head: 'Advantages', desc: 'Immune to electrical interference, galvanic isolation, small size, simple implementation, low cost.' },
        { head: 'Practical Application', desc: 'TV remote control: LED transmits <40kHz carrier modulated with RC5 protocol to photodiode in TV.' },
        { head: 'Speed Limitation', desc: 'Photodiode bandwidth ~1MHz typical; faster signals use heterodyne or analog modulation (RF on optical).' }
      ]
    },
    {
      q: 'Compare imaging sensor technologies (CCD vs CMOS) and explain the evolution toward CMOS dominance.',
      points: [
        { head: 'CCD Charge Transfer', desc: 'All electrons shift to output register in serial chain — analog charge travel, converted to voltage at end.' },
        { head: 'CMOS Parallel Readout', desc: 'Each pixel has onboard amplifier — row/column decoders select pixel, read voltage directly and digitize.' },
        { head: 'CCD Power Consumption', desc: 'Multiple clock signals, high voltage (12-18V) for charge transfer — consumes 100-500mW typical.' },
        { head: 'CMOS Low Power', desc: 'Single supply (3.3V), onboard ADC — total power <100mW, ideal for battery-powered devices.' },
        { head: 'CCD Image Quality', desc: 'Lower noise, higher quantum efficiency, better light sensitivity — preferred for astronomy, medical imaging.' },
        { head: 'CMOS Improvements', desc: 'Back-side illuminated (BSI) CMOS increases light collection. Stacked design adds dedicated ADC layer.' },
        { head: 'CMOS Speed', desc: 'Parallel readout of all pixels simultaneously — high frame rates (1000+ fps) vs CCD sequential (~30fps).' },
        { head: 'Production Cost', desc: 'CMOS uses standard semiconductor fab → cheap. CCD needs specialized fab → expensive.' },
        { head: 'Market Dominance', desc: '2000s: CCD ruled digital cameras. 2010s: CMOS matched/exceeded CCD quality. 2020s: >90% CMOS.' }
      ]
    },
    {
      q: 'Explain the construction and operating principles of a pyrometer for high-temperature measurement.',
      points: [
        { head: 'Non-Contact Measurement', desc: 'Pyrometer measures infrared radiation emitted by hot object — no physical contact needed.' },
        { head: 'Optical Path', desc: 'Lens focuses IR radiation from object onto thermopile detector, IR filter selects specific wavelength range.' },
        { head: 'Thermopile Detector', desc: 'Array of thermocouples in series — each junction absorbs IR photons, generates small voltage (~1mV).' },
        { head: 'Reference Junction', desc: 'Cold junction compensates for ambient temperature — uses thermistor or RTD to sense receiver temperature.' },
        { head: 'Signal Conditioning', desc: 'Amplifies millivolt-level output to 0-5V range. Non-linear correction applied for T^4 (Stefan-Boltzmann).' },
        { head: 'Temperature Range', desc: 'Pyrometers: 250-1000°C typical. Two-color (ratio) pyrometers: 800-3000°C, independent of emissivity.' },
        { head: 'Emissivity Error', desc: 'Stefan-Boltzmann: P = ε × σ × T^4. If ε unknown, measurement error. E.g., polished metal ε=0.1, error 2.5x.' },
        { head: 'Two-Color Technique', desc: 'Measure at two wavelengths, compute ratio — cancels emissivity, gives true temperature.' },
        { head: 'Industrial Application', desc: 'Steel furnace (1500°C), glass molten tank (1600°C), semiconductor processing — all use pyrometers.' }
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
    },
    {
      q: 'Design a complete sensor interfacing circuit for an RTD (Resistance Temperature Detector) with MCU.',
      points: [
        { head: 'RTD Characteristics', desc: 'PT100: 100Ω at 0°C, 138.5Ω at 100°C, 0.385Ω/°C. Small resistance changes require precise measurement.' },
        { head: 'Wheatstone Bridge', desc: 'RTD as one arm of bridge. Excitation current (1mA) applied. Bridge output voltage ~10mV at 100°C.' },
        { head: 'Instrumentation Amplifier', desc: 'INA128 with R_gain=1kΩ provides G=1+50k/R_gain=51V/V. Output: 10mV × 51 = 510mV.' },
        { head: 'Low-Pass Filter', desc: 'RC filter with f_c=10Hz cuts 50/60Hz mains noise and switching noise from MCU.' },
        { head: 'ADC Selection', desc: '16-bit delta-sigma ADC (ADS1115) needed for RTD precision. 10-bit SAR ADC insufficient (only 0.1°C resolution).' },
        { head: 'I2C Interface', desc: 'ADS1115 communicates via I2C. MCU reads conversion result, applies calibration curve.' },
        { head: 'Linearization', desc: 'RTD response is non-linear. Use lookup table (3 points) or quadratic polynomial: T = A + B×R + C×R^2.' },
        { head: 'Cold Junction Comp.', desc: 'Not needed for RTD (no thermoelectric effect). Required for thermocouples with reference junction.' },
        { head: 'Practical Implementation', desc: 'Heating system: PT100 RTD measures boiler temp. MCU compares to setpoint (80°C), controls relay.' }
      ]
    },
    {
      q: 'Explain sensor fusion techniques and the Kalman filter algorithm for improving measurement accuracy.',
      points: [
        { head: 'Sensor Fusion Problem', desc: 'Single sensor has noise/drift. Example: GPS has 5m error, accelerometer drifts over time.' },
        { head: 'Fusion Approach', desc: 'Use fast sensor (accel, prone to drift) + slow sensor (GPS, accurate but noisy). Optimally blend both.' },
        { head: 'Kalman Filter Concept', desc: 'Recursively estimates true state by weighting prediction (model) vs measurement (sensor).' },
        { head: 'Prediction Step', desc: 'Project previous state forward using dynamics model. Example: position = position_old + velocity × dt.' },
        { head: 'Update Step', desc: 'Compare prediction with measurement. Adjust estimate based on measurement uncertainty vs prediction uncertainty.' },
        { head: 'Kalman Gain', desc: 'K = P_predict / (P_predict + R_noise). High K if sensor trusted more (low noise), low K if model trusted.' },
        { head: 'Smartphone Example', desc: 'Gyro measures angle, but drifts. Accelerometer and magnetometer have noise but no drift. Kalman fuses all three.' },
        { head: 'Advantages', desc: 'Optimal weighting, recursion efficient (O(n) memory), real-time computation, proven optimal for linear systems.' },
        { head: 'Limitation', desc: 'Assumes Gaussian noise distribution. For outliers/non-linear, use Extended Kalman Filter (EKF) or Particle Filter.' }
      ]
    },
    {
      q: 'Discuss the design of a wireless sensor network (WSN) for smart building HVAC control.',
      points: [
        { head: 'Building Requirements', desc: '10,000 m^2 office. Goal: maintain 21-23°C in each zone, save 30% energy, real-time monitoring.' },
        { head: 'Sensor Distribution', desc: '40 wireless nodes: 30 temperature sensors (hallways, offices), 10 CO2 sensors (occupancy indicator).' },
        { head: 'Protocol Selection', desc: 'Zigbee chosen: mesh network self-heals, 100m range in open space, low power (months on batteries).' },
        { head: 'Node Specifications', desc: 'Microcontroller (ARM Cortex-M0), temperature sensor (±0.5°C), Zigbee radio, coin-cell battery (CR2032).' },
        { head: 'Power Budget', desc: 'Node: 50mW during operation, <1µW sleep. Temperature measurement every 5min (100µJ/measurement) → 2-3 year battery.' },
        { head: 'Mesh Topology', desc: 'End devices sleep 99.9%, wake to transmit. Router nodes (plugged in) forward packets. Coordinator connects to server.' },
        { head: 'Server Logic', desc: 'Collects data from all nodes, computes zone average temperature, sends setpoint command to HVAC controller.' },
        { head: 'Advantage', desc: 'No installation cost (wireless), flexibility (add/remove nodes), real-time monitoring, zoning capability.' },
        { head: 'Reliability', desc: 'Mesh redundancy: if node fails, others relay packets. Coordinator maintains network time synchronization.' }
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
    },
    {
      q: 'Design a long-range agricultural WSN for smart irrigation monitoring and control.',
      points: [
        { head: 'Application Context', desc: '100 hectare farmland. 50 soil moisture sensors + 10 weather stations. Goal: optimize water, reduce runoff.' },
        { head: 'Sensor Nodes', desc: 'Each field node: soil moisture sensor (capacitive), temperature, humidity, Zigbee radio, solar panel, rechargeable battery.' },
        { head: 'Range Challenge', desc: 'Zigbee typical range 100m line-of-sight, reduced in vegetation. Solution: mesh network with repeater nodes.' },
        { head: 'Repeater Strategy', desc: 'Place 15 repeater nodes on tall poles (5m) at 150m spacing. Create mesh backbone covering entire farm.' },
        { head: 'Gateway Node', desc: 'Connected to farmhouse via WiFi. Collects data from all field nodes every 10 minutes. Runs irrigation algorithm.' },
        { head: 'Control Logic', desc: 'If soil moisture <threshold (40%), activate solenoid valve for 30min. Repeat only if moisture still low after 1 hour.' },
        { head: 'Cloud Integration', desc: 'Gateway uploads data to cloud (AWS IoT Core). Farmer monitors from smartphone. Historical data trains ML model.' },
        { head: 'Power Management', desc: 'Field nodes solar-charged during day. Night operation on battery (5 days autonomy in cloudy weather).' },
        { head: 'ROI Calculation', desc: 'Water savings: 30-40%. Cost: $500/hectare. Payback: 1-2 years. Increased yield: 10-15%.' }
      ]
    },
    {
      q: 'Explain the architecture, routing protocols, and challenges of Industrial Wireless Sensor Networks.',
      points: [
        { head: 'Industrial WSN Difference', desc: 'Consumer WSN: best-effort delivery. Industrial: deterministic (guaranteed latency <100ms), 99.99% uptime.' },
        { head: 'WirelessHART Standard', desc: 'Built on IEEE 802.15.4. Frequency hopping for FCC compliance. Time-slotted TDMA, redundant paths.' },
        { head: 'Mesh with Redundancy', desc: 'Every node has 2+ neighbors. If link fails, packet rerouted automatically within one slot (10ms).' },
        { head: 'Time Synchronization', desc: 'All nodes synchronized to gateway (atomic clock) within <250µs. Essential for TDMA scheduling.' },
        { head: 'Security', desc: 'AES-128 encryption, key management, authentication. Prevents eavesdropping and injection attacks.' },
        { head: 'Routing Protocol (ACDP)', desc: 'Advertise/Connect/Disconnect/Keep-Alive. Builds routing graph at startup. Traffic adapts routes based on link quality.' },
        { head: 'Challenge: Interference', desc: 'Industrial environment: WiFi, Bluetooth, cordless phones on 2.4GHz. Frequency agility switches channels automatically.' },
        { head: 'Challenge: Multipath Fading', desc: 'Reflections from machinery/metal cause constructive/destructive interference. Adaptive power control mitigates.' },
        { head: 'Application: Refinery', desc: 'Pressure sensors on pipelines, pump vibration monitors. Wireless avoids cable routing complexity in hazardous zones.' }
      ]
    },
    {
      q: 'Compare wireless technologies (Zigbee, LoRaWAN, NB-IoT) for IoT applications and their trade-offs.',
      points: [
        { head: 'Zigbee Characteristics', desc: '2.4GHz, 20kbps-250kbps, mesh, 10-100m range, <100mW power, short latency (<100ms).' },
        { head: 'Zigbee Use Case', desc: 'Home automation: lights, locks, thermostats. Real-time response required. Mesh gives indoor coverage.' },
        { head: 'LoRaWAN Characteristics', desc: '433/868/915MHz, 50kbps, star topology, 2-15km rural range, 10µW sleep, high latency (10s-minutes).' },
        { head: 'LoRaWAN Use Case', desc: 'Smart agriculture, asset tracking. Hundreds of nodes on single gateway. Battery life: 5-10 years.' },
        { head: 'NB-IoT Characteristics', desc: '4G/5G cellular, uses existing network, 250kbps, wide coverage, 10-20µW sleep, monthly cost/SIM.' },
        { head: 'NB-IoT Use Case', desc: 'Smart meter, vehicle tracking. Nationwide coverage needed. Reliability critical, cost secondary.' },
        { head: 'Zigbee vs LoRa', desc: 'Zigbee: fast, local mesh. LoRa: far range, slow, single gateway. Zigbee for indoor buildings, LoRa for rural open fields.' },
        { head: 'NB-IoT vs LoRa', desc: 'NB-IoT: licensed spectrum, guaranteed service, cost per device. LoRa: unlicensed, no contract, lower device cost.' },
        { head: 'Hybrid Approach', desc: 'Large campus: LoRa gateways + Zigbee mesh nodes. LoRa connects distant buildings, Zigbee for indoor fine-grained sensing.' }
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
    },
    {
      q: 'Explain the design and operation of an autonomous vehicle sensor fusion system for path planning and safety.',
      points: [
        { head: 'Multi-Sensor Architecture', desc: 'LiDAR (3D map), Radar (velocity), Camera (vision), Ultrasonic (blind spots), IMU (orientation), GPS (global pose).' },
        { head: 'LiDAR Function', desc: 'Spinning laser at 10Hz, 64 channels. Generates 1.3M points/second. Creates 3D point cloud of road/obstacles.' },
        { head: 'Radar Function', desc: '77GHz automotive radar. Measures range, velocity, angle of objects. Robust in rain/fog (where camera fails).' },
        { head: 'Camera Role', desc: 'Detects lanes, traffic lights, signs, pedestrians using deep learning (YOLO, Faster RCNN). High latency (50-100ms).' },
        { head: 'Sensor Fusion', desc: 'Extended Kalman Filter: fuses LiDAR + Radar for position/velocity of each object. Reduces uncertainty.' },
        { head: 'Object Tracking', desc: 'Track IDs assigned to detected objects. History of 10 frames predicts future position (Kalman prediction).' },
        { head: 'Collision Avoidance', desc: 'If object on collision course, compute safe trajectory, activate steering/braking before impact (Predictive MPC).' },
        { head: 'Real-Time Constraints', desc: 'End-to-end latency must be <200ms. LiDAR+Radar: 100ms. Processing: 50ms. Decision+actuators: 50ms.' },
        { head: 'Redundancy', desc: 'Dual-channel system: if one LiDAR fails, switch to Radar+Camera only. Different failure modes = safe shutdown.' }
      ]
    },
    {
      q: 'Design an Industry 4.0 predictive maintenance system using smart sensors and machine learning.',
      points: [
        { head: 'Monitored Equipment', desc: '5 CNC machines in a shop. Goal: detect bearing faults 1 week before failure, prevent unplanned downtime.' },
        { head: 'Sensor Selection', desc: 'Accelerometer (vibration), thermistor (bearing temp), current sensor (motor current), encoder (rotation speed).' },
        { head: 'Data Collection', desc: 'Sample accelerometer at 10kHz, capture 1-second windows every 30 seconds. Total: 10k samples/30s = high bandwidth.' },
        { head: 'Feature Extraction', desc: 'Compute RMS, peak, crest factor, entropy. Take FFT, extract dominant frequencies. 20 features per sample.' },
        { head: 'ML Model', desc: 'Random Forest classifier trained on historical data: healthy vs fault bearing. 95% accuracy on test set.' },
        { head: 'Anomaly Detection', desc: 'Isolation Forest detects unusual feature combinations not seen in training. Flags new fault modes.' },
        { head: 'Health Scoring', desc: 'Each machine gets daily health score 0-100. Score<50 → alert maintenance, schedule replacement.' },
        { head: 'Remaining Useful Life', desc: 'Regression model predicts days until failure. Update daily based on new data. Trend extrapolation.' },
        { head: 'Business Impact', desc: 'Bearing cost: $500. Unplanned downtime cost: $10k/hour. 6-month data shows 8 prevented failures → $79k savings.' }
      ]
    },
    {
      q: 'Discuss the future of smart sensors: nano-sensors, flexible sensors, and edge AI integration.',
      points: [
        { head: 'Nano-Sensor Definition', desc: 'Sensors at nanometer scale using graphene, carbon nanotubes, semiconductor quantum dots.' },
        { head: 'Single-Molecule Sensing', desc: 'Can detect individual virus particles, glucose molecules, cancer biomarkers. Sensitivity: picomolar concentrations.' },
        { head: 'Medical Application', desc: 'Lab-on-a-chip: blood glucose measured without finger prick. Implanted nano-sensor monitors blood continuously.' },
        { head: 'Flexible Electronics', desc: 'Sensors printed on plastic, fabric using inkjet/screen printing. Conform to skin, textile integration.' },
        { head: 'E-Skin Devices', desc: 'Arrays of flexible pressure/temperature sensors on polyimide substrate. Worn as second skin, measures body vitals.' },
        { head: 'Energy Harvesting', desc: 'Piezoelectric (motion) + thermoelectric (body heat) + solar microcells. Battery-free operation, wireless transmission.' },
        { head: 'Edge AI (TinyML)', desc: 'ML models (10-100KB) run directly on MCU. Accelerometer data → fall detection in milliseconds without cloud.' },
        { head: 'Trusted Execution', desc: 'Hardware security module (HSM) embedded in sensor. Sensor data signed with private key, verified at receiver.' },
        { head: 'Vision 2030', desc: 'Ubiquitous sensing: trillions of nano-sensors in environment, clothing, body. Real-time digital replica of physical world.' }
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
