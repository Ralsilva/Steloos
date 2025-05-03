// Este script gera sons básicos usando Web Audio API
// Para usar, abra o console e execute as funções

function generateTone(frequency, duration, type = 'sine', fileName = 'tone.mp3') {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Criando MediaRecorder para gravar o som
  const dest = audioContext.createMediaStreamDestination();
  gainNode.connect(dest);
  const mediaRecorder = new MediaRecorder(dest.stream);
  
  const chunks = [];
  mediaRecorder.ondataavailable = (evt) => {
    chunks.push(evt.data);
  };
  
  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/mp3' });
    const url = URL.createObjectURL(blob);
    
    // Cria um link para download
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };
  
  // Iniciar gravação e oscilador
  mediaRecorder.start();
  oscillator.start();
  
  // Parar após a duração especificada
  setTimeout(() => {
    oscillator.stop();
    mediaRecorder.stop();
  }, duration * 1000);
}

// Efeitos sonoros específicos

// Som de estrela brilhando (som agudo com modulação)
function generateStarSound() {
  generateTone(1200, 0.8, 'sine', 'star.mp3');
}

// Som mágico (glissando ascendente)
function generateMagicSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Glissando (subida de frequência)
  oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 1);
  
  // Fade out
  gainNode.gain.setValueAtTime(1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1.2);
  
  // Gravação
  const dest = audioContext.createMediaStreamDestination();
  gainNode.connect(dest);
  const mediaRecorder = new MediaRecorder(dest.stream);
  
  const chunks = [];
  mediaRecorder.ondataavailable = (evt) => {
    chunks.push(evt.data);
  };
  
  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/mp3' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'magic.mp3';
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };
  
  mediaRecorder.start();
  oscillator.start();
  
  setTimeout(() => {
    oscillator.stop();
    mediaRecorder.stop();
  }, 1300);
}

// Som de pássaros (trinos agudos)
function generateBirdsSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator1 = audioContext.createOscillator();
  const oscillator2 = audioContext.createOscillator();
  
  oscillator1.type = 'sine';
  oscillator2.type = 'sine';
  
  const gainNode = audioContext.createGain();
  oscillator1.connect(gainNode);
  oscillator2.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Modulação de frequência para simular trinado
  oscillator1.frequency.setValueAtTime(1500, audioContext.currentTime);
  oscillator2.frequency.setValueAtTime(1700, audioContext.currentTime);
  
  for (let i = 0; i < 10; i++) {
    const time = audioContext.currentTime + i * 0.1;
    oscillator1.frequency.setValueAtTime(1500 + Math.random() * 200, time);
    oscillator2.frequency.setValueAtTime(1700 + Math.random() * 200, time);
  }
  
  // Fade in-out
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + 0.9);
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);
  
  // Gravação
  const dest = audioContext.createMediaStreamDestination();
  gainNode.connect(dest);
  const mediaRecorder = new MediaRecorder(dest.stream);
  
  const chunks = [];
  mediaRecorder.ondataavailable = (evt) => {
    chunks.push(evt.data);
  };
  
  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/mp3' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'birds.mp3';
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };
  
  mediaRecorder.start();
  oscillator1.start();
  oscillator2.start();
  
  setTimeout(() => {
    oscillator1.stop();
    oscillator2.stop();
    mediaRecorder.stop();
  }, 1100);
}

// Som de água (ruído filtrado)
function generateWaterSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const bufferSize = 2 * audioContext.sampleRate;
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  
  // Gerar ruído branco
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  
  const noise = audioContext.createBufferSource();
  noise.buffer = noiseBuffer;
  
  // Filtrar para som de água
  const filter = audioContext.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(400, audioContext.currentTime);
  filter.Q.setValueAtTime(1, audioContext.currentTime);
  
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.2);
  gainNode.gain.setValueAtTime(0.4, audioContext.currentTime + 1.8);
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2);
  
  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Gravação
  const dest = audioContext.createMediaStreamDestination();
  gainNode.connect(dest);
  const mediaRecorder = new MediaRecorder(dest.stream);
  
  const chunks = [];
  mediaRecorder.ondataavailable = (evt) => {
    chunks.push(evt.data);
  };
  
  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/mp3' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'water.mp3';
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };
  
  mediaRecorder.start();
  noise.start();
  
  setTimeout(() => {
    noise.stop();
    mediaRecorder.stop();
  }, 2100);
}

// Som de vento (ruído filtrado)
function generateWindSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const bufferSize = 2 * audioContext.sampleRate;
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  
  // Gerar ruído branco
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  
  const noise = audioContext.createBufferSource();
  noise.buffer = noiseBuffer;
  
  // Filtrar para som de vento
  const filter = audioContext.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(250, audioContext.currentTime);
  filter.Q.setValueAtTime(1.5, audioContext.currentTime);
  
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.5);
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + 1.5);
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2);
  
  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Gravação
  const dest = audioContext.createMediaStreamDestination();
  gainNode.connect(dest);
  const mediaRecorder = new MediaRecorder(dest.stream);
  
  const chunks = [];
  mediaRecorder.ondataavailable = (evt) => {
    chunks.push(evt.data);
  };
  
  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/mp3' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'wind.mp3';
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };
  
  mediaRecorder.start();
  noise.start();
  
  setTimeout(() => {
    noise.stop();
    mediaRecorder.stop();
  }, 2100);
}

// Som de risada de criança (não pode ser facilmente sintetizado, usa amostras)
console.log("Funções disponíveis para gerar sons:");
console.log("- generateStarSound() - Som de estrela");
console.log("- generateMagicSound() - Som mágico");
console.log("- generateBirdsSound() - Som de pássaros");
console.log("- generateWaterSound() - Som de água");
console.log("- generateWindSound() - Som de vento");
console.log("Execute estas funções no console para gerar e baixar os sons.");