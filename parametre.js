

const userDatabase = {
    "email1@example.com": {
        name: "John Doe",
        email: "email1@example.com",
        profilePicture: "img/john-doe.jpg"
    },
    "email2@example.com": {
        name: "Jane Smith",
        email: "email2@example.com",
        profilePicture: "img/jane-smith.jpg"
    }
};


function loginUser(email) {
    const user = userDatabase[email]; // Récupérer les données de l'utilisateur par email

    if (user) {
        updateUserProfile(user); // Mettre à jour l'interface
    } else {
        alert("Utilisateur non trouvé.");
    }
}

// Mettre à jour l'interface utilisateur
function updateUserProfile(user) {
    const avatar = document.getElementById("avatar");
    const userName = document.getElementById("user-name");
    const userEmail = document.getElementById("user-email");

    // Mettre à jour les données dans l'interface
    avatar.src = user.profilePicture || "img/default-avatar.png";
    userName.textContent = user.name || "Nom Prénom";
    userEmail.textContent = user.email || "Adresse email";
}

// Variable pour stocker l'état des vibrations (par défaut désactivées)
let vibrationEnabled = false;

// Fonction pour activer/désactiver les vibrations
function toggleVibration() {
  vibrationEnabled = !vibrationEnabled; // Inverser l'état
  console.log(`Vibrations ${vibrationEnabled ? 'activées' : 'désactivées'}`);
}

// Ajouter un événement au switch
document.getElementById('vibrationSwitch').addEventListener('change', toggleVibration);

// Exemple d'utilisation de vibrations dans d'autres parties de l'application
function triggerVibration() {
  if (vibrationEnabled) {
    navigator.vibrate(200); // Vibrer pendant 200 ms
  } else {
    console.log('Vibration désactivée, pas d’action.');
  }
}

// Initialiser l'état du toggle au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('vibrationSwitch');
  vibrationEnabled = toggle.checked; // Synchroniser l'état initial

  // Mettre à jour la console pour confirmer l'état au démarrage
  console.log(`Vibrations initialement ${vibrationEnabled ? 'activées' : 'désactivées'}`);
});


