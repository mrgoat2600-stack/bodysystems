// Carousel logic
const systems = ['Nervous', 'Skeletal', 'Muscular', 'Circulatory', 'Lymphatic', 'Immune', 'Digestive', 'Excretory', 'Respiratory', 'Integumentary', 'Endocrine'];
let currentIndex = 0; // Start with first system

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselDisplay = document.getElementById('carousel-display');

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + systems.length) % systems.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % systems.length;
    updateCarousel();
});

function updateCarousel() {
    const system = systems[currentIndex];
    window.selectedSystem = system;
    carouselDisplay.textContent = system;
    showInfo(system);
    if (window.showModel) window.showModel(system);
}

const systemData = {
  Integumentary: {
    description: `The integumentary system protects the body from damage. Its main functions include waterproofing, cushioning, and protecting deeper tissues. The integumentary system also excretes waste and regulates temperature.`,
    organs: ['Skin', 'Hair', 'Nails', 'Sweat Glands'],
    interactions: `The integumentary system acts as a barrier, which helps keep germs out. If the skin has an open wound, Langerhans cells identify the foreign molecules and signal the immune system to send white blood cells to fight off the infection.`
  },
  Skeletal: {
    description: `The skeletal system provides support for the body. Blood is also made inside the bone.`,
    organs: ['Skull', 'Femur', 'Rib Cage', 'Humerus', 'Vertebrae'],
    interactions: `The skeletal system contains bone marrow, which is the site where new red and white blood cells are produced. The circulatory system picks up these new blood cells from the bone and transports them throughout the entire body.`
  },
  Muscular: {
    description: `The muscular system permits movement of the body, maintains posture, and circulates blood throughout the body via the heart muscle.`,
    organs: ['Biceps Brachii', 'Pectoralis Major', 'Quadriceps', 'Smooth Muscle (inside organs)', 'Cardiac Muscle (heart)'],
    interactions: `The muscular system provides the force for movement while the skeletal system provides the framework. Muscles are attached to bones via tendons and work in antagonistic pairs to pull bones in different directions at the joints.`
  },
  Nervous: {
    description: `The nervous system contains specialized cells called neurons that coordinate the actions and transmit signals between different parts of the body.`,
    organs: ['Brain', 'Spinal Cord', 'Peripheral Nerves'],
    interactions: `The nervous system regulates the digestive process by sending signals to the muscles of the esophagus and stomach to undergo peristalsis. It also signals the brain when the stomach is full or when the body needs more energy.`
  },
  Circulatory: {
    description: `The circulatory system is responsible for transporting materials throughout the entire body. It transports nutrients, water, and oxygen to billions of body cells.`,
    organs: ['Heart', 'Superior Vena Cava', 'Inferior Vena Cava', 'Aorta', 'Descending Aorta', 'Arteries', 'Veins'],
    interactions: `The nervous system controls the pace of the circulatory system by sending electrical signals to the heart muscle to speed up and slow down the heart rate. Moreover, the circulatory system provides the brain with a constant supply of oxygen and glucose, which is necessary for it to function.`
  },
  Lymphatic: {
    description: `The lymphatic system drains fluid from tissues while the immune system identifies and destroys pathogens.`,
    organs: ['Lymph Nodes', 'Lymph Vessels', 'Spleen', 'Tonsils', 'White Blood Cells', 'Antibodies', 'Bone Marrow'],
    interactions: `The lymphatic system collects excess fluid from the body tissues and filters it through lymph nodes to remove any pathogens. This filtered fluid then returns to the circulatory system by vein transport, which regulates the blood volume making it stable and free of infection.`
  },
  Immune: {
    description: `The lymphatic system drains fluid from tissues while the immune system identifies and destroys pathogens.`,
    organs: ['White Blood Cells', 'Antibodies', 'Bone Marrow', 'Lymph Nodes', 'Spleen', 'Tonsils'],
    interactions: `The lymphatic system collects excess fluid from the body tissues and filters it through lymph nodes to remove any pathogens. This filtered fluid then returns to the circulatory system by vein transport, which regulates the blood volume making it stable and free of infection.`
  },
  Respiratory: {
    description: `The respiratory system works to regulate oxygen and CO2 in the blood. When you inhale, the diaphragm contracts and air is forced into the lungs. Oxygen is then diffused into the bloodstream while CO2 diffuses into the lungs and exits your body on exhale.`,
    organs: ['Trachea', 'Lungs', 'Alveoli', 'Bronchi', 'Diaphragm'],
    interactions: `The nervous system, specifically the brainstem, monitors the levels of carbon dioxide in the blood, which then sends signals to the respiratory system. In response to the signal, the diaphragm and rib muscles contract at the correct speed, which maintains a steady supply of oxygen.`
  },
  Digestive: {
    description: `The digestive system consists of organs that break down food into components that your body uses for energy and for building and repairing cells and tissues.`,
    organs: ['Mouth', 'Esophagus', 'Stomach', 'Small Intestine', 'Large Intestine', 'Liver', 'Gallbladder', 'Pancreas', 'Rectum', 'Anus'],
    interactions: `The digestive system breaks down food into small nutrient molecules like glucose. The circulatory system then absorbs these nutrients through the walls of the small intestine and carries them to every cell.`
  },
  Endocrine: {
    description: `The endocrine system secretes hormones into the bloodstream to regulate metabolism, growth, and reproduction.`,
    organs: ['Pituitary Gland', 'Hypothalamus', 'Thyroid', 'Adrenal Glands', 'Pancreas', 'Ovaries/Testes'],
    interactions: `The nervous system and endocrine system work together to maintain homeostasis through the hypothalamus. The nervous system detects changes in the environment and triggers the endocrine system to release specific hormones, like adrenaline, to help reactions.`
  },
  Excretory: {
    description: `The process of excretion involves finding and removing waste materials produced by the body.`,
    organs: ['Kidneys', 'Ureters', 'Urinary Bladder', 'Urethra'],
    interactions: `The digestive system processes food and sends unusable solid waste to the large intestine for removal. The excretory system filters the liquid waste products created during digestion of proteins out of the blood to be removed as urine.`
  },
};

const systemColors = {
  Nervous: '#9D4EDD',
  Skeletal: '#FFB703',
  Muscular: '#FB5607',
  Circulatory: '#E63946',
  Lymphatic: '#06FFA5',
  Immune: '#118AB2',
  Digestive: '#F4D58D',
  Excretory: '#A0C4FF',
  Respiratory: '#73DFB4',
  Integumentary: '#FFB4A2',
  Endocrine: '#E0AAF9'
};

function showInfo(name) {
    const data = systemData[name];
    const color = systemColors[name];
    document.getElementById('info-content').innerHTML = `
    <h2 style="color:${color}">${name} System</h2>
    <h4>Description:</h4>
    <p>${data.description}</p>
    <h4>Key Organs:</h4>
    <ul style="color:#ccc; font-size:14px; line-height:2; padding-left:18px">
    ${data.organs.map(o => `<li>${o}</li>`).join('')}
    </ul>
    <h4>Interactions:</h4>
    <p style="line-height:1.9">
    ${data.interactions}
    </p>
    `;
}

window.showModel = function(systemName) {
    const models = window.loadedModels || {};
    Object.values(models).forEach(m => m.visible = false);
    if (systemName && models[systemName]) {
        models[systemName].visible = true;
    } else if (systemName) {
        console.warn(`Selected model is not loaded yet: ${systemName}`);
    }
};

// Start carousel on the first system immediately
updateCarousel();

