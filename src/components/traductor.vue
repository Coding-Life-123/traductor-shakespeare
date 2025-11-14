<script setup>
import { ref } from "vue";

const inputText = ref("");
const translatedText = ref("");

const translations = {
  "el wifi está lento":
    "¡Oh cruel destino! ¿Por qué las señales etéreas me abandonan en mi hora de necesidad?",
  "la comida está fría":
    "¡Ay de mí! Este manjar, otrora cálido, ahora yace frío como el corazón de un villano.",
  "el servicio es malo":
    "¡Oh infortunio! Este servicio, indigno de príncipes, me aflige con su torpeza.",
  "el precio es alto":
    "¡Por Júpiter! Este precio exorbitante hiere mi bolsa como espada enemiga.",
  "el teléfono no funciona":
    "¡Maldición! Este artefacto infernal, que debía conectar almas, me deja en silencio eterno.",
  "el coche no arranca":
    "¡Oh desgracia! Mi fiel corcel mecánico, que debía llevarme a aventuras, yace inerte.",
  "la luz no funciona":
    "¡Ay! Las sombras me envuelven, pues la luz, mi guía, ha abandonado su puesto.",
  "el internet es lento":
    "¡Oh tormento! Las ondas invisibles, que unen mundos, se arrastran con pereza infinita.",
  "la batería se agota":
    "¡Tragedia! Mi fuente de vida eléctrica se desvanece, dejando solo oscuridad.",
  "el aire acondicionado no funciona":
    "¡Calor infernal! Este aparato, que debía refrescar mi alma, falla en su deber.",
};

const translateComplaint = () => {
  const lowerInput = inputText.value.toLowerCase().trim();
  translatedText.value =
    translations[lowerInput] ||
    "¡Oh noble alma! Tu queja no está en mi repertorio, pero habla con elocuencia shakespeariana.";
};
</script>

<template>
  <div class="translator">
    <h1>Traductor de Quejas a Idioma Shakespeariano</h1>
    <p>Convierte quejas modernas a lenguaje dramático clásico</p>

    <div class="input-section">
      <label for="complaint-input">Ingresa tu queja moderna:</label>
      <textarea
        id="complaint-input"
        v-model="inputText"
        placeholder="Ej: El wifi está lento"
        rows="3"
      ></textarea>
    </div>

    <button @click="translateComplaint" class="translate-btn">
      Traducir a Shakespeariano
    </button>

    <div class="output-section" v-if="translatedText">
      <h2>Queja Shakespeariana:</h2>
      <p class="translated">{{ translatedText }}</p>
    </div>
  </div>
</template>

<style scoped>
.translator {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Times New Roman", serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
}

.input-section {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #bdc3c7;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
}

.translate-btn {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.translate-btn:hover {
  background-color: #2980b9;
}

.output-section {
  margin-top: 30px;
  padding: 20px;
  background-color: #ecf0f1;
  border-radius: 10px;
}

h2 {
  margin-top: 0;
  color: #2c3e50;
}

.translated {
  font-style: italic;
  font-size: 18px;
  line-height: 1.6;
  color: #34495e;
}
</style>
