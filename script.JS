// Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('active'));

    // Fechar o menu quando um link é clicado (útil no modo mobile)
    document.querySelectorAll('#menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    });
}

// Novo Carrossel de Depoimentos com Dots
const testimonialTrack = document.getElementById('testimonialTrack');
const testimonialCards = document.querySelectorAll('.testimonial-card'); 
const carouselDotsContainer = document.getElementById('carouselDots');

let currentTestimonialIndex = 0;
const totalTestimonials = testimonialCards.length;
const slideIntervalTime = 5000; // 5 segundos para cada slide

let autoPlayInterval;

function createDots() {
    if (!carouselDotsContainer) return;

    carouselDotsContainer.innerHTML = ''; // Limpa os dots existentes
    for (let i = 0; i < totalTestimonials; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentTestialIndex = i;
            updateTestimonialCarousel();
            resetAutoPlay();
        });
        carouselDotsContainer.appendChild(dot);
    }
    updateActiveDot();
}

function updateActiveDot() {
    const dots = document.querySelectorAll('.carousel-dots .dot');
    dots.forEach((dot, index) => {
        if (index === currentTestimonialIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function updateTestimonialCarousel() {
    // Calcula o offset em porcentagem: -100% para o 1º, -200% para o 2º, etc.
    const offset = -currentTestimonialIndex * 100; 
    if (testimonialTrack) {
        testimonialTrack.style.transform = `translateX(${offset}%)`;
    }
    updateActiveDot();
}

function showNextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    updateTestimonialCarousel();
}

function startAutoPlay() {
    if (totalTestimonials > 1) { // Só inicia o autoplay se houver mais de um depoimento
        autoPlayInterval = setInterval(showNextTestimonial, slideIntervalTime);
    }
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Inicialização do Carrossel (só se os elementos existirem)
if (testimonialTrack && carouselDotsContainer && totalTestimonials > 0) {
    createDots();
    updateTestimonialCarousel();
    startAutoPlay();
}


// =========================================================================
// Contador de Clientes (Modificado para Loop)
// =========================================================================
const clientCounter = document.getElementById("clientCounter");
const target = 4000;
const duration = 2000; // Duração de cada contagem (2 segundos)
const steps = 100; // Número de passos
const increment = target / steps;
const intervalTime = duration / steps;
const delayBetweenLoops = 5000; // Tempo de pausa entre os loops (5 segundos)

function startCounter() {
    let count = 0;
    let currentStep = 0;

    const counterInterval = setInterval(() => {
        currentStep++;
        count = Math.min(Math.round(currentStep * increment), target);
        
        clientCounter.textContent = `+${count.toLocaleString('pt-BR')} Clientes Atendidos`;
        
        if(count >= target) {
            clearInterval(counterInterval);
            // Começa a nova contagem após o delay
            setTimeout(startCounterLoop, delayBetweenLoops); 
        }
    }, intervalTime);
}

function startCounterLoop() {
    // Primeiro, zera a contagem antes de recomeçar
    clientCounter.textContent = `+0 Clientes Atendidos`;
    // Começa a nova animação
    startCounter();
}

if (clientCounter) {
    // Inicia o primeiro ciclo da contagem
    startCounter(); 
}