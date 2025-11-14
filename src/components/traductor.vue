<script setup>
import { ref } from "vue";
import TextInput from './TextInput.vue'

const translatedText = ref("");
</script>

<template>
  <div class="translator">
    <h1>Traductor de Quejas a Idioma Shakespeariano</h1>
    <p>Convierte quejas modernas a lenguaje dramático clásico</p>

    <div class="input-section">
      <TextInput />
    </div>    

    <div class="output-section" v-if="translatedText">
      <h2>Queja Shakespeariana:</h2>
      <p class="translated">{{ translatedText }}</p>>
    </div>
  </div>
</template>

<style scoped>
.translator {
  max-width: 700px;
  margin: 20px auto;
  padding: 30px;
  font-family: "Georgia", "Times New Roman", serif;
  background: linear-gradient(135deg, var(--primary-gradient) 0%, var(--secondary-gradient) 50%, var(--primary-gradient) 100%);
  color: var(--text-primary);
  text-shadow: 0 0 15px var(--accent-gold);
  border-radius: 15px;
  box-shadow: 0 10px 30px var(--shadow-soft);
  border: 3px solid var(--bubble-outline);
}

h1 {
  text-align: center;
  color: var(--text-primary);
  text-shadow: 0 0 15px var(--accent-gold);
  font-size: 2.5em;
  margin-bottom: 10px;
  font-family: "Cinzel", serif;
}

.translator > p {
  text-align: center;
  font-style: italic;
  color: var(--text-secondary);
  text-shadow: 0 0 15px var(--accent-burgundy);
  margin-bottom: 30px;
}

.input-section {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  padding: 10px;
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
