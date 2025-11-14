<script setup>
import { ref } from "vue";

const inputText = ref("");
const translatedText = ref("");

const translateComplaint = () => {
  const lowerInput = inputText.value.toLowerCase().trim();
  translatedText.value = translations[lowerInput]
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
  max-width: 700px;
  margin: 20px auto;
  padding: 30px;
  font-family: "Georgia", "Times New Roman", serif;
  background: linear-gradient(135deg, #2c1810 0%, #4a2c1a 50%, #2c1810 100%);
  color: #f4e4bc;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 3px solid #8b4513;
}

h1 {
  text-align: center;
  color: #ffd700;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
  font-family: "Cinzel", serif;
}

.translator > p {
  text-align: center;
  font-style: italic;
  color: #deb887;
  margin-bottom: 30px;
}

.input-section {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 15px;
  font-weight: bold;
  color: #ffd700;
  font-size: 1.2em;
}

textarea {
  width: 100%;
  padding: 15px;
  border: 2px solid #8b4513;
  border-radius: 10px;
  font-size: 16px;
  resize: vertical;
  background-color: #f4e4bc;
  color: #2c1810;
  font-family: "Georgia", serif;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

textarea::placeholder {
  color: #8b4513;
  opacity: 0.7;
}

.translate-btn {
  display: block;
  width: 100%;
  padding: 15px;
  background: linear-gradient(45deg, #8b4513, #a0522d);
  color: #f4e4bc;
  border: 2px solid #ffd700;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.translate-btn:hover {
  background: linear-gradient(45deg, #a0522d, #8b4513);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.output-section {
  margin-top: 40px;
  padding: 25px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text fill="%23f4e4bc" font-size="100" y="80">📜</text></svg>')
      no-repeat center,
    linear-gradient(135deg, #f4e4bc 0%, #deb887 100%);
  border-radius: 15px;
  border: 2px solid #8b4513;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

.output-section::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 20px;
  width: 20px;
  height: 20px;
  background: #2c1810;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.output-section::after {
  content: "";
  position: absolute;
  bottom: -10px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: #2c1810;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

h2 {
  margin-top: 0;
  color: #8b4513;
  font-size: 1.8em;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.translated {
  font-style: italic;
  font-size: 20px;
  line-height: 1.8;
  color: #2c1810;
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: 1px solid #deb887;
}

@media (max-width: 768px) {
  .translator {
    margin: 10px;
    padding: 20px;
  }

  h1 {
    font-size: 2em;
  }

  .translated {
    font-size: 18px;
  }
}
</style>
