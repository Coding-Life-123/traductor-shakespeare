<script setup>
    import { defineEmits, ref } from 'vue';

    const emit = defineEmits(['submitText']);
    const inputText = ref("");

    function onSubmit(){
        console.log(inputText.value)
        emit('submitText', inputText.value)
    }

</script>

<template>
    <div style="width: 100%; display: flex; flex-direction: column;">
        <label for="complaint-input">Ingresa tu queja moderna:</label>
        <textarea
        id="complaint-input"
        v-model="inputText"
        placeholder="Ej: El wifi está lento"
        rows="3"
        ></textarea>
        <button @click="onSubmit()" class="translate-btn">
            Traducir a Shakespeariano
        </button>
    </div>
</template>

<style>
    label {
    display: block;
    margin-bottom: 15px;
    font-weight: bold;
    color: var(--text-primary);
    text-shadow: 0 0 15px var(--accent-gold);
    font-size: 1.2em;
    }

    textarea {
    padding: 15px;
    border: 2px solid var(--border-color1);
    border-radius: 10px;
    font-size: 16px;
    resize: vertical;
    background-color: var(--bg-color1);
    color: var(--primary-gradient);
    font-family: "Georgia", serif;
    box-shadow: inset 0 2px 4px var(--shadow-strong);
    }

    textarea::placeholder {
    color: var(--bubble-ai);
    opacity: 0.7;
    }

    .translate-btn {
    margin-top: 20px;
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
</style>