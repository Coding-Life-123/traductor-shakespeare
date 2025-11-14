<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToTranslator = () => {
  router.push("/traductor");
};
</script>

<template style="scope">
  <div class="welcome">
    <div class="hero-section">
      <h1 class="main-title">Traductor de Quejas a Idioma Shakespeariano</h1>
      <p class="subtitle">
        Convierte tus quejas modernas en lenguaje dramático y clásico
      </p>
      <div class="description">
        <p>
          ¿Estás cansado de quejas ordinarias? Transforma tus lamentos
          cotidianos en versos dignos de un bardo. Desde "El wifi está lento"
          hasta "Mi café se enfrió", conviértelos en expresiones shakespearianas
          que harán eco en los salones de la eternidad.
        </p>
      </div>
      <button @click="goToTranslator" class="start-btn">
        Comenzar Traducción
      </button>
    </div>

    <div class="features">
      <div class="feature">
        <div class="feature-icon">📜</div>
        <h3>Lenguaje Clásico</h3>
        <p>
          Traduce al estilo de Shakespeare con palabras arcaicas y expresiones
          dramáticas.
        </p>
      </div>
      <div class="feature">
        <div class="feature-icon">⚡</div>
        <h3>Instantáneo</h3>
        <p>Obtén tu traducción shakespeariana al instante con un solo clic.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🎭</div>
        <h3>Entretenimiento</h3>
        <p>
          Diviértete convirtiendo quejas modernas en arte literario clásico.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#template {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.welcome {
  margin: 0;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
    135deg,
    var(--primary-gradient, #2c1810) 0%,
    var(--secondary-gradient, #8b4513) 50%,
    var(--primary-gradient, #2c1810) 100%
  );
  color: var(--text-primary, #f4e4bc);
  font-family: "Georgia", "Times New Roman", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.hero-section {
  text-align: center;
  max-width: 800px;
  margin-bottom: 60px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  border: 3px solid var(--bubble-outline, #deb887);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
}

.main-title {
  font-size: 3.5em;
  font-family: "Cinzel", serif;
  color: var(--text-primary, #ffd700);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
  margin-bottom: 20px;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5em;
  font-style: italic;
  color: #deb887;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.description {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #f4e4bc;
}

.description p {
  margin: 0;
  padding: 0 20px;
}

.start-btn {
  padding: 20px 40px;
  font-size: 1.5em;
  font-weight: bold;
  background: linear-gradient(45deg, #8b4513, #a0522d);
  color: #f4e4bc;
  border: 3px solid #ffd700;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  font-family: "Cinzel", serif;
}

.start-btn:hover {
  background: linear-gradient(45deg, #a0522d, #8b4513);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
}

.features {
  display: flex;
  justify-content: space-around;
  max-width: 1000px;
  width: 100%;
  margin-top: 40px;
}

.feature {
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  border-radius: 15px;
  border: 2px solid #deb887;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  flex: 1;
  margin: 0 10px;
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3em;
  margin-bottom: 15px;
}

.feature h3 {
  font-size: 1.4em;
  color: #ffd700;
  margin-bottom: 15px;
  font-family: "Cinzel", serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.feature p {
  font-size: 1em;
  line-height: 1.5;
  color: #f4e4bc;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2.5em;
  }

  .subtitle {
    font-size: 1.2em;
  }

  .description {
    font-size: 1em;
  }

  .features {
    flex-direction: column;
    align-items: center;
  }

  .feature {
    max-width: 300px;
    margin-bottom: 20px;
  }

  .hero-section {
    padding: 20px;
    margin-bottom: 40px;
  }
}
</style>
